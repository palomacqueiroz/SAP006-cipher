import cipher from './cipher.js';

//console.log(cipher);

/* Aparecer alerta de como utilizar a pagina */

let information = document.getElementById("message")
information.addEventListener("click", warning) 

function warning(){
    alert ("Por favor, informe no conteúdo da mensagem: \n Seu nome \n Nome e setor do autor \n Escreva números por extenso");
}

/* Pegar as informações do campo mensagem e aparecer no campo mensagem criptografada */

let msg= document.getElementById("message") /* campo mensagem armazenado em encrypt*/
let key = document.getElementById("secret-key") /* chave secreta (deslocamento) armazenada*/
let output = document.getElementById("encrypt-msg") /*campo retorno msg criptografa*/

let dMsg = document.getElementById("dmessage")
let key2 = document.getElementById("secretKey")
let outputD = document.getElementById("decrypt-msg")

const btnEncrypt = document.getElementById("encrypt") /* Ao clicar no botão criptografar irá cripto msgm */
btnEncrypt.addEventListener("click", toEncrypt)

const btnDecrypt = document.getElementById("decrypt")
btnDecrypt.addEventListener("click", toDecrypt)

function toEncrypt() {   
   let textToEncrypt = msg.value   
   let offset = Number(key.value)      
    return output.innerText = cipher.encode(offset,textToEncrypt)   
}

function toDecrypt() {
    let decrypto = dMsg.value    
    let offset = Number(key2.value)
    return outputD.innerText = cipher.decode(offset,decrypto)    
   
}

/*buscar preventDefault() */






