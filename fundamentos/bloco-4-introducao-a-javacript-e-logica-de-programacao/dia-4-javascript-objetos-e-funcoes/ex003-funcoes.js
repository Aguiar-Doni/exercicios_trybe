// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(array) {
  let smallerIndex = array[0]; //minha variavel vai começar do primeiro indice do meu array, assim ja temos um numero pra fazer comparação
  for (let index in array) {
    // loop que vai comparar todas a posições do meu array com meu indice atual
    if (smallerIndex > array[index]) {
      //se meu smallerIndex for maior que o meu indice atual, isso significa que meu index atual é menor que ele então ele incordpora esse index e volta a fazer essa compração ate achar o menor
      smallerIndex = array[index];
    }
  }
  return smallerIndex;
}
console.log(menorValor([2, 4, 5, 1, 0, 4]));
