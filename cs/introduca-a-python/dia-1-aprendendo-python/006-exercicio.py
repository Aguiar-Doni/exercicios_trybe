# xercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.
# vamos criar variaveis contendo os tres tipos de triangulos

equilatero = (2, 2, 2)  # todos lados iguais
isosceles = (5, 2, 5)  # quaisquer dois lados iguais
escaleno = (2, 4, 7)  # todos lados diferentes


# uma função que receba os tres lados do triangulo como parametro
def type_of_triangle(slide1, slide2, slide3):
    # definir oque é um triangulo, a soma de quaisquer dois lados maior que o terceiro lado
    is_triangle = (
        slide1 + slide2 > slide3
        and slide2 + slide3 > slide1
        and slide1 + slide3 > slide2
    )
    if not is_triangle:
        return "não é um triangulo"
    elif slide1 == slide2 == slide3:
        return "é um triangulo equilátero"
    elif slide1 == slide2 or slide2 == slide3 or slide1 == slide3:
        return "é um triangulo isósceles"
    else:
        return "é um triangulo escaleno"


result = type_of_triangle(5, 5, 5)  # equiilatero
print(result)

result = type_of_triangle(7, 7, 10)  # isóceles
print(result)

result = type_of_triangle(3, 4, 5)  # escaleno
print(result)

result = type_of_triangle(1, 1, 3)  # não é
print(result)
