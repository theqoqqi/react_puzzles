
let getAllPuzzles = async () => {
    let allPuzzles = {
        Puzzle1: (await import('../puzzles/Puzzle1/Puzzle1.js')).default,
        Puzzle2: (await import('../puzzles/Puzzle2/Puzzle2.js')).default,
        Puzzle3: (await import('../puzzles/Puzzle3/Puzzle3.js')).default,
        Puzzle4: (await import('../puzzles/Puzzle4/Puzzle4.js')).default,
        Puzzle5: (await import('../puzzles/Puzzle5/Puzzle5.js')).default,
        Puzzle6: (await import('../puzzles/Puzzle6/Puzzle6.js')).default,
        Puzzle7: (await import('../puzzles/Puzzle7/Puzzle7.js')).default,
        Puzzle8: (await import('../puzzles/Puzzle8/Puzzle8.js')).default,
        Puzzle9: (await import('../puzzles/Puzzle9/Puzzle9.js')).default,
        Puzzle10: (await import('../puzzles/Puzzle10/Puzzle10.js')).default,
        Puzzle11: (await import('../puzzles/Puzzle11/Puzzle11.js')).default,
        Puzzle12: (await import('../puzzles/Puzzle12/Puzzle12.js')).default,
        Puzzle13: (await import('../puzzles/Puzzle13/Puzzle13.js')).default,
        Puzzle14: (await import('../puzzles/Puzzle14/Puzzle14.js')).default,
        Puzzle15: (await import('../puzzles/Puzzle15/Puzzle15.js')).default,
        Puzzle16: (await import('../puzzles/Puzzle16/Puzzle16.js')).default,
        Puzzle17: (await import('../puzzles/Puzzle17/Puzzle17.js')).default,
        Puzzle18: (await import('../puzzles/Puzzle18/Puzzle18.js')).default,
        Puzzle19: (await import('../puzzles/Puzzle19/Puzzle19.js')).default,
        Puzzle20: (await import('../puzzles/Puzzle20/Puzzle20.js')).default,
    };

    return Object.entries(allPuzzles)
        .sort(([keyA], [keyB]) => {
            let aNumber = +keyA.slice(6);
            let bNumber = +keyB.slice(6);
            return aNumber - bNumber;
        })
        .map(([key, value]) => {
            value.internalName = key;

            return value;
        });
};

export default getAllPuzzles;
