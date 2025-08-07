function cifraDeCesar(palavra, deslocamento) {
    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let resultado = '';
    
    // Passo por cada letra da palavra
    for (let i = 0; i < palavra.length; i++) {
      let letra = palavra[i];
      let indiceLetra = -1;
      
      // Procurar o índice da letra no alfabeto
      for (let j = 0; j < alfabeto.length; j++) {
        if (alfabeto[j] === letra) {
          indiceLetra = j;
          break;
        }
      }
      
      // Calcular o novo índice com deslocamento
      let novoIndice = indiceLetra + deslocamento;
      if (novoIndice >= alfabeto.length) {
        novoIndice = novoIndice - alfabeto.length; // volta para o começo
      }
      
      // Adicionar letra cifrada no resultado
      resultado = resultado + alfabeto[novoIndice];
    }
    
    return resultado;
  }
  
  // Exemplo de uso
  console.log(cifraDeCesar('hello world', 3));  // saída: 'def'
  

  function duplicatas(lista){
    let duplicatas = []

    for (let i = 0; i < lista.length; i++)
        if(!lista.includes(duplicatas[i])){
            duplicatas += duplicatas[i] 
        }

  }