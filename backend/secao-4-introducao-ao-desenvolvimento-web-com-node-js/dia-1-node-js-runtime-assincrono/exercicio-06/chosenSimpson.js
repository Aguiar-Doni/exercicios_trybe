// 6 - B. Crie a função, realizar a leitura do arquivo e a conversão do JSON em objeto.
// Busque pelo Simpson desejado e caso não encontre, dispare um erro.

const fs = require('fs').promises;

const getSimpsonById = async (id) => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

    const simpsons = JSON.parse(fileContent);
    const chosenSimpson = simpsons.find((simpson) => +simpson.id === id);

    if (!chosenSimpson) {
        throw new Error('id não encontrado');
    }
    return chosenSimpson;
}

const main = async () => {
    const simpson = await getSimpsonById(1);
    console.log(simpson);
}
main();