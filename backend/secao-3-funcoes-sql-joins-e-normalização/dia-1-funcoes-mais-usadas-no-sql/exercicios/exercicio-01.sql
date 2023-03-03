-- 1. Escreva uma query que exiba o maior salário da tabela.
USE hr;
-- conferindo tudo que tem na table
SELECT * FROM employees;

-- Usar função max() para obter o maior salario da coluna salary
SELECT MAX(salary) FROM employees;