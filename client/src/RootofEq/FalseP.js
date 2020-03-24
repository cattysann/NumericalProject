import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import {Table } from 'antd';
import './bg.css';
import { compile } from 'mathjs';
import d3 from "d3";

window.d3 = d3;

const functionPlot = require("function-plot");

var dataInTable = [],answ;
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
        title: "X1",
        dataIndex: "m",
        key: "m"
    },
    {
        title: "Error",
        dataIndex: "e",
        key: "e"
    }
];
class FalseP extends Component {
    constructor() {
        super();
        this.state = {
            fx: '',
            xl: 0,
            xr: 0,
            showTable: false,
            showG: false,
            InputG:true
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });

    }
    fx(X) {
        var expr = compile(this.state.fx);
        var scope = { x: parseFloat(X) };

        return expr.evaluate(scope);
    }

    X(xl,xr){
        return ((xl*this.fx(xr)) - (xr*this.fx(xl)))/(this.fx(xr)-this.fx(xl));
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
            ],
            annotations: [{
                x: answ,
                text: 'answer = '+ answ.toFixed(6)
              }]
        });

    }
    FalseP(xl,xr){
        var x1 = this.X(xl,xr);
        var iter = 0;
        var er = parseFloat(0.000000);
        var data  = []
        data['e'] = [];
        if(this.fx(x1)*this.fx(xr)>0){
                xr=x1;
        }else {
                xl=x1;
        }
        er = Math.abs((x1-xr)/x1);
        data['e'].push(er);
        dataInTable.push({
            iteration: iter,
            l: xl.toFixed(6),
            r: xr.toFixed(6),
            m: x1.toFixed(6),
            e: er.toFixed(6)
        })
        do{
            x1 = this.X(xl,xr);
            if(this.fx(x1)*this.fx(xr)>0){
                er = Math.abs((x1-xr)/x1);
                    xr=x1;
            }else {
                er = Math.abs((x1-xr)/x1);
                    xl=x1;
            }
            dataInTable.push({
                Iteration : iter + 1,
                l : xl.toFixed(8),
                r : xr.toFixed(8),
                m : x1.toFixed(8),
                e : er.toFixed(8)
            })
            data['e'].push(er);
            iter++;
            if(data['e'][iter-1]===data['e'][iter-2]){
                break;
            }
        }while(er.toFixed(8) > 0.000001);
        this.setState({
            showTable: true,
            showG: true,
            InputG:false
        })
        answ = x1;
    }
    render() {
        return (
            <div className="FalseP">
                <h1>False Position</h1>
                <div style={{ padding: "50px 200px 200px" }} id="Graph">
                    {this.state.InputG &&<div>
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
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="xl" placeholder=" " onChange={this.handleChange} />
                    </InputGroup>
                    <br />
                    <InputGroup size="lg" >
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg">XR</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="xr" placeholder=" " onChange={this.handleChange} />
                    </InputGroup>
                    <br />

                    <Button variant="outline-primary" onClick={() => this.FalseP(parseFloat(this.state.xl), parseFloat(this.state.xr))}>Submit</Button>
                    <br /><br />
                    </div>}
                    {this.state.showG && <div style={{backgroundColor:"White"}}>
                        {this.ShowFunc()}</div>
                        
                    }

                    {this.state.showTable &&
                        <Table columns={columns} dataSource={dataInTable} pagination={{ pageSize: 10 }} scroll={{ y: 340 }} />

                    }
                </div>
            </div>
        );
    }



}

export default FalseP;