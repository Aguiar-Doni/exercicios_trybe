/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.
A sua função deve receber como parâmetro o nome completo da pessoa funcionária
e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

const emailGerator = fullName => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email: `${email}@trybe.com`};
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Rafael Aguiar'), 
      id2: callback('Miranha da Silva'),
      id3: callback('Relampago Marquinhos'),
    }
    return employees;
  };
 console.log(newEmployees(emailGerator));