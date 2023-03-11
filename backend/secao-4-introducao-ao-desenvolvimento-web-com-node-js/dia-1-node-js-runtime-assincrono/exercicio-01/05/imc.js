// 1 -🚀 Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.
// criando um valor default para usar como base de calculo de IMC;
const readline = require('readline-sync')


/* const defaultWeigth = 72; // foram utilizados esses valores no inicio para testar a função
const defaultHeigth = 181; */

// Implementando função

const handleImc = (wigth, heigth) => {
    // UM LOG PARA MOSTRA ALTURA E PESO INSERIDOS NO CODIGO
    console.log(`Altura: ${heigth}, Peso: ${wigth}`);

    // CONVERSÃO PARA ALTURA EM METROS
    const heigthInMeters = heigth / 100;
    // ELEVAR AO QUADRADO PARA FAZER A BASE DE CALCULO DO IMC / que é peso / pela altura ** 2
    const heigthSquared = heigthInMeters ** 2;

    const BMI = wigth / heigthSquared;

    return BMI;
};

// SEPARANDO FUNÇÕES PARA DIMINUIR A COMPLEXIDADE, UMA FUNÇÃO CALCULA
// A OUTRA CHAMA ESSA FUNÇÃO QUE CALCULA PASSANDO PARAMETROS E TRATANDO OS DADOS A SEREM EXIBIDOS


const IMC_MAX_AND_MIN = {
    'Underweight': {
      minIMC: 0,
      maxIMC: 18.4,
    },
    'Normal Weight': {
      minIMC: 18.5,
      maxIMC: 24.9,
    },
    'Overweight': {
      minIMC: 25,
      maxIMC: 29.9,
    },
    'Obese Class I': {
      minIMC: 30.0,
      maxIMC: 34.9,
    },
    'Obese Class II': {
      minIMC: 35,
      maxIMC: 39.9,
    },
    'Obese Class III': {
      minIMC: 40,
      maxIMC: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
    },
  };


// 5- 🚀 Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra.

const handleImcResult = (imc) => {
  const status = Object.keys(IMC_MAX_AND_MIN);
  
  const result = status.find((status) => {
    const { maxIMC, minIMC } = IMC_MAX_AND_MIN[status] // acessamos as informações do intervalo da situação iterada
    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return imc >= minIMC && imc <= maxIMC;
  });
  return result;
};

const mainImc = () => {
// 3- 🚀 Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar.
// NECESSARIO INSTALAR O PACOTE readline-sync => npm i --save-exact readline-sync@1.4.10
    // usando o o questionInt do pacote readLine eliminamos os valores default para calculo
    // e passamos uma pergunta que vai ser feita abrindo um input para fazer o calculo com o valor inserido
    
// 4- 🚀 Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
//Obs. Da forma como está, ao inserirmos um valor como 60.99 para o peso, ele é transformado no número inteiro 60, comprometendo o resultado.
    // a função questionInt retorna numeros inteiros e o peso não pode ser inteiro, precisa poder ser valor com ponto flutuante
    // então trocaremos por questionFloat
    const weight = readline.questionFloat('What\'s your weight? (kg) ');
    const height = readline.questionInt('What\'s your height? (cm) ');

    const imc = handleImc(weight, height);
    const imcResult = handleImcResult(imc);

    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(imcResult);
};
mainImc();

// 2- 🚀 Agora, permita que o código seja executado através do comando npm run bmi.
// essa alteração sera no arquivo package.json NOS SCRIPTS
// "bmi": "node bmi.js" isso adicionado ao scripts quer dizer que vamos rodar o arquivo bmi.js com o node
// basta digitar o comando npm run bmi que o node ira rodar o script


