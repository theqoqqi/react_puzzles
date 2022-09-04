import styles from './Puzzle19.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import {Button} from 'react-bootstrap';

export default class Puzzle19 extends AbstractPuzzle {

    static title = 'Головоломка 19';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.state = {
            expressions: [
                { a: 3, b: 4, result: '?' },
                { a: 2, b: 7, result: '?' },
                { a: 0.1, b: 0.2, result: '?' },
            ],
        };
    }

    componentDidMount() {
        super.componentDidMount();

        this.loadScript('script.js');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let allRight = this.state.expressions.every(e => {
            return e.result === this.round(e.a ** e.b);
        });

        if (!this.isDone && allRight) {
            this.solve();
        }
    }

    onClick() {
        this.setState({
            expressions: this.state.expressions.map(e => {
                e.result = this.pow(e.a, e.b);

                if (typeof e.result === 'number') {
                    e.result = this.round(e.result);
                }

                return e;
            }),
        });
    }

    pow(a, b) {
        return window.pow(a, b);
    }

    round(n) {
        return parseFloat(n.toFixed(10));
    }

    render() {
        return (
            <div>
                {this.state.expressions.map((e, index) =>
                    <div key={index}>
                        {e.a}<sup>{e.b}</sup> = {e.result}
                    </div>
                )}
                <Button className='btn-sm w-100' onClick={() => this.onClick()}>
                    Тык
                </Button>
            </div>
        );
    }
}