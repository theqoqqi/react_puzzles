import styles from './Puzzle6.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import {FormControl} from 'react-bootstrap';

export default class Puzzle6 extends AbstractPuzzle {

    static title = 'Puzzle 6';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.state = {
            number: 100,
        };
    }

    onInput(e) {
        this.setState({
            number: e.target.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.number < 0) {
            this.solve();
        }
    }

    render() {
        return (
            <div>
                <FormControl
                    type='number'
                    min={0}
                    max={1000}
                    step={100}
                    value={this.state.number}
                    onInput={e => this.onInput(e)}
                    placeholder={'I don\'t like negative numbers'}
                    style={{
                        minWidth: 300,
                    }}
                />
            </div>
        );
    }
}