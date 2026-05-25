// Importar módulo
const prompt = require('prompt-sync')(); 
let idade = parseInt(prompt("Digite a idade do visitante:"));

if (idade < 5 || idade >= 65) {
    console.log("Entrada Gratuita.");
} else {
    console.log("O visitante deve pagar ingresso.");
}