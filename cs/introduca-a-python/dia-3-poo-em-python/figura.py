from abc import ABC, abstractmethod
from math import pi as PI

# Definindo uma classe abstrata para Figuras Geométricas
class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        # Método abstrato para calcular a área (deve ser implementado por subclasses)
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        # Método abstrato para calcular o perímetro (deve ser implementado por subclasses)
        raise NotImplementedError


# Implementação da classe Quadrado, que herda de FiguraGeometrica
class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        # Inicializa o objeto Quadrado com o lado fornecido
        self.lado = lado

    def area(self):
        # Calcula a área do quadrado (lado * lado)
        return self.lado * self.lado

    def perimetro(self):
        # Calcula o perímetro do quadrado (4 * lado)
        return 4 * self.lado


# Implementação da classe Retangulo, que herda de FiguraGeometrica
class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        # Inicializa o objeto Retangulo com a base e altura fornecidas
        self.base = base
        self.altura = altura

    def area(self):
        # Calcula a área do retângulo (base * altura)
        return self.base * self.altura

    def perimetro(self):
        # Calcula o perímetro do retângulo (2 * (base + altura))
        return 2 * (self.base + self.altura)


# Implementação da classe Circulo, que herda de FiguraGeometrica
class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        # Inicializa o objeto Circulo com o raio fornecido
        self.raio = raio

    def area(self):
        # Calcula a área do círculo (PI * raio * raio)
        return PI * self.raio * self.raio

    def perimetro(self):
        # Calcula o perímetro do círculo (2 * PI * raio)
        return 2 * PI * self.raio
