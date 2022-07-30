// 1.  Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalim(word) {
  for (let index in word) {
    if (word[index] != word[word.length - 1 - index]) {
      return false;
    }
  }
  return true;
}
console.log(verificaPalim("wirisiriw"));
