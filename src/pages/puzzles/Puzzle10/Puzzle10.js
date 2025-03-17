import styles from './Puzzle10.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import FormRange from 'react-bootstrap/FormRange';

export default class Puzzle10 extends AbstractPuzzle {

    static title = 'Inputs 5';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            target: 155,
        };
    }

    onInput(e) {
        this.setState({
            number: +e.target.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.number === this.state.target) {
            this.solve();
        }
    }

    render() {
        return (
            <div>
                <h4 className={{
                    'text-uppercase': true,
                }}>
                    {this.state.number} / {this.state.target}
                </h4>
                <FormRange
                    min={0}
                    max={100}
                    step={10}
                    value={this.state.number}
                    onInput={e => this.onInput(e)}
                    style={{
                        minWidth: 200,
                    }}
                />
            </div>
        );
    }
}