# ESERCIZIO
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.  
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).  
Sommiamo i due numeri.  
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).  
Dichiariamo chi ha vinto.  

## SOLUZIONE ##
### Raccolta dati ###
1. Chiedo all'utente di scegliere un numero compareso tra 1 e 5;
2. Chiedo all'utente di scegliere pari o dispari;
### Logica 
1. Genero un numero casuale da 1 a 5.
2. Vado a sommare il numero generato a quello inserito dall'utente.
3. Controllo se il numero sommato è pari o dispari
4. SE il risultato del controllo è uguale alla scelta dell'utente,
l'utente  ha vinto,  
ALTRIMENTI il computer ha vinto.

### OUTPUT ###
Stampo l'esito del controllo finale

## FUNZIONI
#### FUNZIONE PER GENERARE UN NUMERO CASUALE TRA 1 E 5
function rndNumberPc() {  

    funzione math.random compresa tra uno e 5;  
    ritorno il numero casuale;
}

#### FUNZIONE PER CONFRONTARE SE LA SOMMA TRA I NUMERI E PARI O DISPARI
function rndNumeberPc() {  

    SE la somma è divisibile per 2 il numero è pari
    ALTRIMENTI è dispari;
}
