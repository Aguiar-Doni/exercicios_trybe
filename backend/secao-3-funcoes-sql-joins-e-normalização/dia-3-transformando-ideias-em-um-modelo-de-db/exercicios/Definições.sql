-- Exercício 1: 🚀 Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
-- Nome, Espécie, Sexo,Idade, Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
-- Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

-- Passo 1: Identificar as Entidades (tabelas)
-- ANIMAL;
-- CUIDADOR;
-- GERENTE;
-- CUIDADOR E ANIMAL;

-- Passo 2: Identificar os Atributos (colunas)
-- ANIMAL > animal_id, nome, especie, sexo, idade e localização;
-- CUIDADOR > cuidador_id, nome, gerente_id;
-- GERENTE > gerente_id, nome;
-- CUIDADOR E ANIMAL > cuidador_id, animal_id;

-- Passo 3: Identificar os Relacionamentos;
-- Um ANIMAL pode ter um ou mais cuidadores;(no zoo tem varios animais que tem varios cuidadosres N:N)
-- Um CUIDADOR pode cuidar de um ou mais animais;(no zoo tem varios cuidadores e varios animais N:N)
-- Um gerente pode gerenciar uma ou mais pessoa cuidadora;(Um gerente pode gerenciar varias pessoas, 1:N)
-- Um CUIDADOR possui um gerente; (um gerente pode pode gerenciar varias pessoas, mas uma pessoa só pode ter um gerente
