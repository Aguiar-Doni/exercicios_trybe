// 6 - C. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require('fs').promises;

const filterSimpson = async () => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);

    const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
    
    console.log(`Este é seu novo documento: `, newArray);
};

const main = () => {
    filterSimpson();
};
main();