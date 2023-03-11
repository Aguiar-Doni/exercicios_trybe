// 6 - D.Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const fs = require('fs').promises;

const addNelson = async() =>  {
    const fileContent = await fs
        .readFile('./simpsonsFamily.json', 'utf-8');
    
      const simpsonsFamily = JSON.parse(fileContent);
      simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

      await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
      console.log(simpsonsFamily);    
};

const main = () => {
    addNelson();
}
main();
