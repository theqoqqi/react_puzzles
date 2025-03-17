import styles from './Puzzle13.module.css';
import itemBoxStyles from './../commonStyles/itemBoxes.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import {Col, Row} from 'react-bootstrap';

export default class Puzzle13 extends AbstractPuzzle {

    static title = 'Containers 3';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.parentRef = React.createRef();
        this.childRef = React.createRef();
    }

    onAnimationFrame() {
        let children = Array.from(this.parentRef.current.children);

        if (children.length > 1 && this.childRef.current.isConnected) {
            children.forEach(child => child.textContent = 'Wheeee!');
            this.solve();
        }
    }

    render() {
        return (
            <Row className={styles.container}>
                <Col ref={this.parentRef} className={itemBoxStyles.box}>
                    <div ref={this.childRef} className={itemBoxStyles.item}>
                        I'm bored
                    </div>
                </Col>
            </Row>
        );
    }
}