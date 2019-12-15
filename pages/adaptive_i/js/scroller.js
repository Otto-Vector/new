$(document).ready(function(){
    var menuArray=$(".top");
    var sectorPosition= new Array();
    var currentPosition; var i=0;
    $(".top").bind({ //запускает функцию прокрутки при нажатии на элемент .top
        click: function() {scrollTo(this);}
    });
    $(window).scroll(function(){//функция jq по отслеживанию скроллинга
        for (i=0; i<menuArray.length; i++)
            //присваивает значение положения каждого элемента якоря из верхнего меню, записанного в аттрибуте data
            sectorPosition[i]=$($(menuArray.get(i)).attr("data")).offset().top;
        currentPosition=$(window).scrollTop()+3;//+3 для корректировки точности при нажатии на навигацию
        for (i=0; i<sectorPosition.length; i++)
            if (currentPosition >= sectorPosition[i]){
            $(".top").attr("class","top");//ставит значение только top на остальные пункты меню
            $(menuArray.get(i)).attr("class","top active");//отмечает пункт, соответствующий условию
            }
    });
});

function scrollTo(menu){
    //узнаём значение позиции выбранного элемента
    var scrollPosition = $($(menu).attr("data")).offset().top;
    // скроллим страницу на значение равное позиции элемента c применением анимации для плавности
    $("html, body").animate({scrollTop: scrollPosition+"px"});
}