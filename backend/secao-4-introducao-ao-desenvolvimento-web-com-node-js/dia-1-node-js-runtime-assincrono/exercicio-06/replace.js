// 6 - F. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const fs = require('fs').promises;

const replaceNelson = async () => {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    
    const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== 8);
    const simpsonsWithMaggie = simpsonsWithoutNelson.concat([{
        id: '15',
        name: 'Marggie Simpson'
    }]);
    
    console.log(simpsons);
    return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
};

const main = () => {
    replaceNelson();
}
main();