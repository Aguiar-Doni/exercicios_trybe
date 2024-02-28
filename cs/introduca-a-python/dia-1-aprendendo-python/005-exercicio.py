# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).

def quantity_and_price(area):
    # definindo preço da lata de tinta
    can_price = 80
    # calculo para quantidade de litros necessarios para cobrir a area
    required_liters = area / 3
    # usando o resultado de litros necessarios para calcular quantidade de latas necessarias
    required_cans = required_liters // 18
    # Verificando se há litros restantes que não cabem em latas cheias
    # nessa lógica arredonda-se para uma lata a mais caso aja qualquer diferença de resto para mais ja que consideramos o preço por latas de 18litros e não fracionamos quantidades exatas 
    if required_liters % 18:
        required_cans += 1
    # retornando a quantidade de latas e o preço total
    return required_cans, required_cans * can_price


result = quantity_and_price(1000)
print(result)