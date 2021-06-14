const cipher = {

  encode: function encode(offset, string) {

    let newMsg = "" /* recebe msg que será digitada */

    /*  if (string == "" || string == null || offset == "" || offset == null) {
       alert("Para funcionar precisamos da mensagem e da chave secreta.")
       throw new TypeError("Some informations are missing:", "cipher.js", 6); /*ver do que se trata este número/*
     } testes*/

    for (let i = 0; i < string.length; i++) {     /*laços */

      let letter = string.charCodeAt(i)

      if (letter >= 65 && letter <= 90) { /*maiscula*/
        newMsg += String.fromCharCode((letter - 65 + offset) % 26 + 65);
      }

      else if (letter >= 97 && letter <= 122) { /*minuscula*/
        newMsg += String.fromCharCode((letter - 97 + offset) % 26 + 97);
      }

      else if (string.charCodeAt(i) == 32) {  /*espaço || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }

      else if (string.charCodeAt(i) == 33) {  /*exclamação || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }

      else if (string.charCodeAt(i) == 44) {  /*virgula || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }

      else if (string.charCodeAt(i) == 64) {  /*arroba || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }

    }
    return newMsg
  },

  decode: function decode(offset, string) {
    let newMsg = ""

    for (let i = 0; i < string.length; i++) {
      let letter = string.charCodeAt(i)

      if (letter >= 65 && letter <= 90) { /*maiscula*/
        newMsg += String.fromCharCode((letter - 90 - offset) % 26 + 90); /*ultimo caracter*/
      }

      else if (letter >= 97 && letter <= 122) { /*minuscula*/
        newMsg += String.fromCharCode((letter - 122 - offset) % 26 + 122); /*ultimo caracter*/
      }

      else if (string.charCodeAt(i) == 32) {  /*espaço || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }

      else if (string.charCodeAt(i) == 33) {  /*exclamação || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }

      else if (string.charCodeAt(i) == 44) {    /*virgula || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }
      
      else if (string.charCodeAt(i) == 64) {  /*arroba || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }

      /*let newLetter = String.fromCharCode(((letter - 90 - offset) % 26) + 90)
      newMsg = newMsg + newLetter*/
    }
    return newMsg

  }

};

export default cipher;
