import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { compile } from 'mathjs';
import './bg.css';


var y ;

class Backwardh extends Component {


    constructor() {
        super();
        this.state = {
            fx: '',
            x: 0,
            h:0,
            deg: 0,
            showAnswer: false
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
    
    backwardh(x,h,deg) {
        switch(deg){
            case 1 :
                y= (-this.fx(x-h)+this.fx(x))/h;
               break;
            case 2 :
                y= (this.fx(x)-(2*this.fx(x-h))+this.fx(x-(2*h)))/Math.pow(h,2);
               break;
            case 3 :
                y = (this.fx(x)-(3*this.fx(x-h))+(3*this.fx(x-(2*h)))-this.fx(x-(3*h)))/Math.pow(h,3);
                break;
            default :
                y = (this.fx(x)-(4*this.fx(x-h))+(6*this.fx(x-(2*h)))-(4*this.fx(x-(3*h)))+this.fx(x-(4*h)))/Math.pow(h,4);
                break;
       }
        this.setState({
            showAnswer: true
        })

    }
    render() {
        return (
            <div className="Backwardh" >
                <h1>Backward Divided-differences ( Error of order h)</h1>
                <div style={{ padding: "50px 200px 200px" }}>                
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
                            <InputGroup.Text id="inputGroup-sizing-lg" >X</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="x" placeholder=" " onChange={this.handleChange} />
                    </InputGroup>
                    <br />
                    <InputGroup size="lg">
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg">H</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="h" placeholder=" " onChange={this.handleChange} />
                    </InputGroup>
                    <br />
                    <InputGroup size="lg">
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-lg">Degree</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="deg" placeholder="(1-4)" onChange={this.handleChange} />
                    </InputGroup>
                    <br />

                    <Button variant="outline-primary" onClick={() => this.backwardh(parseFloat(this.state.x), parseFloat(this.state.h),parseInt(this.state.deg))}>Submit</Button>
                    <br /><br />
                    </div>
                    
                    {this.state.showAnswer &&
                        <div className="Answer">
                        <h1>Degree {this.state.deg} of {this.state.fx} at x = {this.state.x} is {y}</h1>
                        </div>
                    }





                </div>



            </div>
        )
    }




}
export default Backwardh;
