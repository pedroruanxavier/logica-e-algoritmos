// Intrução para poder rodar 
// npm install prompt-sync

// importar módulo 
const prompt = require('prompt-sync')();

// Lógica 
let nomeUsuario =  prompt("informe o nome do Usuarío: ");
let senha = prompt("Informe a senha: ");
console.log(""); // Linha em branco

// Referencias
let loginBanco = "pedro";
let senhaBanco = "1234"; 

// Condicional SE + E 
if(nomeUsuario === loginBanco && senha === senhaBanco){
    console.log("Acesso autorizado!");
} else{
    console.log("Acesso negado");
}