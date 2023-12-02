const lines = require('fs').readFileSync('input_2.txt', 'utf-8')
.split('\n')
.filter(Boolean);

const maxConfig = {
    red : 12,
    green : 13,
    blue: 14
}

let gameID = 1;

function buildGameRecord(){
    const possibleGamesList = [];

    for (const line of lines){
        let possibleGame = true;
    
        const array = line.split(/[\s,;]+/).filter((elem) => elem !== '' && elem !== undefined );
        for (let i = 2; i < array.length; i += 2){
            
            possibleGame = isColorPossible(array[i], array[i+1])
            if (possibleGame === false) {
                break;
            }
        }

        if (possibleGame) {
            possibleGamesList.push(gameID);
        }
        gameID++;
    }
    
    console.log(possibleGamesList)
    const sum = possibleGamesList.reduce((a,b) => a+b,0);
    console.log(sum);
}


function isColorPossible(numberStr, colorStr){
    if (Number.parseInt(numberStr) <= maxConfig[colorStr]) return true;
    else return false;
}

buildGameRecord();
