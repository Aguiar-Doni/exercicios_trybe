// 6 . Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function soma(numb) {
  let result = 0;
  for (let index = 0; index <= numb; index += 1) {
    result = result + index;
  }
  return result;
}
console.log(soma(10));
