# Implemente a classe TV() com os seguintes métodos
class Tv():
    # Volume - valor incial 50, esó pode estar entre 0 e 99
    # Canal - valor inicial 1, só pode estar entre 0 e 99
    # Tamanho - será recebido por parametro
    # Ligada será inicalizada com False, começa desligada
    # Todos atributos devem ser PRIVADOS

    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    # Métodos : 
    # aumentar_volume - aumentar de 1 em 1 - min 0 --> max 99
    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    # diminuir_volume - diminuir de 1 em 1 - min 0 --> max 99
    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    # modificar_canal - altera o canal de acordo com o parâmetro
    # também deve lançãr uma execeção ValueError caso esteja fora dos limites
    def modificar_canal(self, canal):
        if canal < 1 or canal > 99:
            raise ValueError('Canal indisponivel')
        
        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada