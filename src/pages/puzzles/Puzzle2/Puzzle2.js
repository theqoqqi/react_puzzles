import styles from './Puzzle2.module.css';
import React from 'react';
// import PropTypes from 'prop-types';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import HackableButton from '../../../components/HackableButton/HackableButton.js';

export default class Puzzle2 extends AbstractPuzzle {

    static title = 'Головоломка 2';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    render() {
        return (
            <div>
                <HackableButton className={styles.unpressableButton} onClick={() => this.solve()}>
                    Меня не нажмешь
                </HackableButton>
            </div>
        );
    }
}