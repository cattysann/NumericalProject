import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './bg.css';
import { compile } from 'mathjs';
/*import d3 from "d3";

window.d3 = d3;

const functionPlot = require("function-plot");
*/
var Algebrite = require('algebrite')
var I,integ,err
class CompoSim extends Component {


    constructor() {
        super();
        this.state = {
            fx: '',
            a: 0,
            b: 0,
            n:0,
            showAns: false,
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
    Inte(a,b) {
        var expr = compile(Algebrite.integral(Algebrite.evaluate(this.state.fx)).toString());
        return expr.evaluate({x:b})-expr.evaluate({x:a});
    }
    /*
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
                    fn: this.state.fx, color: 'red',
                    closed: true
                }
            ]
        });

    }*/
    sumfx(start,n,h){
        var sum = 0;
        if(start%2===0){
            n=n+2;
        }
        var xi=this.state.a+h;
        for(var i = start;i<n;){
            sum += this.fx(xi);
            xi=xi+h;
            i+=2;
        }
        return sum;
    }

    CSim(a,b,n) {
        var h = (b-a)/n;
         I = (h/3)*(this.fx(a)+this.fx(b)+4*this.sumfx(1,n,h)+2*this.sumfx(2,n,2*h));
         integ = this.Inte(a,b);
         err = Math.abs((integ-I)/integ);

        this.setState({
            showAns : true,
            showG : true
        })
    }
    render() {
        return (
            <div className="Integration" >
                <h1>Composite Simpson's Rule</h1>
                <div style={{ padding: "50px 200px 200px" }} id="Graph">
                    <InputGroup size="lg" >
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg" >F(x)</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="fx" placeholder=" " value={this.state.fx} onChange={this.handleChange} />
                    </InputGroup>
                    <br />
                    <InputGroup size="lg">
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg">a</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="a" placeholder="start" onChange={this.handleChange} />
                    </InputGroup>
                    <br />
                    <InputGroup size="lg">
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg">b</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="b" placeholder="stop" onChange={this.handleChange} />
                    </InputGroup>
                    <br />
                    <InputGroup size="lg" >
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg" >N</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="n" placeholder="n point" onChange={this.handleChange} />
                    </InputGroup>
                    <br />


                    <Button variant="outline-primary" onClick={() => this.CSim(parseInt(this.state.a),parseInt(this.state.b),parseInt(this.state.n))}>Submit</Button>
                    <br /><br />

                    
                    {this.state.showAns &&<div>
                        <h2> 
                        Approximate = {I}
                        exact = {integ}
                        error={err}
                        </h2>
                    </div>
                        
                    }

                </div>



            </div>
        )
    }




}
export default CompoSim;
