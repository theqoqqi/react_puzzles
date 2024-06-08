import './AbstractPuzzle.css';
import React from 'react';
import LocalStorage from '../core/LocalStorage.js';
import axios from 'axios';

export default class AbstractPuzzle extends React.Component {

    static title = 'Empty title';

    #done = false;

    constructor(props) {
        super(props);

        this.loadedScripts = [];
    }

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

        this.unloadScripts();
    }

    onAnimationFrame() {

    }

    getPuzzleFile(fileName, options = {}) {
        return axios.get(`/react_puzzles/scripts/puzzles/${this.puzzleId}/${fileName}`, options);
    }

    loadScript(fileName) {
        this.getPuzzleFile(fileName)
            .then(response => {
                let script = document.createElement('script');
                script.innerHTML = response.data;
                document.body.appendChild(script);
                this.loadedScripts.push(script);
            });
    }

    unloadScripts() {
        this.loadedScripts.forEach(script => {
            script.parentElement.removeChild(script);
        });

        this.loadedScripts.length = 0;
    }

    get internalName() {
        return this.constructor.internalName;
    }

    get puzzleId() {
        return this.internalName.toLowerCase();
    }

    get isDone() {
        return this.#done;
    }

    solve() {
        this.#makeDone('solved', () => this.#solve());
    }

    #solve() {
        let puzzles = LocalStorage.get('puzzles', {});

        puzzles[this.internalName] = {
            finished: true,
        };

        LocalStorage.set('puzzles', puzzles);

        this.props.navigate('../result?type=solved&puzzle=' + this.puzzleId);
    }

    fail() {
        this.#makeDone('failed', () => this.#fail());
    }

    #fail() {
        this.props.navigate('../result?type=failed&puzzle=' + this.puzzleId);
    }

    #makeDone(className, callback) {
        if (this.#done) {
            return;
        }

        this.#done = true;

        this.animateBody(className, 2000, () => {
            this.removeBodyClass(className);
            callback();
        });
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

    removeBodyClass(className) {
        document.body.classList.remove(className);
    }

    render() {
        return (
            <div>
                Empty puzzle
            </div>
        );
    }
}