/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

var bot = Math.floor((Math.random() * 6) + 1);
console.log(bot);

var player = Math.floor((Math.random() * 6) + 1);
console.log(player);

if (player > bot) {
    alert("COMPLIMENTI HAI VINTO!")
    console.log("win");

} else if (player == bot) {
    alert("PAREGGIO! \nPUOI RITENTARE LA FORTUNA E VINCERE A SOLO 2\u20AC");
    console.log("draw");
    
} else {
    alert("PURTROPPO HAI PERSO! \nPUOI RITENTARE LA FORTUNA E VINCERE A SOLO 2\u20AC");
    console.log("lose");
}