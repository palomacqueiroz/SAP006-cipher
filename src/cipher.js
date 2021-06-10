const cipher = {

  /* Daniel - ((codigoDaLetraASC - codigoDaLetra + deslocamento) % tamDoAlfabeto) + codigoDaLetra 
  string.charCodeAt(num da letra no alfabeto)
  string.fromCharCodeAt

  transformar offset em número (number ou parseInt - inteiro)

    encrypt.charCodeAt(1)

    funções para encriptar e desencriptar mensagem.

        TESTE 
    function encode(offset, string) {
        let mensagem = string.charCodeAt()   // transforma letra em cod ASC (n)
        let novoCodigo = ((mensagem - 65+ offset)%26)+ 65
        let novaLetra = String.fromCharCode(novoCodigo) // transforma cod ASC em letra
    
        console.log(novoCodigo)
      }
    
      encode (10, "C")
  */

  
};

export default cipher;
