import cipher from './cipher.js';

console.log(cipher);

/* Aparecer alerta de como utilizar a pagina*/

let information = document.getElementById("mesage")
information.addEventListener("click", warning) 

function warning(){
    alert ("Por favor, informe no conteúdo da mensagem: \n Seu nome \n Nome e setor do autor \n Escreva números por extenso");
} 

/* Pegar as informações do campo mensagem e aparecer no campo mensagem criptografada */

let string = document.querySelector(".mesage")  /* campo mensagem armazenado em string*/

let offset = document.querySelector("#secret-key") /* chave secreta (deslocamento) armazenada*/

let btnEncrypt = document.getElementById("encrypt") /* Ao clicar no botão criptografar irá cripto msgm */
btnEncrypt.addEventListener("click" , encode)

/* (Cipher.js) function encode() {

     
}

buscar // preventDefault() */


/* Pegar as informações do campo mensagem e aparecer no campo mensagem criptografada */

let decrypto = document.querySelector("#dmesage")  /* campo mensagem cripto armazenado em decrypt*/

let btnDecrypt = document.getElementById("decrypt") /* Ao clicar no botão descriptografar irá descripto msgm */
btnDecrypt.addEventListener("click", decode)

/* (Cipher.js) funtion decode() {

}*/



