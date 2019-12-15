///функция кроссбраузерного вызова XMLHTTP//
function getXmlHttp() {
        var xmlhttp;
        try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
                try {
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (E) {
                        xmlhttp = false;
                }
        }
        if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
                xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
}
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
function checkLogin(login) {
    if (login !=="") {
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'php/login.php', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("login=" + encodeURIComponent(login)); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
        if (xmlhttp.readyState === 4) { // Ответ пришёл
            if (xmlhttp.status === 200) { // Сервер вернул код 200 (что хорошо)
                if (xmlhttp.responseText === "error") $("#loginCounter").css("color","red").html("Логин занят!");
                else $("#loginCounter").css("color","green").css("font-weight","none").html("Логин свободен");
            }
        }
    };
    }
}
  //////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//функция проверки валидности ввода данных в формы
function checkForm(form)
{
var elements=$("footer :input:not(:submit)");//все элементы input в подвале кроме кнопки подтверждения
// var elements=$("footer :input").not(":submit)"); /*то же самое*/
var login = elements.get(0).value.match(/^[a-z0-9\._-]{2,19}$/i);
var mail = elements.get(1).value.match(/^[a-z0-9][a-z0-9\._-]*[a-z0-9_]*@([a-z0-9]+([a-z0-9-]*[a-z0-9]+)*\.)+[a-z]+$/i);
var note = elements.get(2).value.match(/^.{0,210}$/);
if (!login) {
    alert("Логин не сооветствует условиям ввода\nДолжен состоять из (2-20) латинских букв и цифр,\nможно использовать точку, нижнее подчёркивание, тире");
    return false;
}
if (!mail) {
    alert("Email введен неверно!");
    return false;
}
if (!note) {
    alert("Слишком много текста в примечании!\nПожалуйста сократите до 210-ти символов.");
    return false;
}
for (var i=0; i < elements.length; i++) {
    elements.get(i).value=null; //сброс полей формы при удачной проверке всех инпутов
}
return false;
}
/////////////////////////////////////////////////////////////////////////
var textcolor="", count=0;
//переменные цвета текста и счётчика создаются глобальными
//чтобы они не создавались каждый раз при вводе символа, забивая оперативную память 
function charCounter(textarea,limit,maxLimit,messageId)
{
count=textarea.value.length;//присвоение счётчику длины введенного текста
if (count < limit+1) textcolor="black";
//проверка на количество введенных символов и присвоение цвету текста значения "черный"
//для того чтобы, если текст снова вернётся в указанное значение, счётчик не оставался красным
if (count > limit ) textcolor="red";
if (messageId)
$("#"+messageId).css("color",textcolor).html("Введено "+count+" символов из "+limit+"-ти");
//вывод текста в Span с указанным в селекторе id
if (count > maxLimit-1) textarea.value=textarea.value.substr(0,maxLimit);
//максимальное количество символов обрезается при чрезмерном вводе
//этот шаг в 90 символов оставляется для демократического выбора по редактированию
//если человек набирает текст и вдруг не заметил превышения.
}

//стирание неподходящих символов
function charDelete(text) {
    
}