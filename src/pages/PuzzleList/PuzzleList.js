// import styles from './PuzzleList.module.css';
import React from 'react';
import PuzzleLink from '../../components/PuzzleLink/PuzzleLink.js';
import {Link} from 'react-router-dom';
import LocalStorage from '../../core/LocalStorage.js';
import Puzzle1 from '../puzzles/Puzzle1/Puzzle1.js';
import Puzzle2 from '../puzzles/Puzzle2/Puzzle2.js';
import Puzzle3 from '../puzzles/Puzzle3/Puzzle3.js';
import Puzzle4 from '../puzzles/Puzzle4/Puzzle4.js';
import Puzzle5 from '../puzzles/Puzzle5/Puzzle5.js';
import Puzzle6 from '../puzzles/Puzzle6/Puzzle6.js';
import Puzzle7 from '../puzzles/Puzzle7/Puzzle7.js';
import Puzzle8 from '../puzzles/Puzzle8/Puzzle8.js';
import Puzzle9 from '../puzzles/Puzzle9/Puzzle9.js';
import Puzzle10 from '../puzzles/Puzzle10/Puzzle10.js';

export default class PuzzleList extends React.Component {

    static propTypes = {
        // TODO: propTypes
    };

    static allPuzzles = [
        Puzzle1,
        Puzzle2,
        Puzzle3,
        Puzzle4,
        Puzzle5,
        Puzzle6,
        Puzzle7,
        Puzzle8,
        Puzzle9,
        Puzzle10,
    ];

    render() {
        let puzzles = PuzzleList.allPuzzles;
        let storagePuzzles = LocalStorage.get('puzzles', {});
        let lastSolvedPuzzle = puzzles.filter(p => !!storagePuzzles[p.name]).pop();
        let lastSolvedIndex = puzzles.indexOf(lastSolvedPuzzle);

        if (LocalStorage.get('devMode', false)) {
            lastSolvedIndex = puzzles.length;
        }

        return (
            <div className='d-flex flex-column'>
                {puzzles.map((puzzle, index) =>
                    <PuzzleLink key={puzzle.name} puzzle={puzzle} locked={index > lastSolvedIndex + 1} />
                )}

                <Link to='/reset' className='link-danger'>
                    Сбросить результаты
                </Link>
            </div>
        );
    }
}