import cipher from './cipher.js';

//console.log(cipher);

/* Aparecer alerta de como utilizar a pagina */

let information = document.getElementById("message")
information.addEventListener("click", warning) 

function warning(){
    alert ("Por favor, informe no conteúdo da mensagem: \n Seu nome \n Nome e setor do autor \n Escreva números por extenso");
}

/* Pegar as informações do campo mensagem e aparecer no campo mensagem criptografada */

let msg = document.getElementById("message") /* campo mensagem armazenado em msg*/
let key = document.getElementById("secret-key") /* chave secreta (deslocamento) armazenada*/
let output = document.getElementById("encrypt-msg") /*campo retorno msg criptografa*/
const btnEncrypt = document.getElementById("encrypt") /*Ao clicar no botão criptografar irá cripto msgm*/

function toEncrypt(e) {
    e.preventDefault();
    let textToEncrypt = msg.value
    let offset = Number(key.value)
    return output.innerText = cipher.encode(offset, textToEncrypt)
}
btnEncrypt.addEventListener("click", toEncrypt) 







