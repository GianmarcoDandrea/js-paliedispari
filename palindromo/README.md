# Consegna #
Chiedere all’utente di inserire una parola.  
Creare una funzione per capire se la parola inserita è palindroma (non usare funzioni predefinite di js).

## Soluzione ##
### Raccolta dati
1. Chiedere all'utente di inserire una parola

### Logica
1. Prendo la parola inserisco ogni lettera singolarmnete in un'array
2. Inverto l'ordine della parola grazie alla funzione InvertWord.
3. SE la parola è palindroma stampare "è palindroma"
    ALTRIMENTI stampare "non è palindroma".

### Funzione 
function InvertWord(userWord) {  
    variabile parola inversa;  
    variabile i = (lunghezza della parola - 1);  
    ciclo while che va a prendere l'ultima lettera della parola inserita dall'utente a la inserisce nella prima posizione diponibile nella parola invertita;  
    i--;  
    return parola inversa;    
}


