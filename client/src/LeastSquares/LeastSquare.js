import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import { Input } from 'antd';

var X,Point;
class Least extends Component {
    constructor(){
        super();
    this.state={
        showInput : true,
        showButton :true
    }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render (){
        return(
        <div>
            <h2> Least - Squares Regression </h2>
            {this.state.showInput && 
            <div>
                <h2>Number of X </h2><Input name = "X" placeholder = "No. of X"></Input>
                <h2>Number of Point</h2><Input name="Point" placeholder="No. of point" ></Input>
            </div>
            }
            
        </div>);
    }
}