import styles from './Puzzle15.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';

export default class Puzzle15 extends AbstractPuzzle {

    static title = 'Containers 5';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.boxRef = React.createRef();
    }

    onAnimationFrame() {
        let box = this.boxRef.current;
        let childCount = box.children.length;
        let value = Math.min(3, childCount);

        box.setAttribute('data-child-count', value);

        if (!this.isDone && childCount >= 3) {
            this.solve();
        }
    }

    render() {
        return (
            <div>
                <div className={styles.box} ref={this.boxRef}>

                </div>
            </div>
        );
    }
}
