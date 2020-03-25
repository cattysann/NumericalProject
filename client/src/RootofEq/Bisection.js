import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import './bg.css';
import { Table } from 'antd';
import { compile } from 'mathjs';
//import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import axios from 'axios';
import d3 from "d3";

window.d3 = d3;

const functionPlot = require("function-plot");
/*const ShowFunc = () => {
    functionPlot({
        target: '#root',
        width: 725,
        height: 400,
        padding: "20px 200px 200px",
        yAxis: { domain: [-1, 9] },
        tip: {
            renderer: function () { }
        },
        grid: true,
        data: [
            {
                fn: "x^2",
                derivative: {
                    fn: "2 * x",
                    updateOnMouseMove: true
                }
            }
        ]
    });
    return <div>  </div>
}*/

var dataInTable = [], bb, answ;
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "XL",
        dataIndex: "l",
        key: "l"
    },
    {
        title: "XR",
        dataIndex: "r",
        key: "r"
    },
    {
        title: "XM",
        dataIndex: "m",
        key: "m"
    },
    {
        title: "Error",
        dataIndex: "e",
        key: "e"
    }
];

class Bisection extends Component {


    constructor() {
        super();
        this.state = {
            fx: '',
            xl: 0,
            xr: 2,
            showTable: false,
            showG: false,
            InputG: true
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        console.log('response');
        axios.get('http://192.168.99.100:8080/test/Bisection')
            .then(function (response) {

                console.log(response);

                bb = response

            })

    }
    handleauto() {
        this.setState({
            fx: bb.data[0].fx
        });
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });

    }

    fx(X) {
        var expr = compile(this.state.fx);
        var scope = { x: parseFloat(X) };

        return expr.evaluate(scope);
    }
    ShowFunc() {
        functionPlot({
            target: '#Graph',
            width: 725,
            height: 400,
            padding: "20px 200px 200px",
            tip: {
                renderer: function () { }
            },
            grid: true,
            data: [
                {
                    fn: this.state.fx, color: 'red'
                }
            ],
            annotations: [{
                x: answ,
                color: 'black',
                text: 'answer = ' + answ.toFixed(6)
            }]
        });

    }
    bisection(xl, xr) {
        var i = 0;
        var er, xmn;
        var xm = (xl + xr) / 2
        if (this.fx(xm) * this.fx(xr) > 0) {
            xr = xm
        }
        else {
            xl = xm
        }
        er = Math.abs((xmn - xm) / xmn);
        dataInTable.push({
            iteration: i,
            l: xl.toFixed(6),
            r: xr.toFixed(6),
            m: xm.toFixed(6),
            e: er.toFixed(6)
        })


        do {

            xmn = (xl + xr) / 2
            if (this.fx(xmn) * this.fx(xr) > 0) {
                xr = xmn
            }
            else {
                xl = xmn
            }
            er = Math.abs((xmn - xm) / xmn);
            xm = xmn
            dataInTable.push({
                iteration: i + 1,
                l: xl.toFixed(8),
                r: xr.toFixed(8),
                m: xm.toFixed(8),
                e: er.toFixed(8)
            })
            i++;
        } while (er.toFixed(8) > 0.000001)
        this.setState({
            showTable: true,
            showG: true,
            InputG: false
        })
        answ = xmn;
    }
    render() {
        return (

            <div className="Bisection" >
                <h1>Bisection</h1>

                <div style={{ padding: "50px 200px 200px" }} id="Graph">
                    {this.state.InputG &&
                        <div>
                            <InputGroup size="lg" >
                                <InputGroup.Prepend >
                                    <InputGroup.Text id="inputGroup-sizing-lg" >F(x)</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="fx" placeholder=" " value={this.state.fx} onChange={this.handleChange} />
                            </InputGroup>
                            <br />
                            <InputGroup size="lg" >
                                <InputGroup.Prepend >
                                    <InputGroup.Text id="inputGroup-sizing-lg" >XL</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="xl" placeholder=" default : 0 " onChange={this.handleChange} />
                            </InputGroup>
                            <br />
                            <InputGroup size="lg">
                                <InputGroup.Prepend >
                                    <InputGroup.Text id="inputGroup-sizing-lg">XR</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="xr" placeholder="default : 2 " onChange={this.handleChange} />
                            </InputGroup>
                            <br />
                            <Button variant="outline-primary" onClick={() => this.handleauto()}>auto</Button>
                            <Button variant="outline-primary" onClick={() => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr))}>Submit</Button>
                            <br /><br />
                        </div>
                    }
                    {this.state.showG && <div>
                    <h2>fx = {this.state.fx} ; xl : {this.state.xl} xr : {this.state.xr} answer is {answ}</h2>
                        {this.ShowFunc()}</div>

                    }

                    {this.state.showTable &&
                        <Table columns={columns} dataSource={dataInTable} pagination={{ pageSize: 10 }} scroll={{ y: 340 }} />

                    }

                </div>

            </div>
        )
    }




}
export default Bisection;
