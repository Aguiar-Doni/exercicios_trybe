// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function inteiroRepeteMais(array) {
  let contandoRepetido = 0;
  let contandoNumero = 0;
  let indexDoRepeteMais = 0;

  for (let index in array) {
    let verificandoNumbs = array[index]; // armazena o valor do nosso index atual pra comparar no proximo for;
    for (let index2 in array) {
      // vai interar com todos valores do nosso array novamente, e assim vamos conseguir fazer a comparação;
      if (verificandoNumbs === array[index2]) {
        contandoNumero += 1; // cada vez que nosso index atual se repetir ele vai incrementar +=1
      }
    }
    if (contandoNumero > contandoRepetido) {
      // vamos através da comparação adicionar o valor que mais se repete em contandoRepetido
      contandoRepetido = contandoNumero;
      indexDoRepeteMais = index; //guardar o index do numero que mais se repete pra poder imprimir ele especificamente
    }
    contandoNumero = 0; //contando numero tem que ser reiniciado pra o loop continuar checando os proximos valores
  }
  return array[indexDoRepeteMais]; // aqui chamamos o indice do valor que mais se repete
}

// tive que estudar o gabarito pra entender
