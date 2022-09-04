import styles from './Puzzle16.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import axios from 'axios';

export default class Puzzle16 extends AbstractPuzzle {

    static title = 'Головоломка 16';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.target = 10;

        this.state = {
            n: 0,
        };
    }

    componentDidMount() {
        super.componentDidMount();

        this.loadScript('script.js');
    }

    onAnimationFrame() {
        this.setState({
            n: window.n,
        });

        if (!this.isDone && this.state.n >= this.target) {
            this.solve();
        }
    }

    render() {
        return (
            <div>
                <h4>
                    {this.state.n} / {this.target}
                </h4>
            </div>
        );
    }
}