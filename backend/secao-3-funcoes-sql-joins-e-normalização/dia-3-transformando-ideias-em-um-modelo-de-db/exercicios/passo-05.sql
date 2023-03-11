-- Passo 5: Crie a tabela de relação entre os animais e seus cuidadores
USE zoologico;

CREATE TABLE animal_cuidador(
	animal_id INT,
    cuidador_id INT,
-- nesse caso de uma tabela de relacionamento N:N(muitos para muitos)
-- onde vai apenas ser referenciadas informações de outras tabelas
-- criamos CONSTRAINT para formar uma primary key
-- que seria a soma das duas FOREIGN KEY sendo referenciadas aqui
-- ou seja, não criamos uma PRIMARY KEY DE ZERO, criamos uma a partir da entidade de relacionamento
CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
-- lembrando que ainda precisamos dizer que essas colunas seram FOREIGN KEYS e vao ser REFERENCIADAS AQUI
FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id) -- Vejo como uma boa prática usar o mesmo nome na PRIMARY e FOREIGN KEY fica mais facil identificar os relacionamentos só consultando as tabelas
);