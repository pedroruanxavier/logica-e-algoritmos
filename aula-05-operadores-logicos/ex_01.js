// Importar módulo
const prompt = require('prompt-sync')(); 

let nota = parseFloat(prompt("Digite a nota do aluno:"));
let frequencia = parseFloat(prompt("Digite a frequência (0-100):"));

if (nota >= 7.0 && frequencia >= 75) {
    console.log("Aluno Aprovado!");
} else {
    console.log("Aluno Reprovado.");
}