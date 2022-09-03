import styles from './Puzzle4.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import HackableButton from '../../../components/HackableButton/HackableButton.js';

export default class Puzzle4 extends AbstractPuzzle {

    static title = 'Головоломка 4';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    render() {
        return (
            <div>
                <div className={styles.wrapper} onClick={() => this.solve()}>
                    <HackableButton className={styles.button}>
                        Найди меня
                    </HackableButton>
                </div>
            </div>
        );
    }
}