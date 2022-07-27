//2.Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
// Por exemplo, a palavra "banana" seria invertida para "ananab".
//Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

//1-criar uma varial contendo um valor string;
//2-criar uma segunda varial com um valor em string vazia, pra receber a palavra invertida;
//3-criar um laço usando o comando for que percorra toda minha string declarada;
//4-dentro do meu laço for que vai incrementar minha nova variavel com o indice invertido;

let word = "caralho"; //1.
let wordNew = ""; //2.
for (index = 0; index < word.length; index += 1) {
  //3.
  wordNew += word[word.length - 1 - index]; // no incremento eu preciso usar word.lenght -1 pra pegar o ultimo item do tamanho da minha string - o meu indice
}

console.log(wordNew);
