import React from 'react';
import PropTypes from 'prop-types';
import LocalStorage from '../core/LocalStorage.js';

export default class AbstractPuzzle extends React.Component {

    static title = 'Empty title';

    static propTypes = {

    };

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

    solve() {
        let puzzleId = this.constructor.name;
        let puzzles = LocalStorage.get('puzzles', {});

        puzzles[puzzleId] = {
            finished: true,
        };

        LocalStorage.set('puzzles', puzzles);

        window.location.href = '/result?type=solved&puzzle=' + puzzleId.toLowerCase();
    }

    fail() {
        let puzzleId = this.constructor.name;

        window.location.href = '/result?type=failed&puzzle=' + puzzleId.toLowerCase();
    }

    render() {
        return (
            <div>
                Empty puzzle
            </div>
        );
    }
}