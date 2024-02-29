# importar o metodo random sugerido no exercicio -> nativo do python
import random


# função para embaralhar palavra sugerida no exercicio
def word_scramble(word):
    return "".join(random.sample(word, len(word)))


# criar uma função que desempenhará as funções do jogo
# deverá exitir uma lista de palavras


def scrambled_word_game():
    list_of_words = [
        "python",
        "javascript",
        "back-end",
        "front-end",
        "ciencias-da-computacao",
    ]
    # uma palavra vai ser escolhida aleatoriamente
    selected_word = random.choice(list_of_words)
    # deverá essa palavra ser embaralhada
    scrambled_word = word_scramble(selected_word)

    # A pessoa usuaria terá 3 tentativas

    attempts = 3

    # boas vindas
    print("Bem-vindo ao Jogo da Palavra Embaralhada!\n")
    print("Tente adivinhar a palavra embaralhada. Você tem 3 tentativas.\n")
    print("Palavra embaralhada:", scrambled_word)

    # Deve ter uma entrada para pessoa fazer a tentativa
    # O jogo deve encerrar assim que ela acertar ou continuar ate acabar as 3 tentativas

    for index in range(attempts):
        user_attempts = input("Escreva aqui sua tentativa: ").lower()

        # condição de parada
        if user_attempts == selected_word:
            print(
                "\nParabéns! você acaba de ganhar um milhããão de reaaaaais,\nmentira, mas vc acertou parabéns memo"
            )
            return
        print("Resposta incorreta, vai estudar mais cara\n")

    print(f"\nVocê perdeu! A palavra correta era: {selected_word}")

scrambled_word_game()
