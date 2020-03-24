import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Table } from 'antd';
import './bg.css';
import { compile } from 'mathjs';
import d3 from "d3";

window.d3 = d3;

const functionPlot = require("function-plot");

var dataInTable=[];
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Y",
        dataIndex: "y",
        key: "y"
    }
];
class Graphical extends Component {


    constructor() {
        super();
        this.state = {
            fx: '',
            xl: 0,
            xr: 0,
            showTable: false,
            showG: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });

    }

    Fx(X) {
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
                    fn: this.state.fx ,color: 'red'
                }
            ]
        });

    }

    graphical(xl,xr) {
        var data  = []
        data['x'] = []
        data['y'] = []
        this.setState({
            showTable: true,
            showG: true
        })
        for(var i=xl;i<=xr;i++){
            data['x'].push(i);
            console.log(data['x'][i]);
            data['y'].push(this.Fx(i));  
        }
        for(i=0;i<=(xr-xl);i++){
            dataInTable.push({
                iteration : i+1,
                x: data['x'][i],
                y: data['y'][i]
            });
        }
        
        
    }
    render() {
        return (
            <div className="Bisection" >
                <h1>Graphical</h1>
                <div style={{ padding: "50px 200px 200px" }} id ="Graph">

                    <InputGroup size="lg" >
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg" >F(x)</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="fx" placeholder="f(x)" value={this.state.fx} onChange={this.handleChange} />
                    </InputGroup>
                    <br />
                    <InputGroup size="lg" >
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg" >x start</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="xl" placeholder=" x start" onChange={this.handleChange} />
                    </InputGroup>
                    <br />
                    <InputGroup size="lg" >
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg">x stop</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="xr" placeholder=" s stop" onChange={this.handleChange} />
                    </InputGroup>
                    <br />

                    <Button variant="outline-primary" onClick={() => this.graphical(parseFloat(this.state.xl), parseFloat(this.state.xr))}>Submit</Button>
                    <br /><br />
                    {this.state.showG && <div>{this.ShowFunc()}</div>
                        
                    }
                    {this.state.showTable &&
                        <Table columns={columns} dataSource={dataInTable} pagination={{ pageSize: 5 }} scroll={{ y: 340 }}/>

                    }

                </div>



            </div>
        )
    }




}
export default Graphical;
