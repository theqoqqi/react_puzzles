import styles from './Puzzle7.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import {FormControl} from 'react-bootstrap';

export default class Puzzle7 extends AbstractPuzzle {

    static title = 'Puzzle 7';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.state = {
            first: 'q12we34r',
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
                    className='my-3'
                    type='password'
                    value={this.state.first}
                    placeholder='Enter the password'
                    onInput={() => {}}
                    style={{
                        minWidth: 200,
                    }}
                />
                <FormControl
                    className='my-3'
                    type='password'
                    value={this.state.second}
                    onInput={e => this.onInput(e)}
                    placeholder='Enter the password again'
                    style={{
                        minWidth: 200,
                    }}
                />
            </div>
        );
    }
}