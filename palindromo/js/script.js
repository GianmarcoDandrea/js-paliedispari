// PROGRAMMA
const userWord = prompt("Inserisci una parola");
const inversWord = invertWord(userWord);
console.log(userWord, inversWord);

let finalResult = "";
if (userWord === inversWord) {
  finalResult = "La parola inserita è palindroma";
} else {
  finalResult = "La parola inserita non è palindroma";;
}

// OUTPUT
document.getElementById("user-word").innerHTML = userWord;
document.getElementById("result").innerHTML = finalResult;


/********************************************/
// FUNZIONI
function invertWord(userWord) {
  let inversWordElem = "";
  let i = userWord.length - 1;

  while (i >= 0) {
    inversWordElem += userWord[i];
    i--;
  }
  return inversWordElem;
}