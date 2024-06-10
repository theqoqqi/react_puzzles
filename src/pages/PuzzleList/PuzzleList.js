import styles from './PuzzleList.module.css';
import React from 'react';
import PuzzleLink from '../../components/PuzzleLink/PuzzleLink.js';
import {Link} from 'react-router-dom';
import LocalStorage from '../../core/LocalStorage.js';
import getAllPuzzles from '../puzzles/getAllPuzzles.js';

export default class PuzzleList extends React.Component {

    static propTypes = {
        // TODO: propTypes
    };

    constructor(props) {
        super(props);
        this.state = {
            puzzles: [],
            loading: true,
        };
    }

    async componentDidMount() {
        this.setState({
            puzzles: await getAllPuzzles(),
            loading: false,
        });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        let puzzles = this.state.puzzles;
        let storagePuzzles = LocalStorage.get('puzzles', {});
        let lastSolvedPuzzle = puzzles.filter(p => !!storagePuzzles[p.internalName]).pop();
        let lastSolvedIndex = puzzles.indexOf(lastSolvedPuzzle);

        if (LocalStorage.get('devMode', false)) {
            lastSolvedIndex = puzzles.length;
        }

        return (
            <div className='d-flex flex-column align-items-center fs-5'>
                <p>
                    All puzzles are solved within the tab only.
                </p>
                <p>
                    You can and should use Inspector.
                </p>
                <div className={styles.puzzleGrid}>
                    {puzzles.map((puzzle, index) =>
                        <PuzzleLink key={puzzle.internalName} puzzle={puzzle} locked={index > lastSolvedIndex + 1} />
                    )}
                </div>
                <div>
                    <Link to='/reset' className='link-danger'>
                        Reset progress
                    </Link>
                </div>
            </div>
        );
    }
}