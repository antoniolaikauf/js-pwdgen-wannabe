//  dati all'utente per creare la password
let nome =prompt("scrivi il tuo nome");

let cognome =prompt("scrivi il tuo cognome")

let colore = prompt("scrivi il tuo coloro preferito");
// variabile da aggiungere alla password 
let numero = "23";
// completamento dalla password e inserimento nella pagina html
let password = nome + cognome + colore + numero;

document.getElementById("testo").innerHTML=password