//обработчик событий на загрузке страницы///
$(document).ready(function(){
    changeBgColorOnHiders();//присвоение рандомного цвета на блоках hiders
    $(".hiders").bind({
        click: function() {$(this).hide(250).css('transform', 'rotate(360deg)');},
        mouseenter: function() {changeBgColorOnHiders(this);},
        mouseleave: function() {changeBgColorOnHider(this);}
    });
    $("input[name='toggleHideAtNumber']").bind("input", function() {unhideByInput(this);});//функция на вводе цифры
    $("input[name='returnBlocks']").bind("click", function() {$(".hiders").show(250).css('transform', 'rotate(-360deg)'); focusIn();});//функция на кнопке "вернуть все блоки"
    $("input[name='rehideBlocks']").bind("click", function() {unhideByInput(9);}); //функция на кнопке "Пере-вернуть все блоки"
    $("input[name='hideBlocks']").bind("click", function() {$(".hiders").hide(250).css('transform', 'rotate(360deg)'); focusIn();});//функция на кнопке "Спрятать все блоки"
    
    //функция с применением интервала для включения/отключения смены цветов по таймеру в цикле для кнопки "Гипноз"
    var id="dzen"; //универсальная переменная для вкл/выкл фунции повтора
    $("input[name='hipnose']").bind("click", function(event) {
        if (id === "dzen"){
            id = setInterval("changeBgColorOnHiders()",600);
            $(event.target).val("Выключить гипноз");
        }
        else {
            clearInterval(id); id="dzen";//отключение повтора
            $(event.target).val("Гипноз");}
        });
});

//////РАЗДЕЛ МАНИПУЛЯЦИИ С ИСЧЕЗАЮЩИМИ БЛОКАМИ/////////
//функция возврата фокуса на ввод числа
function focusIn() {
    $("input[name='toggleHideAtNumber']").focus();
}
//*Функция для рандомной смены цвета блоков*/
//создание массива разных цветов
var colors = new Array("red","green","blue","orange","gray","black","olive","purple","teal","rosybrown", "royalblue", "navy", "peru");
function changeBgColorOnHiders(element) {
    if (!element) {//при отсутвии параметра меняет цвета всем блокам
    for (var i=0; i < $(".hiders").length; i++)
    $(".hiders").get(i).style.backgroundColor=colors[Math.floor((Math.random()*colors.length))];
    }//присвоение цвета из рандомной величины массива цветов
    else { //иначе меняет цвет только того элемента, который указан (наведена мышь)
    $(element).get(0).style.backgroundColor=colors[Math.floor((Math.random()*colors.length))];
    var col = $(element).get(0).style.backgroundColor; //вывод значения фона в строку
    col = col.charAt(0).toUpperCase() + col.slice(1); //Перевод первой буквы строки в верхний регистр
    $($(element).get(0)).attr("title", "Цвет блока: " + col); //присвоение значения для всплывающей подсказки
    }
    focusIn();//возвращает фокус на ввод числа 
}

function changeBgColorOnHider(element) { //правила смены цвета для всех кроме переданного объекта
    for (var i=0; i < $(".hiders").length; i++)
        if ($(".hiders").get(i) !== $(element).get(0)) //меняет цвет цвет блоков, кроме того, на который передан в element
        $(".hiders").get(i).style.backgroundColor=colors[Math.floor((Math.random()*colors.length))];
    $($(element).get(0)).attr("title",""); //удаление значения для всплывающей подсказки, после отвода мыши
    focusIn();//возвращает фокус на ввод числа
}

function unhideByInput(input) {//функция на ввод цифры при вводе которой элемент появляется/исчезает
    changeBgColorOnHiders();
    if (input===9) //это селектор только для кнопки "пере-вернуть"
        for (var i=1; i<=5; i++) //перебор всех пяти блоков
        {
        if ($('#n'+i).css('display') !== 'none') //проверка на скрытый элемент
            $("#n"+i).hide(250).css('transform', 'rotate(360deg)'); //если не скрыт, то спрятать
        else
            $("#n"+i).show(250).css('transform', 'rotate(-360deg)'); //иначе проявить скрытые объекты
        }
    else //проявление-сокрытие только для одного объекта
        {
        if ($('#n'+input.value).css('display') !== 'none')
            $("#n"+input.value).hide(250).css('transform', 'rotate(360deg)');
        else
            $("#n"+input.value).show(250).css('transform', 'rotate(-360deg)');
        }
    setTimeout('$("input").get(0).value=null',180); //get(0) потому что ввод цифры - это первый input
    //обнуление цифры после ввода и небольшая задержка 180, чтобы пользователь заметил, что он вводит
}


