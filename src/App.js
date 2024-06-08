import './App.css';
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route, useNavigate,
} from 'react-router-dom';
import PuzzleList from './pages/PuzzleList/PuzzleList.js';
import { Container } from 'react-bootstrap';
import ResetResults from './pages/ResetResults/ResetResults.js';
import PuzzleResult from './pages/PuzzleResult/PuzzleResult.js';
import getAllPuzzles from './pages/puzzles/getAllPuzzles.js';

function AllRoutes({ puzzles }) {
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path='/' element={<PuzzleList puzzles={puzzles} />} />
            <Route path='/puzzles' element={<PuzzleList puzzles={puzzles} />} />
            {puzzles.map(puzzle =>
                <Route
                    key={puzzle.internalName}
                    path={'/puzzles/' + puzzle.internalName.toLowerCase()}
                    element={React.createElement(puzzle, { navigate })}
                />
            )}
            <Route path='/result' element={<PuzzleResult />} />
            <Route path='/reset' element={<ResetResults />} />
        </Routes>
    );
}

function App() {
    const [puzzles, setPuzzles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setPuzzles(await getAllPuzzles());
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center vh-100'>
            <BrowserRouter basename='react_puzzles'>
                <AllRoutes puzzles={puzzles} />
            </BrowserRouter>
        </Container>
    );
}

export default App;
