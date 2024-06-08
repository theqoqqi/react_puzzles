import styles from './Puzzle9.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import {FormCheck} from 'react-bootstrap';

export default class Puzzle9 extends AbstractPuzzle {

    static title = 'Puzzle 9';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.choices = {
            first: 'Choose me!',
            second: 'No, me!',
            third: 'Better me!',
        };
        this.choiceStates = {};

        Object.keys(this.choices).forEach(id => {
            this.choiceStates[id] = false;
        });
    }

    onChange(e) {
        Object.keys(this.choices).forEach(id => {
            let input = document.getElementById(id);

            this.choiceStates[id] = input.checked;
        });

        if (Object.values(this.choiceStates).every(s => s)) {
            this.solve();
        }
    }

    render() {
        return (
            <div>
                {Object.entries(this.choices).map(([id, label]) =>
                    <FormCheck
                        id={id}
                        key={id}
                        type='radio'
                        name='choice'
                        label={label}
                        onChange={e => this.onChange(e)}
                    />
                )}
            </div>
        );
    }
}