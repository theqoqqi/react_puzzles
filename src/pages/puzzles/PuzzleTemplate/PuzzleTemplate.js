import styles from './PuzzleTemplate.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';

export default class PuzzleTemplate extends AbstractPuzzle {

    static title = 'Puzzle Template';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    render() {
        return (
            <div>
                <button onClick={() => this.solve()}>
                    Press me
                </button>
            </div>
        );
    }
}