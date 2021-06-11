const cipher = {

  encode: function encode (offset, string) {
    let newMsg = ""
    let maiuscula = string.toUpperCase()

    for (let i = 0; i < string.length; i++) {
    maiuscula = string.charCodeAt(i)  
    let novaLetra = String.fromCharCode(((maiuscula -65+ offset)%26)+ 65)
    newMsg = newMsg + novaLetra/*.toUpperCase() */  

    
    }

  
  return newMsg  
      
},

decode: function decode (offset, string) {
  let newMsg = ""

  for (let i = 0; i < string.length; i++) {
  let letra = string.charCodeAt(i)  
  let novaLetra = String.fromCharCode(((letra + 65 - offset)%26)+ 65)
  newMsg = newMsg + novaLetra  
  } 
  return newMsg
  
}

}

export default cipher;
