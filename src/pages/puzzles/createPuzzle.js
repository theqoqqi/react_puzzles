let fs = require('fs');
let fsExtra = require('fs-extra');
let exec = require('child_process').exec;

let puzzleFolders = fs.readdirSync('./')
    .filter(file => /Puzzle\d+/.test(file));

let puzzleNumber = puzzleFolders.length + 1;
let puzzleName = 'Puzzle' + puzzleNumber;
let puzzlePath = './' + puzzleName;



fsExtra.copySync('PuzzleTemplate', puzzlePath);
fs.renameSync(`${puzzlePath}/PuzzleTemplate.js`, `${puzzlePath}/${puzzleName}.js`);
fs.renameSync(`${puzzlePath}/PuzzleTemplate.module.css`, `${puzzlePath}/${puzzleName}.module.css`);



modifyFileText(`${puzzlePath}/${puzzleName}.js`, text => {
    return text.replaceAll('Template', String(puzzleNumber));
});

modifyFileText(`./allPuzzles.js`, text => {
    return text + `export { default as ${puzzleName} } from '../puzzles/${puzzleName}/${puzzleName}.js';\n`;
});



exec(`git add ${puzzlePath}`);



function modifyFileText(path, callback) {
    let text = fs.readFileSync(path, 'utf8');
    let newText = callback(text);

    fs.writeFileSync(path, newText, 'utf8');
}
