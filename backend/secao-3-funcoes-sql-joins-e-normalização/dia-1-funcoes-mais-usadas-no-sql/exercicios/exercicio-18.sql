-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
USE hr;
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) 'days_worked'
FROM employees; 
-- datediff vai fazer a diferença entre a data current(atuall) e a hire_date(data de contratação)
-- a diferença é corresponde ao tanto de dias trabalhados