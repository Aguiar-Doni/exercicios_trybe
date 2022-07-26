/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const checkNumber = (myNumber, number) => myNumber === number;

const loteryNumbers = (myNumber, callBack) => {
    const numbs = Math.floor((Math.random() * 5));
    return callBack(myNumber, numbs) ? 'Parabéns você ganhou!' : 'Tente novamente'

}
console.log(loteryNumbers(2, checkNumber));
