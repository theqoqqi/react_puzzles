import styles from './Puzzle8.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import {FormControl} from 'react-bootstrap';

export default class Puzzle8 extends AbstractPuzzle {

    static title = 'Puzzle 8';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.state = {
            first: 'QWER!@#$',
            second: '',
        };
    }

    onInput(e) {
        this.setState({
            second: e.target.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.first === this.state.second) {
            this.solve();
        }
    }

    render() {
        return (
            <div>
                <FormControl
                    type='hidden'
                    value={this.state.first}
                />
                <FormControl
                    className='my-3'
                    type='password'
                    value={this.state.second}
                    onInput={e => this.onInput(e)}
                    placeholder='Enter the password'
                    style={{
                        minWidth: 200,
                    }}
                />
            </div>
        );
    }
}