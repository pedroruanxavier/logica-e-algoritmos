// Importar módulo
const prompt = require('prompt-sync')(); 

let salario = parseFloat (prompt ("Informe o seu Salário R$:"))
let temfiador = prompt("Você possui fiador? (s/n): ") 
temfiador = temfiador === "s"  || temfiador === "sim"

let nomeSujo = prompt("Seu nome está sujo no Serasa? (s/n): " )  
nomeSujo = nomeSujo === "s"  || nomeSujo === "sim"

//Lógica para decidir se pode pegar empréstimo ou não
if(!nomeSujo && (salario >2000 || temfiador)) {
    console.log("Empréstimo Aprovado!")
} else {
    console.log("Empréstimo Negado!")}