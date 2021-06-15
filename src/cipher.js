const cipher = {

  encode: function encode(offset, string) {

    let newMsg = ""

    if ((typeof offset !== "number") || (typeof string !== "string")) {
      throw new TypeError
    }

    for (let i = 0; i < string.length; i++) {

      let letter = string.charCodeAt(i)

      if (letter >= 65 && letter <= 90) {
        newMsg += String.fromCharCode((letter - 65 + offset) % 26 + 65);
      } else if (letter >= 97 && letter <= 122) {
        newMsg += String.fromCharCode((letter - 97 + offset) % 26 + 97);
      } else if (string.charCodeAt(i) == 32) {
        newMsg += string.charAt(i);
      } else if (string.charCodeAt(i) == 33) {
        newMsg += string.charAt(i);
      } else if (string.charCodeAt(i) == 44) {
        newMsg += string.charAt(i);
      } else if (string.charCodeAt(i) == 64) {
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

      if (letter >= 65 && letter <= 90) { 
        newMsg += String.fromCharCode((letter - 90 - offset) % 26 + 90); 
      } else if (letter >= 97 && letter <= 122) { 
        newMsg += String.fromCharCode((letter - 122 - offset) % 26 + 122); 
      } else if (string.charCodeAt(i) == 32) { 
        newMsg += string.charAt(i);
      } else if (string.charCodeAt(i) == 33) {  
        newMsg += string.charAt(i);
      } else if (string.charCodeAt(i) == 44) {  
        newMsg += string.charAt(i);
      } else if (string.charCodeAt(i) == 64) { 
        newMsg += string.charAt(i);
      }
    }
    return newMsg
  }

};

export default cipher;
