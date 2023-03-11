-- Passo 2: Crie tabela de animais
USE zoologico;
-- sintaxe CRATE TABLE nameTable(collum1, collum2...)
-- sempre olhar as documentações para entender as regras de restrições ao criar tabelas;

CREATE TABLE animal(
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL, -- se atentar ao tamanho maximo que vai escolher pois ocupa espaço de memoria
    especie VARCHAR(20) NOT NULL,
    sexo VARCHAR(20) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(30) NOT NULL
);
