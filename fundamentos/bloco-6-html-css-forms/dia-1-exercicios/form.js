function disabledButton(event) { //retira a ação do botao de submeter
    event.preventDefault();
}
function clearItens() {
    const allInputs = document.querySelectorAll('input'); //cria a função de limpar no botão limpar dados
    const textArea = document.querySelector('textarea');
    for (let index =0; index < allInputs.length; index += 1) {
        const clear = allInputs[index];
        clear.value = '';
        clear.checked = false;
    }
    textArea.value = ''
};
function habilitaSubmit () {
    const submitButton = document.querySelector('#submitButton'); //abilita o botão apenas quando a checkBox estiver verificada
    const checkBox = document.querySelector('#input-imagem');
    submitButton.disabled = !checkBox.checked; //operador ! diz que negação, o contrario de algum retorno, assim nossa checkbox estando checada, nosso botão submit inves de desabilitado vai estar habilitado
}



window.onload = function(){ //tras pra mim a função de eventos pelo navegador, com checkbox o evento se chama checked.
    const checkBox = document.querySelector('#input-imagem');
    checkBox.addEventListener('change', habilitaSubmit);
    
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', clearItens);
    
    const submitButton = document.querySelector('#submitButton')
    submitButton.addEventListener('click', disabledButton); 
    
};