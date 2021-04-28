/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */



var numbers = ["1", "2", "3", "4", "5", "6"];

for (var i = 0; i < 3; i++) {
    var player = Math.floor(Math.random() * numbers.length)
    console.log(player);
 
}