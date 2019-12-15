$(document).ready(function(){
      $('.menu_top').slick({
        dots: false, //точки отключены
        arrows: true, //стрелки включены
        slidesToScroll: 1, //прокручивать по 2
        slidesToShow: 10, //показывать 3 слайда
        infinite: false,
        variableWidth: true,
        responsive: [ //адаптивный режим
            {
            breakpoint: 750, //при 720пикселях
                settings: {
                    slidesToScroll: 4, //надо ставить во всех, иначе перейдёт к предыдущему значению "2"
                    slidesToShow: 7
                }
            },{
            breakpoint: 600, //при 720пикселях
                settings: {
                    slidesToScroll: 5, //надо ставить во всех, иначе перейдёт к предыдущему значению "2"
                    slidesToShow: 6
                }
            },{
            breakpoint: 430, //при 720пикселях
                settings: {
                    slidesToScroll: 3, //надо ставить во всех, иначе перейдёт к предыдущему значению "2"
                    slidesToShow: 3
                }
            }
        ]
      });
      $('#banner').slick({ //это настройки для первого баннера с точками
        arrows: false, //стрелки отключены
        dots: true, //точки включены
        infinite: true, //по кругу
        slidesToScroll: 1, //прокручивать один
        autoplay: true, //автоматическая прокрутка, без нее не работает след.параметр
        autoplaySpeed: 11000, //время автоматической прокрутки 
        pauseOnDotsHover: true //остановить прокрутку при наведении на точки
      });
      $('.categories').slick({
        dots: false, //точки отключены
        arrows: true, //стрелки включены
        infinite: true, //по кругу
        slidesToScroll: 2, //прокручивать по 2
        slidesToShow: 4, //показывать 3 слайда
        autoplay: true, //автопрокрутка
        autoplaySpeed: 17000, //время
        responsive: [ //адаптивный режим
            {
            breakpoint: 1300, //при 1300пикселях
                settings: {
                    slidesToScroll: 2, //надо ставить во всех, иначе перейдёт к предыдущему значению "2"
                    slidesToShow: 3
                }
            },
            {
            breakpoint: 720, //при 720пикселях
                settings: {
                    slidesToScroll: 1, //надо ставить во всех, иначе перейдёт к предыдущему значению "2"
                    slidesToShow: 2
                }
            },{
            breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      });
    });