
import cipher from './cipher.js';

let dMsg = document.getElementById("dmessage")
let dKey = document.getElementById("secret-key")
let outputD = document.getElementById("decrypt-msg")
const btnDecrypt = document.getElementById("decrypt")

function toDecrypt(e) {
    e.preventDefault();
    let decrypto = dMsg.value
    let offsetD = Number(dKey.value)
    return outputD.innerText = cipher.decode(offsetD, decrypto)
}
btnDecrypt.addEventListener("click", toDecrypt)