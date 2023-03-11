// 6 - A. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
const fs = require('fs').promises;

const readAll = async () => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    // converter o arquivo JSON para um array usando JSON.parse
    const simpsons = JSON.parse(fileContent);
    // mapiar cada objeto do array para uma string no formato correto
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
    // Exiba as strings na tela 
    strings.forEach((string) => console.log(string));
}
// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
const main = async () => await readAll();
main();

