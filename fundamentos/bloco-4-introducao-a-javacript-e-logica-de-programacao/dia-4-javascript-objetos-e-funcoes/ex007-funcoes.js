// 7. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
//Considere que a string ending sempre será menor que a string word.

function verificaString(word, eding) {
  word = word.split("");
  eding = eding.split("");
  let valorBoolean = true;

  for (let index = 0; index < eding.length; index += 1) {
    if (word[word.length - eding.length + index] != eding[index]) {
      valorBoolean = false;
    }
  }
  return valorBoolean;
}
console.log(verificaString("trybe", "bi"));
