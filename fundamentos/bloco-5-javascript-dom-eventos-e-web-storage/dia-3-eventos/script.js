function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo. // adicionando dias 

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
    let getList = document.querySelector('#days');

for (let i = 0; i < decemberDaysList.length; i += 1) {

    let day = decemberDaysList[i];
    let elementDay = document.createElement('li')
    elementDay.innerHTML = day;

    if(day === 24 || day === 31) {
    elementDay.className = 'day holiday';
    getList.appendChild(elementDay);
    
    } else if (day === 4 || day === 11 || day === 18) {
    elementDay.className = 'day friday'
    getList.appendChild(elementDay);

    } else if (day === 25) {
    elementDay.className = 'day holiday friday' 
    getList.appendChild(elementDay);

    } else {
    elementDay.className = 'day';
    getList.appendChild(elementDay);

}}}

createDays();

//adicionando btn feriados

function createBtnHoliday(Feriados) {
    let containerBtn = document.querySelector('.buttons-container');
    let btn = document.createElement('button');
    let id = 'btn-holiday';

    btn.innerHTML = Feriados;
    btn.id = id;

    containerBtn.appendChild(btn);
}
createBtnHoliday('Feriados')

//mudar a cor de fundos dos dias com holydays 

function btnFeriados() {
    let getBtn = document.querySelector('#btn-holiday'); // acessar o botao 'feriados'
    let getHolidays = document.querySelectorAll('.holiday'); // acessar todos feriados como um array
    let background = 'rgb(238,238,238)'; // cor inicial
    let backgroundNew = 'silver' // nova cor
    
    getBtn.addEventListener('click', function() {
        for(let i = 0; i < getHolidays.length; i += 1) {
            if (getHolidays[i].style.backgroundColor === backgroundNew) { // se meu indice tiver a cor nova 
                getHolidays[i].style.backgroundColor = background;
            } else { // se se for qualquer outra cor diferente da backgroundNew
                getHolidays[i].style.backgroundColor = backgroundNew;
            }

        }
    });
}

btnFeriados();