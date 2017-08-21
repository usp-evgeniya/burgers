
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
            item = elem.closest('.team__item'),
            content = item.find('.team__details-wrapper'),
            openHeight = item.find('.team__details').outerHeight( true ),
            otherItems = item.siblings(),
            otherItemsContent = otherItems.find('.team__details-wrapper');

            if (!item.hasClass('active')) {
                otherItems.removeClass('active'),
                item.addClass('active'),
                otherItemsContent.css('height', '0'),
                content.css('height', openHeight)
            } else {
                item.removeClass('active'),
                content.css('height', '0')
            }
        })

    })

        /* menu-accordeon */

    $(function() {
        $('.menu__type-title').on('click', function (e) {


            e.preventDefault();
            var elem = $(e.target),
            item = elem.closest('.menu__item'),
            content = item.find('.menu__description-wrapper'),
            otherItems = item.siblings(),
            otherItemsContent = otherItems.find('.menu__description-wrapper'),
            itemsWidth = $('.menu__item').length * $('.menu__type-cover').width();

            $(window).width() < 769 
            ? openWidth = $(window).width() - itemsWidth 
            : openWidth = $(window).width()*0.65 - itemsWidth
            
            if (!item.hasClass('active')) {
                otherItems.removeClass('active'),
                item.addClass('active'),
                otherItemsContent.css('width', '0'),
                content.css('width', openWidth)
            } else {
                item.removeClass('active'),
                content.css('width', '0')
            }

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
                iconImageHref: 'img/icon/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-15, -50]
            });

            myPlacemarkTver = new ymaps.Placemark([59.94708381, 30.38481688], {
                 hintContent: 'Mr.Burger на Тверской', 
                 balloonContent: 'Тверская улица, 16'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-15, -50]
            });

            myPlacemarkMosk = new ymaps.Placemark([59.891295, 30.316907], {
                 hintContent: 'Mr.Burger на Московском', 
                 balloonContent: 'Московский проспект, 103к2'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-15, -50]
            });

            myPlacemarkChap = new ymaps.Placemark([59.973999, 30.311091], {
                 hintContent: 'Mr.Burger на Чапыгина', 
                 balloonContent: 'улица Чапыгина, 13А'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-15, -50]
            });  

            myMap.geoObjects
            .add(myPlacemarkTov)
            .add(myPlacemarkTver)
            .add(myPlacemarkMosk)
            .add(myPlacemarkChap);

            myMap.behaviors
            .disable('scrollZoom')
            .disable('drag')
            

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


