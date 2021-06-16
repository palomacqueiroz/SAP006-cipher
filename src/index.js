import cipher from './cipher.js';

//console.log(cipher);

let information = document.getElementById("message")
information.addEventListener("click", warning) 

function warning(){
    alert ("Por favor, informe no conteúdo da mensagem: \n Seu nome \n Nome e setor do autor \n Escreva números por extenso");
}

let msg = document.getElementById("message") 
let key = document.getElementById("secret-key") 
let output = document.getElementById("encrypt-msg") 
const btnEncrypt = document.getElementById("encrypt") 

function toEncrypt(e) {
    e.preventDefault();
    let textToEncrypt = msg.value
    let offset = Number(key.value)
    return output.innerText = cipher.encode(offset, textToEncrypt)
}
btnEncrypt.addEventListener("click", toEncrypt) 







