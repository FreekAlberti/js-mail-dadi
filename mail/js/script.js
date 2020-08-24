// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

var email = prompt("Scrivi la tua email");
var listaEmail = ["claudio@gmail.com", "marco@gmail.com", "paolo@gmail.com", "federico@gmail.com", "luca@gmail.com"];

for(i = 0; i < listaEmail.length; i++) {
  if (email == listaEmail[i]) {
    console.log("Email accettata");
  } else {
    console.log("Email non valida")
  }
}
