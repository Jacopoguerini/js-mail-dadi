// Chiedi all'utente la sua email

var mailUtente = prompt("Inserisci qui la tua mail")
console.log(mailUtente);

// lista accessi
var mailList = ["jacopo@gmail.com", "simone@gmail.com", "michele@gmail.com", "claudia@gmail.com", "utente@gmail.com", "mail@gmail.com"]
console.log(mailList);

// controlla lista accessi + esito controllo

// tentativo 1
/* for (var i = 0; i < mailList.length; i++) {
    if (mailList.includes(mailUtente)) {
        console.log("Mail in lista");
        document.getElementById("message").innerHTML = "Alla grande! La mail " + mailUtente + " &egrave; in lista"
    } else {
        console.log("Mail non in lista");
        document.getElementById("message").innerHTML = " Oh no! Purtroppo per te la mail " + mailUtente + "non &egrave; in lista"
    }
} */

// tentativo 1.1
// if (mailList.includes(mailUtente)) {
//     console.log("Mail in lista");
//     document.getElementById("message").innerHTML = "Alla grande! La mail " + mailUtente + " &egrave; in lista"
// } else {
//     console.log("Mail non in lista");
//     document.getElementById("message").innerHTML = " Oh no! Purtroppo per te la mail " + mailUtente + "non &egrave; in lista"
// }


// tentativo 2
for (var i = 0; i < mailList.length; i++) {
    if (mailUtente = mailList[i]) {
        console.log("Mail in lista");
        document.getElementById("message").innerHTML = "Alla grande! La mail " + mailUtente + " &egrave; in lista"
    } else {
        console.log("Mail non in lista");
        document.getElementById("message").innerHTML = " Oh no! Purtroppo per te la mail " + mailUtente + " non &egrave; in lista"
    }
}