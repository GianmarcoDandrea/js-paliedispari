const userWord = prompt ("Inserisci una parola");
const inversWord = invertWord(userWord);

if(userWord === inversWord){
    console.log('La parola inserita è palindroma');
  } else {
    console.log('La parola inserita non è palindroma');
}

function invertWord(userWord){
  let inversWordElem = "";

  let i = userWord.length - 1;

  while (i >= 0) {
    inversWordElem += userWord[i];
    i--;
  }

  return inversWordElem;
}