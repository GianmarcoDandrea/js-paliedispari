# ESERCIZIO #
Chiedere all’utente di inserire una parola.  
Creare una funzione per capire se la parola inserita è palindroma (non usare funzioni predefinite di js).

## SOLUZIONE ##
### Raccolta dati
1. Chiedere all'utente di inserire una parola

### Logica ###
1. Prendo la parola inserisco ogni lettera singolarmnete in un'array
2. Inverto l'ordine della parola grazie alla funzione InvertWord.
3. SE la parola è palindroma salvo "è palindroma"
    ALTRIMENTI salvo"non è palindroma".

### OUTPUT ###
Stampo il risultato.

## FUNZIONE
#### FUNZIONE PER INVERTIRE LA PAROLA 
function InvertWord(userWord) {


    Definisco le variabili   
    variabile parola inversa;  
    variabile i = (lunghezza della parola - 1);  

    ciclo while che va a prendere l'ultima lettera della parola inserita dall'utente a la inserisce nella prima posizione diponibile nella parola invertita;  

    i--; 

    ritono la parola inversa
}


