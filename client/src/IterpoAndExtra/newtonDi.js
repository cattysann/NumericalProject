import React, { Component } from 'react';
import {Card,Input,Table} from 'antd';

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
var interpolationPoint;
class Newton extends Component {
    constructor(){
        super();
        this.state={

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
        return(
            <div>
                <h2>Newton's Divided-Differences</h2>
                <div>
                    <h2>interpolationPoint {parseInt(this.state.interpolationPoint)=== 2 ? (linear) : 
                    parseInt(this.state.interpolationPoint)===3? (Quadratic) : (polynomial)}
                    </h2>
                </div>
            </div>
        );
    }
}