// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(array) {
  // função que vai receber o parametro um array
  let biggestIndex = [0]; //variavel pra armazenar o valor do maior numero, ja que temos um array posso começar a comparação da posição [0] que é o primeiro item do meu array
  for (let index in array) {
    //lop for pra percorrer todo meu array
    if (biggestIndex < array[index]) {
      // se o numero do meu indice for maior que o meu incial 0 ele incorpora o valor do indice e volta a fazer loop e comparação ate encontrar o maior
      biggestIndex = array[index];
    }
  }
  return biggestIndex; // minha função retorna o maior numero
}
console.log(maiorValor([2, 4, 5, 6, 14, 19]));
