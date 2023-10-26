/////////////////////////// PROGRAMMA /////////////////////////

// CONSTANTI 
let userNumber;
let userChoice;
// numero generato automaticamente
const computerNumber = parseInt(rndNumberPc(1, 5));

// CHIEDO E CONFERMA DI UN NUMERO COMPRESO TRA 1 E 5

do {    
    userNumber = parseInt(prompt("inserisci un numero tra 1 e 5!"));

} while (isNaN(userNumber) || (userNumber < 1 || userNumber > 5));

console.log(userNumber);

// CHIEDO E CONFERMA TRA PARI O DISPARI
do {

userChoice = prompt("Scegli pari o dispari!");

} while(userChoice != "pari" && userChoice != "dispari");

console.log(userChoice);

console.log(computerNumber);

// somma del numero del computer con quello dell'utente
const sumNumber = userNumber + computerNumber;
console.log(sumNumber);

let result = oddEven(sumNumber);
console.log(result);

let finalResult = "";
if (result === userChoice) {
    finalResult =" Congratulazioni hai vinto!!!";
} else {
    finalResult = "Mi spiace hai perso";
}

console.log(finalResult);

//OUTPUT
document.getElementById("user-number").innerHTML = userNumber;
document.getElementById("user-choice").innerHTML = userChoice;
document.getElementById("rnd-number").innerHTML = computerNumber;
document.getElementById("sum").innerHTML = sumNumber;
document.getElementById("final-result").innerHTML = finalResult;


/////////////////////////// FUNZIONI /////////////////////////
// funzione che genera numero casuale
function rndNumberPc (min, max) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    return rndNumber;
}

// funzione che restituisce pari o dispari in base al numero
function oddEven(sumNumber) {
    let functionResult = "";
    if(sumNumber % 2 === 0) {
        functionResult ="pari";
    } else {
        functionResult ="dispari";
    }

    return functionResult;
}