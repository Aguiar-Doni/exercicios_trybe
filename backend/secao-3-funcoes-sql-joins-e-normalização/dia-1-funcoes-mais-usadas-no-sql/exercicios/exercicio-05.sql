-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
USE hr;
-- Aqui precisamos SELECIONA o  MAXIMO(), o MINIMO(), a SOMA(),
--  usar um METODO(para obter a MEDIA(),  e DEFINIR DUAS CASAS DECIMAIS)

SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2)
FROM employees;

-- No metodo ROUND(param1, param2) usamos dois parametros onde o primeiro define quantos caracteres o numero pode possuir
-- e segundo parametro quantas casas decimais ele pode ter(as casas decimais contam no valor estabelecido no primeiro param)
