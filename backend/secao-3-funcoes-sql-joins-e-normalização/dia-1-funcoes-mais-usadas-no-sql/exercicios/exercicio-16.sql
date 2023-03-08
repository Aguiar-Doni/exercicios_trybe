-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
USE hr;
SELECT UPPER(CONCAT(first_name, ' ', last_name)) FROM employees;

-- PARA MINUSCULAS
SELECT LOWER(CONCAT(first_name, ' ', last_name)) FROM employees;