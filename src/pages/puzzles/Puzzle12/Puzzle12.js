import styles from './Puzzle12.module.css';
import itemBoxStyles from './../commonStyles/itemBoxes.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import {Col, Row} from 'react-bootstrap';

export default class Puzzle12 extends AbstractPuzzle {

    static title = 'Containers 2';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.firstParentRef = React.createRef();
        this.secondParentRef = React.createRef();
        this.firstChildRef = React.createRef();
        this.secondChildRef = React.createRef();
    }

    onAnimationFrame() {
        let firstParent = this.firstChildRef.current.parentElement;
        let secondParent = this.secondChildRef.current.parentElement;
        let isValidParent = firstParent === this.firstParentRef.current
            || firstParent === this.secondParentRef.current;

        if (firstParent === secondParent && isValidParent) {
            this.firstChildRef.current.textContent = 'Wheeee!';
            this.secondChildRef.current.textContent = 'Wheeeeee!';
            this.solve();
        }
    }

    render() {
        return (
            <Row className={styles.container}>
                <Col ref={this.firstParentRef} className={itemBoxStyles.box}>
                    <div ref={this.firstChildRef} className={itemBoxStyles.item}>
                        I'm bored
                    </div>
                </Col>
                <Col ref={this.secondParentRef} className={itemBoxStyles.box}>
                    <div ref={this.secondChildRef} className={itemBoxStyles.item}>
                        Me too
                    </div>
                </Col>
            </Row>
        );
    }
}