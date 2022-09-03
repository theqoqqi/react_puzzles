import styles from './Puzzle3.module.css';
import React from 'react';
import AbstractPuzzle from './../../AbstractPuzzle.js';
import HackableButton from '../../../components/HackableButton/HackableButton.js';

export default class Puzzle3 extends AbstractPuzzle {

    static title = 'Головоломка 3';

    static propTypes = {
        ...AbstractPuzzle.propTypes,
    };

    constructor(props) {
        super(props);

        this.texts = [
            this.createText(0, 'Не жми меня'),
            this.createText(200, 'Не нажимай'),
            this.createText(1500, 'НЕ НАЖИМАЙ'),
            this.createText(3000, 'Не...'),
            this.createText(5000, 'БЫСТРО! НЕ НАЖИМАЙ!'),
            this.createText(6000, 'Молодец'),
        ];

        this.reversedTexts = this.texts.slice().reverse();

        this.enteredAt = null;

        this.state = {
            buttonText: this.getDefaultText(),
        };
    }

    createText(duration, text) {
        return {
            duration,
            text,
        };
    }

    onAnimationFrame() {
        this.updateText();
        this.checkIfSolved();
    }

    updateText() {
        if (this.enteredAt === null) {
            this.setState({
                buttonText: this.getDefaultText(),
            });
            return;
        }

        let text = this.getTextForDuration(Date.now() - this.enteredAt);

        this.setState({
            buttonText: text,
        });
    }

    checkIfSolved() {
        if (this.enteredAt === null) {
            return;
        }

        let duration = Date.now() - this.enteredAt;
        let lastDuration = this.texts[this.texts.length - 1].duration;

        if (duration >= lastDuration + 1500) {
            this.solve();
        }
    }

    getTextForDuration(duration) {
        for (const textInfo of this.reversedTexts) {
            if (textInfo.duration <= duration) {
                return textInfo.text;
            }
        }

        return this.getDefaultText();
    }

    getDefaultText() {
        return this.texts[0].text;
    }

    onMouseEnter() {
        this.enteredAt = Date.now();
    }

    onMouseLeave() {
        this.enteredAt = null;
    }

    render() {
        return (
            <div>
                <HackableButton
                    className={styles.button}
                    onClick={() => this.fail()}
                    onMouseEnter={() => this.onMouseEnter()}
                    onMouseLeave={() => this.onMouseLeave()}
                >
                    {this.state.buttonText}
                </HackableButton>
            </div>
        );
    }
}