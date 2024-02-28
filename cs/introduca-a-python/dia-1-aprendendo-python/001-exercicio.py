# faça uma função que receba dois numeros e retorne o maior entre eles

number = 1 
other_number = 10

def bigger(number, other_number):
    if other_number > number:
        return other_number
    return number

resultado = bigger(number, other_number)

print(resultado)