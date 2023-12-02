const lines = require('fs').readFileSync('input_2.txt', 'utf-8')
.split('\n')
.filter(Boolean);

const powersList = [];

function solve(){

    for (const line of lines){
        const maxTracker = {
            red: 0,
            blue: 0,
            green: 0
        };
        const array = line.split(/[\s,;]+/).filter((elem) => elem !== '' && elem !== undefined );
        for (let i = 2; i < array.length; i += 2){
            const color = array[i+1];
            const value = Number.parseInt(array[i]);
            if (maxTracker[color] < value) maxTracker[color] = value;            
        }
        const power = Object.values(maxTracker).reduce((a,b) => a * b, 1);
        powersList.push(power);
    }
    const result = powersList.reduce((a,b)=> a+b, 0);
    console.log(result);
}

solve();