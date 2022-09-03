import './App.css';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import PuzzleList from './pages/PuzzleList/PuzzleList.js';
import {Container} from 'react-bootstrap';
import ResetResults from './pages/ResetResults/ResetResults.js';
import PuzzleResult from './pages/PuzzleResult/PuzzleResult.js';

function App() {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center vh-100'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PuzzleList />} />
                    <Route path='/puzzles' element={<PuzzleList />} />
                    {PuzzleList.allPuzzles.map(puzzle =>
                        <Route
                            key={puzzle.name}
                            path={'/puzzles/' + puzzle.name.toLowerCase()}
                            element={React.createElement(puzzle)}
                        />
                    )}
                    <Route path='/result' element={<PuzzleResult />} />
                    <Route path='/reset' element={<ResetResults />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;

