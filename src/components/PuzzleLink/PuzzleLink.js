import styles from './PuzzleLink.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import LocalStorage from '../../core/LocalStorage.js';
import {Link} from 'react-router-dom';

export default class PuzzleLink extends React.Component {

    static propTypes = {
        puzzle: PropTypes.func,
        locked: PropTypes.bool,
    };

    constructor(props) {
        super(props);
    }

    render() {
        let puzzles = LocalStorage.get('puzzles', {});
        let puzzleId = this.props.puzzle.name;
        let puzzleData = puzzles[puzzleId] ?? {};
        let className = this.props.locked
            ? 'link-secondary ' + styles.disabledLink
            : puzzleData.finished && 'link-success';

        return (
            <Link
                to={'/puzzles/' + puzzleId.toLowerCase()}
                className={className}
            >
                {this.props.puzzle.title} {puzzleData.finished && '(решена)'}
            </Link>
        );
    }
}