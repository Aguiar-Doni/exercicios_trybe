-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

-- Aqui é bem nitido já que a soma de todos os salarios é o valor que é necessário para pagar 
-- todos os salarios... então uma função SUM() já resolve

USE hr;
SELECT SUM(salary) FROM employees;