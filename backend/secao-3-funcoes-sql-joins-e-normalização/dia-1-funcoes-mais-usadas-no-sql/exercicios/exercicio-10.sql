-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.
USE hr;
-- SELECIONAR departament_id --> se agrupar pelo departamento id vamos ter o resultado de quantos por departamento
-- MEDIA(salary) --> dar nome, CONTAR(tudo) --> dar nome
SELECT department_id, AVG(salary) 'average_id', COUNT(*) 'number_of_employees'
FROM employees
GROUP BY department_id
HAVING number_of_employees > 10;