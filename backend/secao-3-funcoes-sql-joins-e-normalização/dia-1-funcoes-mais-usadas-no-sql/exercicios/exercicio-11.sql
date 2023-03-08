-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
-- Aqui a função é alterar e nao exibir, escrevendo oque eu preciso pra entender melhor
USE hr;
-- ATUALIZA a tabela employees
-- DEFINA para a coluna phone_number = UMA SUBSTITUIÇÃO(na coluna phone_number que for, 555, troca por '777')
-- Acima apenas definimos qual é a alteração a ser feita, em seguida precisamos encontrar 
-- ONDE essa alteração vai ser feita
-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
-- O erro acima mostra que nao da pra fazer por causa do modo de segurança esta ativa
-- PRA ISSO BASTA SETAR A VARIAVEL DE AMBIENTE QUE GUARDA ESSA PERMISSÃO

SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET phone_number = REPLACE(phone_number, '555', '777')
WHERE phone_number LIKE '515%'; -- like começe com 515 e depois tenha qualquer coisa

-- DEPOIS SERTAR DE VOLTA PRA NAO ESQUECER E DAR PROBLEMA 0 é desativado 1 é ativo

SET SQL_SAFE_UPDATES = 1;