import React, { Component } from 'react';
import { Input } from 'antd';
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import { create, all } from 'mathjs';
import './bg.css';

var A = [], B = [], MA = [], MB = [], Ans = []
const config = {}
const math = create(all, config)

class Cramer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dim: 0,
            Show: false,
            showMatrix: false,
            InputG: true
        }
        this.handleDim = this.handleDim.bind(this);


    }

    CreateMatrix() {
        A = []
        B = []

        MA = []
        MB = []
        Ans = []
        for (var i = 1; i <= this.dim; i++) {
            for (var j = 1; j <= this.dim; j++) {
                MA.push(<Input size='large' style={{ width: '100px' }}
                    id={"a" + i + "" + j} key={"a" + i + "" + j} placeholder={"a" + i + "" + j} />)
            }
            MA.push(<br />)
            MB.push(<Input size='large' style={{ width: '100px' }}
                id={"b" + i} key={"b" + i} placeholder={"b" + i} />)
        }
        this.setState({
            InputG: false,
            showMatrix: true
        });
    }

    cramer() {
        this.valueMatrix();
        var counter
        for (counter = 0; counter < this.dim; counter++) {
            var transformMatrix = JSON.parse(JSON.stringify(A));
            for (var i = 0; i < this.dim; i++) {
                for (var j = 0; j < this.dim; j++) {
                    if (j === counter) {
                        transformMatrix[i][j] = B[i]
                        break;
                    }

                }

            }
            var answer = Math.round(math.det(transformMatrix)) / Math.round(math.det(A))
            Ans.push("x" + (counter + 1) + " = " + answer);
            Ans.push(<br />)



        }
        this.setState({
            ShowANS: true
        });
    }

    valueMatrix() {
        for (var i = 0; i < this.dim; i++) {
            A[i] = []
            for (var j = 0; j < this.dim; j++) {
                A[i][j] = (parseFloat(document.getElementById("a" + (i + 1) + "" + (j + 1)).value));
            }
            B.push(parseFloat(document.getElementById("b" + (i + 1)).value));
        }
    }

    handleDim(event) {
        this.setState({ dim: event.target.value });
    }

    valueset() {
        this.dim = parseInt(this.state.dim)
        this.CreateMatrix()
    }

    render() {
        return (
            <div className="Cramer">
                <h1 >Cramer Rule</h1>
                <div>
                    {this.state.InputG && <div style={{padding:"50px 200px 400px"}}>
                        <InputGroup size="lg">
                            <InputGroup.Prepend >
                                <InputGroup.Text id="inputGroup-sizing-lg">Dimension</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" name="dim" placeholder="Dimention" onChange={this.handleDim} />
                        </InputGroup>
                        <Button onClick={() => this.valueset()}>Submit</Button>
                    </div>
                    }
                    {this.state.showMatrix && <div>
                        <h1>
                            {MA}
                            <br />
                            {MB}
                        </h1>
                        <Button onClick={() => this.cramer()}>Submit</Button></div>}
                    {this.state.ShowANS && <h4>{Ans}</h4>}

                </div>
            </div>
        );
    }
}

export default Cramer;