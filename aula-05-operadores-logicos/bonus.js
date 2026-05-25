// Instrução para poder rodar 
// npm install prompt-sync

// importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar variáveis
let valor = parseFloat(prompt("Qual é o valor da compra? R$"))
let vip = prompt("O cliente é VIP? (s/n): ") === "s"
let cupom = prompt("O cliente possui cupom de desconto? (s/n): ") === "s"
let parcelaAtrasada = prompt("O cliente possui parcela atrasada? (s/n): ") === "n"

// Lógica para decidir se o cliente tem direito ao desconto ou não

if ((vip || valor > 500) && (cupom || parcelaAtrasada)) {
    console.log("O cliente tem direito ao desconto!")
} else {
    console.log("O cliente não tem direito ao desconto.")