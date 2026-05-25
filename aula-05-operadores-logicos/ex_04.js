// Importar módulo
const prompt = require('prompt-sync')(); 

let idadeCandidato = parseInt(prompt("Digite sua idade:"));
let sabeJS = prompt("Sabe JavaScript? (s/n)").toLowerCase();
let sabePython = prompt("Sabe Python? (s/n)").toLowerCase();

if (idadeCandidato >= 18 && (sabeJS === "s" || sabePython === "s")) {
    console.log("Currículo aceito.");
} else {
    console.log("Currículo recusado.");
}