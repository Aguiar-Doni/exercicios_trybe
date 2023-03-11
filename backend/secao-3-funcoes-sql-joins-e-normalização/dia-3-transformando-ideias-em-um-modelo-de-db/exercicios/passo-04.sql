-- Passo 4: Crie a tabela de cuidador relacionando cada cuidador a seu gerente usando uma chave estrangeira (foreign key)
USE zoologico;

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id) -- importante: ao criar FOREIGN KEYS
    -- É necessário que a tabela a qual vai fazer referencia ja tenha sido criada
    -- e deve já existir na criação da tabela também
    -- logo depois de criar a foreign key vc tem que fazer a referência como no codigo acima
);
