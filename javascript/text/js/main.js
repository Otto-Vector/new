$(document).ready(function(){
    colorOnRadioText(); //присвоение цвета тексту на радио-кнопках по значению value в них
    $(":radio").prop('checked',false); //сброс выбора радио-кнопок
    $(":radio[name='color']").bind("change", function() {colorChange(this);});//окрашивание 
    $("input[type='text']").bind("change", function() {textBoldOfClass(this);});
    $("input[type='reset']").bind("click", function() {resetClass();});
});
///////////БЛОК РАДИОКНОПОК ДЛЯ СМЕНЫ ЦВЕТА АБЗАЦЕВ И ТЕНЕЙ НА КНОПКАХ//////////

function reserShadows() {//функция сброса теней у невыбранных радиокнопок
    for (var i=0; i < $("#colorSelector input:radio").length; i++)
    $("#colorSelector input:radio").get(i).style.boxShadow='';
}

function colorChange(color) {
    reserShadows();//сброс теней
    for (var i=0; i < $(".paragraph").length; i++)//перебор по количеству объектов .forColor
    $(".paragraph").get(i).style.color=color.value; //меняет цвет текста элементов класса .forColor
    setTimeout(function(){color.style.boxShadow='0px 0px 7px 1px '+color.value;},1);
    setTimeout(function(){color.style.boxShadow='0px 0px 1.5px 1px '+color.value;},250);
    setTimeout(function(){color.style.boxShadow='0px 0px 7px 1px '+color.value;},500);
    setTimeout(function(){color.style.boxShadow='0px 0px 1.5px 1px '+color.value;},750);
    //применяет анимированную цветную тень выбранного radio / время анимации прописано в css 
}
/*Окрашивает слова в теге span.s после радиокнопки в цвет value
загружается вместе с тегом body*/
function colorOnRadioText() {
    for (var i=0; i < $("#colorSelector input:radio").length; i++)
    $("#colorSelector .s").get(i).style.color=$("#colorSelector input:radio").get(i).value;
}
////////////////////////////////////////////////////////////////
///////ФУКЦИЯ ВЫДЕЛЕНИЯ ЖИРНЫМ И ОТМЕНЫ ВЫДЕЛЕНИЯ ЖИРНЫМ///////
var arr_cont = document.getElementsByClassName("paragraph");
//присвоение переменной массива объектов класса paragraph
function resetClass() { //фукция сброса предыдущего выделения в основную функцию и на кнопку
    for (var i=0; i < arr_cont.length; i++ )
    arr_cont[i].innerHTML=arr_cont[i].innerHTML.replace(new RegExp("<b.*?>",'ig'),""); //убирает все теги <b>
    // а браузер сам потом удаляет закрывающие теги </b>
    $("#counter").html("");
    
}
function findCounter() {//нелогичная функция подсчёта жирных тегов и вывода значения в информационное поле
    var cсс=0;
    for (var i=0; i < arr_cont.length; i++ )
        cсс+=(arr_cont[i].innerHTML.match(new RegExp("<b", "g")) || []).length;
    $("#counter").css("color","green").html("Найдено совпадений: "+cсс);
}

function animator() {//визуальный перенос найденного объекта из строки поиска в место где он был найден
    var words = $(".paragraph b"); //выборка найденных и помеченных тегом b элементов
    var start = $("input[type='text']").offset(); //координаты окна ввода данных
    for (var i=0; i<words.length; i++) {
        $(words.get(i)).offset(start); //перемещение объекта в окно input
        $(words.get(i)).animate({
            'top': 0, 'left': 0 //возврат элемента на свои позиции
        }, 1000); //время анимации в милисекундах
    }
}

///////////////////////////////////////////////////////////////////
function textBoldOfClass(input) {//функция выделения искомого значения в тексте абзацев
    resetClass();
    var stext = input.value;
    var count_finder = 0;
    for (var i=0; i < arr_cont.length; i++ )
        if (arr_cont[i].innerHTML.indexOf(stext) === -1) count_finder++;
    if (count_finder === arr_cont.length) 
    $("#counter").css("color","red").html("Искомое сочетание не найдено!");
    else
        if ((stext !== "  ") && (stext !== " ") && (stext.indexOf('.') === -1) && (stext.length > 1)) { //проверка на глупый ввод
            for (var i=0; i < arr_cont.length; i++ )
                arr_cont[i].innerHTML=arr_cont[i].innerHTML.replace(new RegExp(stext,'g'),"<b>"+stext+"</b>");
            findCounter(); //функция вывода найденных элементов
            animator();//функция анимации найденного текста
        }
        else $("#counter").css("color","red").html("Введите коректное слово!");
    input.value=""; //сброс значения в поле поиска
}

