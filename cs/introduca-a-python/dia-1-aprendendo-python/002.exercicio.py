# calcule a média aritimética de uma lista de números

list_of_numbers = [1, 3, 5, 7, 9]

def arithmetic_mean(numbers):
    total = 0
    for index in numbers:
        total += index # ascrecenta a variavel total o primeiro valor e nas iteações seguintes soma o valor do indice para atingir a soma total dos elementos
    return total / len(numbers) # metodo len() para obter o total de elementos para calcular a media = soma total dos valores / total de elementos

result = arithmetic_mean(list_of_numbers)
print(f'A média aritimética dos valores é: {result}')