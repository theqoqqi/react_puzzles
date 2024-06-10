import styles from './Puzzle20.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';

export default class Puzzle20 extends AbstractPuzzle {

    static title = 'Puzzle 20';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    componentDidMount() {
        super.componentDidMount();

        window.solve = () => this.solveFromController();

        this.loadScript('script.js');
    }

    solveFromController() {
        if (!window.controller.allowSolving) {
            console.error('Solving is not allowed');
            return;
        }

        if (window.controller?.password === undefined) {
            console.error('Password required');
            return;
        }

        if (window.controller?.password !== 'qwe123!@#') {
            console.error('Wrong password');
            return;
        }

        this.solve();
    }

    render() {
        return (
            <div>
                Try to solve me
            </div>
        );
    }
}