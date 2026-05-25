// Importar módulo
const prompt = require('prompt-sync')(); 
let esgotado = prompt("O produto está esgotado? (s/n)").toLowerCase();

if (esgotado === "n") {
    console.log("Produto disponível para venda");
    // Lógica de venda executada aqui
} else {
    console.log("Por favor, reabasteça o estoque");
}