// 6 - D. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
const fs = require('fs').promises;

const FAMILY_IDS = [1, 2, 3, 4]; // fazer um array com o id dos membros da familia

const createSimpsonsFamily = async() => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

    const simpsons = JSON.parse(fileContent); 
    // fazer um filtro e usar o metodo includes para retornar apenas os que tem o id correspondente
    // lembrando de fazer a conversão do simpson.id para numero pois o valor é string
    const simpsonsFamily = simpsons.filter((simpson) => FAMILY_IDS.includes(+simpson.id));
    // escrever o novo arquivo
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
};

const main = () => {
    createSimpsonsFamily();
}
main();