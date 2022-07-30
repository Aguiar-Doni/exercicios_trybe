// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// aqui podemos usar o mesmo codigo do exercicio 2 apenas acrescentando a propriedade .length para contar a quantidade de caracteres e fazer essa comparação;

function maiorNome(array) {
  let biggestIndex = [0];
  for (let index in array) {
    if (biggestIndex.length < array[index].length) {
      biggestIndex = array[index];
    }
  }
  return biggestIndex;
}
console.log(maiorNome(["rafael", "daniela", "victoria", "francisco", "leone"]));
