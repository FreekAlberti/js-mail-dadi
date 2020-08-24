// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// numero random computer

var numComputer = Math.round(Math.random() * 5) + 1;
console.log("Il numero del computer é: " + numComputer);

// numero random computer

var numUtente = Math.round(Math.random() * 5) + 1;
console.log("Il tuo numero é: " + numUtente);

// confronto valori

if (numComputer > numUtente) {
  console.log("Ha vinto il computer");
} else if (numComputer < numUtente) {
  console.log("Hai vinto");
} else {
  console.log("Pari");
}
