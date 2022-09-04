import styles from './Puzzle14.module.css';
import itemBoxStyles from './../commonStyles/itemBoxes.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';

export default class Puzzle14 extends AbstractPuzzle {

    static title = 'Головоломка 14';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.ballRef = React.createRef();
        this.boxRef = React.createRef();
    }

    onAnimationFrame() {
        if (!this.isDone && this.isContained(this.boxRef.current, this.ballRef.current)) {
            this.solve();
        }
    }

    isContained(box, ball) {
        let boxBounds = box.getBoundingClientRect();
        let ballBounds = ball.getBoundingClientRect();

        return ballBounds.left >= boxBounds.left
            && ballBounds.right <= boxBounds.right
            && ballBounds.top >= boxBounds.top
            && ballBounds.bottom <= boxBounds.bottom;
    }

    render() {
        return (
            <div>
                <div className={styles.ball} ref={this.ballRef}>
                    Хочу в коробку!
                </div>
                <div className={styles.box} ref={this.boxRef}>
                    Йа коробко
                </div>
            </div>
        );
    }
}
