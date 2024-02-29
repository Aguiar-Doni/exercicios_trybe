def validate_email(email):
    if not email:
        raise ValueError("E-mail não pode ser vazio")

    parts = email.split("@")
    if len(parts) != 2:
        raise ValueError("E-mail deve conter apenas um '@'")

    username, domain_extension = parts
    if not username[0].isalpha():
        raise ValueError("O nome de usuário deve começar com uma letra")

    if not username.replace("-", "").replace("_", "").isalnum():
        raise ValueError(
            "O nome de usuário deve conter apenas letras, dígitos, traços e underscores"
        )

    if not domain_extension.replace(".", "").isalnum():
        raise ValueError("O domínio do website deve conter apenas letras e dígitos")

    if len(domain_extension.split(".")) != 2 or len(domain_extension.split(".")[1]) > 3:
        raise ValueError("Extensão do domínio inválida")

    return True
