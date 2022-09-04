import styles from './Puzzle12.module.css';
import itemBoxStyles from './../commonStyles/itemBoxes.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import {Col, Row} from 'react-bootstrap';

export default class Puzzle12 extends AbstractPuzzle {

    static title = 'Головоломка 12';

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
            this.firstChildRef.current.textContent = 'Уиииии!';
            this.secondChildRef.current.textContent = 'Уиииииии!';
            this.solve();
        }
    }

    render() {
        return (
            <Row className={styles.container}>
                <Col ref={this.firstParentRef} className={itemBoxStyles.box}>
                    <div ref={this.firstChildRef} className={itemBoxStyles.item}>
                        Мне скучно
                    </div>
                </Col>
                <Col ref={this.secondParentRef} className={itemBoxStyles.box}>
                    <div ref={this.secondChildRef} className={itemBoxStyles.item}>
                        Мне тоже
                    </div>
                </Col>
            </Row>
        );
    }
}