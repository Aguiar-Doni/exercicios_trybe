-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
USE hr;
-- Sempre que quiser exibir usar dentro do SELECT
-- Nesse caso usando um operação entre max e min para obter a diferença

SELECT MAX(salary) - MIN(salary) FROM employees;