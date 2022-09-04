import styles from './Puzzle11.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import {Col, Row} from 'react-bootstrap';

export default class Puzzle11 extends AbstractPuzzle {

    static title = 'Головоломка 11';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.ballRef = React.createRef();
        this.wallRef = React.createRef();
    }

    componentDidMount() {
        super.componentDidMount();

        requestAnimationFrame(() => {
            this.ballRef.current.classList.add(styles.active);
        });
    }

    onAnimationFrame() {
        if (!this.wallRef.current.isConnected && !this.ballRef.current.classList.contains(styles.noWall)) {
            this.ballRef.current.classList.add(styles.noWall);

            setTimeout(() => this.solve(), 1000);
        }
    }

    render() {
        return (
            <Row className={styles.container}>
                <Col className={styles.box}>
                    <div className={styles.arena}>
                        <div className={styles.ball} ref={this.ballRef}>
                            Я шарик
                        </div>
                        <div className={styles.wall} ref={this.wallRef}>
                            Я стенка
                        </div>
                        <div className={styles.gates}>
                            Я хочу шарик
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}
