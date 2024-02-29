# Criar uma lista com 30 palavras de programação
def generate_list():
    programing_words = [
        "python",
        "java",
        "javascript",
        "html",
        "css",
        "github",
        "git",
        "code",
        "bug",
        "api",
        "loop",
        "array",
        "string",
        "function",
        "variable",
        "algorithm",
        "backend",
        "frontend",
        "database",
        "server",
        "client",
        "framework",
        "library",
        "debug",
        "syntax",
        "compiler",
        "script",
        "binary",
        "source",
        "data",
    ]

    # Escrever a lista em um arquivo
    with open("programing_words.txt", "w") as file:
        for word in programing_words:
            file.write(f"{word}\n")


generate_list()
