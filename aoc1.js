const values = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "1", "2", "3", "4", "5", "6", "7", "8", "9"
   ]
   const map = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
   }
   let tot = 0
   
   const lines = require('fs').readFileSync('input_1.txt', 'utf-8')
    .split('\n')
    .filter(Boolean);
   
   for (const line of lines){
    tot += findValue(line);
   }
   console.log('total: ' + tot);
   
   function findValue(line){
    let highIndex = 0;
    let lowIndex = line.length;
    let firstDigit;
    let lastDigit;
   
    for (const value of values){
    const occ = findAllOccurences(line, value);
    if (occ[0] < lowIndex) {
    firstDigit = value;
    lowIndex = occ[0];
    }
    if (occ[occ.length-1] > highIndex) {
    lastDigit = value;
    highIndex = occ[occ.length-1];
    }
    }
   
    if (!firstDigit || !lastDigit){
    const digit = firstDigit ?? lastDigit;
    return Number.parseInt(`${convertNum(digit)}${convertNum(digit)}`);
    }
    const res = Number.parseInt(`${convertNum(firstDigit)}${convertNum(lastDigit)}`);
    if (res > 99) {
    throw new Error("mode than 2 digits");
    }
    return res;
   
   }
   
   function convertNum(str){
    if (str.length === 1) return Number.parseInt(str);
    else return map[str];
   }
   
   function findAllOccurences(line, str){
    let indexes = [];
    let index = line.indexOf(str);
    while(index > -1){
    indexes.push(index);
    index = line.indexOf(str, index + 1);
    }
    return indexes;
   }