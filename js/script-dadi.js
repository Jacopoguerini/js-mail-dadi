/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

var bot = Math.floor((Math.random() * 6) + 1);
console.log("Numero computer: " + bot);

var player = Math.floor((Math.random() * 6) + 1);
console.log("Numero giocatore: " + player);

if (player > bot) {
    alert("COMPLIMENTI HAI VINTO!")
    console.log("Player wins");

} else if (player == bot) {
    alert("PAREGGIO! \nPUOI RITENTARE LA FORTUNA E VINCERE A SOLO 2\u20AC");
    console.log("Draw");

} else {
    alert("PURTROPPO HAI PERSO! \nPUOI RITENTARE LA FORTUNA E VINCERE A SOLO 2\u20AC");
    console.log("Player loses");
}