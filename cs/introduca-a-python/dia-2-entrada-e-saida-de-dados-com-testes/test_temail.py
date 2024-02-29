import pytest
from email_validator import validate_email

def test_valid_email():
    assert validate_email("usuario@website.com") is True

def test_invalid_email_missing_at():
    with pytest.raises(ValueError):
        validate_email("usuario_website.com")

def test_invalid_email_invalid_username():
    with pytest.raises(ValueError):
        validate_email("1usuario@website.com")

def test_invalid_email_invalid_website():
    with pytest.raises(ValueError):
        validate_email("usuario@website-.com")

def test_invalid_email_long_extension():
    with pytest.raises(ValueError):
        validate_email("usuario@website.commmm")

def test_invalid_email_empty():
    with pytest.raises(ValueError):
        validate_email("")
