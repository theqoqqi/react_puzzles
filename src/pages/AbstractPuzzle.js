import './AbstractPuzzle.css';
import React from 'react';
import LocalStorage from '../core/LocalStorage.js';

export default class AbstractPuzzle extends React.Component {

    static title = 'Empty title';

    #done = false;

    componentDidMount() {
        let callback = () => {
            this.onAnimationFrame();
            this.frameRequestId = requestAnimationFrame(callback);
        };

        callback();
    }

    componentWillUnmount() {
        if (this.frameRequestId) {
            cancelAnimationFrame(this.frameRequestId);
            this.frameRequestId = null;
        }
    }

    onAnimationFrame() {

    }

    get isDone() {
        return this.#done;
    }

    solve() {
        this.#makeDone('solved', () => this.#solve());
    }

    #solve() {
        let puzzleId = this.constructor.name;
        let puzzles = LocalStorage.get('puzzles', {});

        puzzles[puzzleId] = {
            finished: true,
        };

        LocalStorage.set('puzzles', puzzles);

        window.location.href = '/result?type=solved&puzzle=' + puzzleId.toLowerCase();
    }

    fail() {
        this.#makeDone('failed', () => this.#fail());
    }

    #fail() {
        let puzzleId = this.constructor.name;

        window.location.href = '/result?type=failed&puzzle=' + puzzleId.toLowerCase();
    }

    #makeDone(className, callback) {
        if (this.#done) {
            return;
        }

        this.#done = true;

        this.animateBody(className, 2000, callback);
    }

    animateBody(className, delay, callback) {
        this.addBodyClass(className);

        setTimeout(() => {
            callback();
        }, delay);
    }

    addBodyClass(className) {
        document.body.classList.add(className);
    }

    render() {
        return (
            <div>
                Empty puzzle
            </div>
        );
    }
}