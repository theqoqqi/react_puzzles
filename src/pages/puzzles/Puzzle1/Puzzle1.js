// import styles from './Puzzle1.module.css';
import React from 'react';
// import PropTypes from 'prop-types';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import HackableButton from '../../../components/HackableButton/HackableButton.js';

export default class Puzzle1 extends AbstractPuzzle {

    static title = 'Головоломка 1';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    render() {
        return (
            <div>
                <HackableButton disabled onClick={() => this.solve()}>
                    Нажми меня
                </HackableButton>
            </div>
        );
    }
}