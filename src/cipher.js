const cipher = {

  encode: function encode(offset, string) {

    let newMsg = "" /* recebe msg que será digitada */

    if ((typeof offset !== "number") || (typeof string !== "string")) { /* representa um erro de quando um valor não é do tipo esperado*/
      throw new TypeError
    }
    
    for (let i = 0; i < string.length; i++) {  /*laços */

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

    if ((typeof offset !== "number") || (typeof string !== "string")) {
      throw new TypeError
    }

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

      else if (string.charCodeAt(i) == 44) {  /*virgula || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }
      
      else if (string.charCodeAt(i) == 64) {  /*arroba || retornar ele mesmo*/
        newMsg += string.charAt(i);
      }
      
    }
    return newMsg

  }

};

export default cipher;
