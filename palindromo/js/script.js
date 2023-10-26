// PROGRAMMA
const userWord = prompt ("Inserisci una parola");
const inversWord = invertWord(userWord);
console.log(userWord, inversWord);

if(userWord === inversWord){
    console.log('La parola inserita è palindroma');
  } else {
    console.log('La parola inserita non è palindroma');
}


/********************************************/
// FUNZIONI
function invertWord(userWord){
  let inversWordElem = "";
  let i = userWord.length - 1;

  while (i >= 0) {
    inversWordElem += userWord[i];
    i--;
  }
  return inversWordElem;
}