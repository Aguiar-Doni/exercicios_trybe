-- Passo 3: Criar tabela de gerentes;
USE zoologico;

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL
);