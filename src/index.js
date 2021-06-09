import cipher from './cipher.js';

console.log(cipher);

/* Aparecer alerta de como utilizar a pagina*/

let info = document.getElementById ("encrypt")
info.addEventListener("click", alerta) 

function alerta(){
    alert ("Por favor, informe no conteúdo da mensagem: \n Seu nome \n Nome e setor do autor \n Escreva números por extenso");
} // aparecer alert ao clicar na pag criptografar



