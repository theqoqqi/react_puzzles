import styles from './Puzzle5.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import HackableButton from '../../../components/HackableButton/HackableButton.js';

export default class Puzzle5 extends AbstractPuzzle {

    static title = 'Puzzle 5';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    render() {
        return (
            <div>
                <span className={styles.tip}>
                    The button doesn't like large spaces
                </span>
                <span className={styles.tip2}>
                    Just a little more
                </span>
                <HackableButton className={styles.button} onClick={() => this.solve()}>
                    Press
                </HackableButton>
            </div>
        );
    }
}