
$(document).ready(function () {

    /* hamburger-menu */
    $(function(){
        var hamburgerMenu = $('.hamburger-menu');
        hamburgerMenu.on('click', function (e) {
            e.preventDefault();
            hamburgerMenu.toggleClass('open');
            $('body').toggleClass('open');
            $('.header__nav').slideToggle(700);
        })
    })

    /* team-accordeon */
    /*Как теперь сделать, чтобы оно анимировалось - плавно открывалось и закрывалось?*/
    /*Я специально оставила возможный вариант, который не сработал, кроме того slideToggle убивает flex*/

    $(function() {
        $('.team__member').on('click', function (e) {
            e.preventDefault();
            var elem = $(e.target),
            active = elem.closest('.team__item');
            /*result = elem.next('.team__details');*/

                active.toggleClass('active');
                /*result.slideToggle(500);*/
                active.siblings().removeClass('active');
                /*active.siblings().find('.team__details').slideUp(500);
                */
            
        })

    })

        /* menu-accordeon */

    $(function() {
        $('.menu__type-title').on('click', function (e) {
          
            e.preventDefault();
            var elem = $(e.target),
            active = elem.closest('.menu__item');

            active.toggleClass('active');
            active.siblings().removeClass('active');
        })
    })

    /*bullets*/

    $(function(){
            

        $('.bullets__link').on('click', function (e) {
       /* e.preventDefault();    */
        var elem = $(e.target),
        /*target = elem.attr('href'),*/
        marker = elem.closest('.bullets__item');
        
        marker.toggleClass('bullets__item--active');
        marker.siblings().removeClass('bullets__item--active');

        console.log(target);
        console.log(marker);            



        /*
        $('html, body').animate({
            scrollTop : $('target').offset().top
                
        }, 1000);
*/
        })
    })

    $(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            loop: true,
            navText: []
        }
        );
    })



    $(function(){

        ymaps.ready(init);
        var myMap;

        function init(){     
            myMap = new ymaps.Map("map", {
                center: [59.92606548, 30.32610869],
                zoom: 11
            });

            myPlacemarkTov = new ymaps.Placemark([59.915038, 30.486096], {
                 hintContent: 'Mr.Burger на Товарищеском', 
                 balloonContent: 'Товарищеский проспект, 20/27'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/img/icon/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-15, -50]
            });

            myPlacemarkTver = new ymaps.Placemark([59.94708381, 30.38481688], {
                 hintContent: 'Mr.Burger на Тверской', 
                 balloonContent: 'Тверская улица, 16'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/img/icon/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-15, -50]
            });

            myPlacemarkMosk = new ymaps.Placemark([59.891295, 30.316907], {
                 hintContent: 'Mr.Burger на Московском', 
                 balloonContent: 'Московский проспект, 103к2'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/img/icon/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-15, -50]
            });

            myPlacemarkChap = new ymaps.Placemark([59.973999, 30.311091], {
                 hintContent: 'Mr.Burger на Чапыгина', 
                 balloonContent: 'улица Чапыгина, 13А'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/img/icon/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-15, -50]
            });  

            myMap.geoObjects
            .add(myPlacemarkTov)
            .add(myPlacemarkTver)
            .add(myPlacemarkMosk)
            .add(myPlacemarkChap);

            myMap.behaviors.disable('scrollZoom')
        }

    })

    $(function() {
        $("[data-fancybox]").fancybox({
            smallBtn: false,
            toolbar: false
        });
            
        $('.popup__close').on('click', function(e) {
            e.preventDefault();
            $.fancybox.close()
        })

        $('.modal__btn').on('click', function(e) {
            e.preventDefault();
            $.fancybox.close()
        })

    })

     function ScrollTo(sectionNumber) {
        var target = $('.section').eq(sectionNumber).offset().top
        $('html, body').animate({
            scrollTop : target
        }, 1000);
    }

    $(function() {
        $('.main__arrow').on('click', function(e) {
            e.preventDefault();
            ScrollTo(1)
        })
    })

    $(function() {
        $('.header__btn').on('click', function(e) {
            e.preventDefault();
            ScrollTo(6)
        })
    })
    

})


