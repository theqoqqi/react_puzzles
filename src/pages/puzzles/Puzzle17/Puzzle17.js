import styles from './Puzzle17.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';

export default class Puzzle17 extends AbstractPuzzle {

    static title = 'Scripts 2';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    componentDidMount() {
        super.componentDidMount();

        window.solve = () => this.solve();

        this.loadScript('script.js');
    }

    render() {
        return (
            <div>
                Solve me totally
            </div>
        );
    }
}