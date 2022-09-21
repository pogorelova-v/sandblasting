
//Форма обр связи

document.addEventListener('DOMContentLoaded', function(){ //ждём пока страница полностью прогрузится
    const form = document.getElementById('form'); //объявляем переменную, присваиваем в неё всю форму по id
    form.addEventListener('submit', formSend); //слушаем событие submit в форме, по клику мы перейдём в функцию formSend
 
    async function formSend(e) { // функция formSend
        e.preventDefault();  //запрет на стандартную отправку формы, что бы сделать это без перезагрузки
 
        let error = formValidate(form); //переменная еррор имеет значение полученное в функции formValidate
        
        let formData = new FormData(form); //получам данные формы
 
        if (error===0){                 //если ошибок нет, то
 
         form.classList.add('_sending');  //форма принимает класс сендинг, пока грузится, с гифкой можно
 
         let response = await fetch('send.php', {  // ждём пока данные из формы отправЯтся в файл php
            method: 'POST',  //Отправка методом пост
            body: formData   //Данных из формы
         });
 
         if (response.ok){   //если форма удачно отправлена
             let result = await response.json(); //присваиваеи
             alert(result.message);   // выводим сообщение из кода php
             form.reset();  //очищаем форму
             form.classList.remove('_sending');  //убираем класс загрузки
 
         } else {
             alert("Повторите отправку");  //если какая-то ошибка при отпраке
             form.classList.remove('_sending');  //убираем класс загрузки
         }
 
        } else {                  //если ошиби есть, то
            alert('Заполните поля'); 
        }
 
    }
 
    function formValidate(form) { //проверяем заполненость обязательных полей
        let error = 0; //Изначально ошибок нет
        let formReq = document.querySelectorAll('._req'); //ищем все поля с классом _рег, запихиваем в массив
 
        for (let i = 0; i < formReq.length; i++){ //цикл, перебирает элементы пока длинна массива (который выше)
            const input = formReq[i]; //переменная инпут со значаением элемента из массива по номеру i
            formRemoveError(input); //изначально убираем класс ошибки
 
            if (input.getAttribute("type") === "checkbox" && input.checked === false){ //если поле это чекбокс и он пуст, то
                formAddError(input); //добавляем жлементу класс "ошибка" (функция в конце)
                error++; //добавляем 1 к переменной ошибка
            } else {
                if ( input.value === '') { //простая проверка,если значение поля  равно пустоте, то
                 formAddError(input); //добавляем жлементу класс "ошибка" (функция в конце)
                 error++;  //добавляем 1 к переменной ошибка
                }
            }
 
        }
        return error; //возвращаем кол-во ошибок
    }
 
    function formAddError(input) {     //фунция добавления класса "ошибка"  элементу 
        input.classList.add('_error'); 
    }
    function formRemoveError(input) {       //фунция убираем класс "ошибка" элементу 
        input.classList.remove('_error');
   }

 });

 //----------------modal


const overlayModals = document.querySelector('.dd-overlay-modals')

const services1 = document.querySelector('.dd-services1');
const services1modal = document.querySelector('.dd-services1-modal')
const services2 = document.querySelector('.dd-services2');
const services2modal = document.querySelector('.dd-services2-modal')
const services3 = document.querySelector('.dd-services3');
const services3modal = document.querySelector('.dd-services3-modal')
const services4 = document.querySelector('.dd-services4');
const services4modal = document.querySelector('.dd-services4-modal')
const services5 = document.querySelector('.dd-services5');
const services5modal = document.querySelector('.dd-services5-modal')


overlayModals.addEventListener('click', function(){
    services1modal.classList.add('dd-services-item-modal-close');
    services1modal.classList.remove('dd-services-item-modal-open');
    services2modal.classList.add('dd-services-item-modal-close');
    services2modal.classList.remove('dd-services-item-modal-open');
    services3modal.classList.add('dd-services-item-modal-close');
    services3modal.classList.remove('dd-services-item-modal-open');    
    services4modal.classList.add('dd-services-item-modal-close');
    services4modal.classList.remove('dd-services-item-modal-open');    
    services5modal.classList.add('dd-services-item-modal-close');
    services5modal.classList.remove('dd-services-item-modal-open');
    overlayModals.classList.add('dd-overlay-modals-close');
    overlayModals.classList.remove('dd-overlay-modals-open');
 })

 const openCloseModal = (elem) => {
    elem.classList.remove('dd-services-item-modal-close');
    elem.classList.add('dd-services-item-modal-open');
    overlayModals.classList.remove('dd-overlay-modals-close');
    overlayModals.classList.add('dd-overlay-modals-open');
 }
 services1.addEventListener('click', function(){
    openCloseModal(services1modal)
});
services2.addEventListener('click', function(){
    openCloseModal(services2modal)
});
services3.addEventListener('click', function(){
    openCloseModal(services3modal)
});
services4.addEventListener('click', function(){
    openCloseModal(services4modal)
});
services5.addEventListener('click', function(){
    openCloseModal(services5modal)
});


