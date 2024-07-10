console.log("File JavaScript caricato correttamente");

// Chiedo all'utente il suo nome
const userName = prompt("Qual è il tuo nome?");
console.log('NAME: ', userName);

// Chiedo all'utente il suo cognome
const surname = prompt("Qual è il tuo cognome?");
console.log('COGNOME: ', surname);

// Chiedo all'utente il suo colore preferito
const color = prompt("Qual è il tuo colore preferito?");
console.log('COLORE: ', color);

document.getElementById("reference").innerHTML = "Ciao " + userName + " " + surname + ", il tuo colore preferito è " + color + " e il numero è 130.";