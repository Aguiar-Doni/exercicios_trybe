import json
import re

# Leitura do arquico JSON
with open("books.json", "r") as file:
    data = json.load(file)

# Categorias desejadas no exercicio
categories = ["Python", "Java", "PHP"]

# Dicionário para armazenar a contagem das ocorrências de cada categoria
category_count = {key: 0 for key in categories}

# Iterar sobre o data obtido na leitura do arquivo JSON
for item in data:
    # Usar a chave categoria do objeto
    item_categories = item.get("categories", [])

    # contar a ocorrência de cada categoria
    for category in categories:
        if category in item_categories:
            category_count[category] += 1

# Calcular o totel de objetos no JSON
total_objects = len(data)

# Calcular a porcentgem de ocorrências de cada categoria
percentage_of_categories = {
    key: (count / total_objects) * 100 for key, count in category_count.items()
}

# imprimir resultado
for key, value in percentage_of_categories.items():
    print(f"{key}: {value}")
