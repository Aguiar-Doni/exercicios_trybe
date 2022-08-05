
//crie uma função que previna a ação do botão de submit

function prevent(event) {
    event.preventDefault();
}
window.onload = function() {
    const buttonSubmit = document.querySelector("#myButton");
    buttonSubmit.addEventListener("click",  prevent)
}

//crie um botao que limpe as informações do forms

function clearItens() {
    const allImputs = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < allImputs.length; index += 1) {
        const input = allImputs[index];
        input.value = '';
        input.checked = false;
    }
    textArea.value = ''
}
window.onload = function() {
    const clearForms = document.querySelector('#clear');
    clearForms.addEventListener('click', clearItens)
}