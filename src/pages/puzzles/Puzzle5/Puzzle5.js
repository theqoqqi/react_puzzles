import styles from './Puzzle5.module.css';
import React from 'react';
// import PropTypes from 'prop-types';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import HackableButton from '../../../components/HackableButton/HackableButton.js';

export default class Puzzle5 extends AbstractPuzzle {

    static title = 'Головоломка 5';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    render() {
        return (
            <div>
                <span className={styles.tip}>
                    Кнопка не любит большие пространства
                </span>
                <span className={styles.tip2}>
                    Еще немного
                </span>
                <HackableButton className={styles.button} onClick={() => this.solve()}>
                    Нажми
                </HackableButton>
            </div>
        );
    }
}