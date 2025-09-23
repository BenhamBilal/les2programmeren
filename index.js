import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});






let num  =  parseFloat(await userInput.question("Geef me de eerste getal?"));

let som = 0;

som+=num

num = parseFloat(await userInput.question("Geef me de eerste getal2?"));

som +=num

num = parseFloat(await userInput.question("Geef me de eerste getal3?"));

som +=num

num = parseFloat(await userInput.question("Geef me de eerste getal4?"));

som +=num

som /= 4

console.log("Het gemiddelde is " + som)