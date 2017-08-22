
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

    /*slider*/

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

        /*$('.modal__btn').on('click', function(e) {
            e.preventDefault();
            $.fancybox.close()
        })*/

    })



    /*one-page-scroll*/

    $(function() {
        var sections = $('.section'),
            visible = $('.content'),
            inScroll = false;

            var md = new MobileDetect(window.navigator.userAgent),
            isMobile = md.mobile();

        var performTransition = function (sectionEq) {
          
            if(!inScroll) {
                inScroll = true;

                var sectionEq = sectionEq - 1; /*Index starts counting from 0, eq from 1*/
                var position = (sectionEq * -100) + '%';
                
                visible.css({
                    'transform' : 'translateY(' + position + ')',
                    '-webkit-transform' : 'translateY(' + position + ')'
                })
    
                sections.eq(sectionEq).addClass('active')
                .siblings().removeClass('active');

                setTimeout(function() {
                    inScroll = false;
                    $('.bullets__item').eq(sectionEq).addClass('active')
                    .siblings().removeClass('active');
                }, 300)

            }
                
        }
    
        var defineSections = function(sections) {
            var activeSection = sections.filter('.active');
            return {
                activeSection : activeSection,
                nextSection : activeSection.next(),
                prevSection : activeSection.prev()
            }
        }

        var scrollToSection = function(direction) {
            var section = defineSections(sections);
            
            if (direction == 'up' && section.nextSection.length) { /*вниз*/
                
                performTransition(section.nextSection.index());
            } 
            
            if (direction == 'down' && section.prevSection.prev().length) { /*вверх*/   
                performTransition(section.prevSection.index());
            }

        }



        $('.wrapper').on({
            'wheel': function(e) {
                var deltaY = e.originalEvent.deltaY,
                direction = "";

                var direction = deltaY > 0 
                ? direction = 'up'
                : direction = 'down';

                scrollToSection(direction);
            },

            touchmove: function(e) {
                e.preventDefault();
            }
        })
            

        $(document).on('keydown', function (e) {
            var section = defineSections(sections);
            
            
            switch (e.keyCode) {
                case 38: /*вверх*/
                    if (section.prevSection.prev().length) {
                        performTransition(section.prevSection.index());
                    }
                    break;
                case 40: /*вниз*/
                    if (section.nextSection.length) {
                        performTransition(section.nextSection.index());
                    }
                    break;
            }


        })

        /*bullets*/

        
            

        $('.bullets__link').on('click', function (e) {
        
            e.preventDefault();

            var elem = $(e.target),
            bullets = $('.bullets__item'),
            bulletTarget = elem.closest(bullets),            
            bulletEq = bulletTarget.index();

            performTransition(bulletEq + 1); /*Index starts counting from 0, eq from 1*/ 

        })

        $('.header__link').on('click', function (e) {
            
            e.preventDefault();

            var elem = $(e.target),
            elemId = elem.attr('href'),
            sectionEq = parseInt(sections.filter(elemId).index());
            performTransition(sectionEq);  
            
        })
        
        /* move to section */

        $('.main__arrow').on('click', function(e) {
            e.preventDefault();
            performTransition(2);
        });

        $('.header__btn, .burgers__btn').on('click', function(e) {
            e.preventDefault();
            performTransition(7); /*Index starts counting from 0, eq from 1. First link is second screen*/ 

        });

        if (isMobile) {
            $(window).swipe({
                swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
                    scrollToSection(direction);
                }
            });            
        }
        
    })


    $(function (e) {


    })


})



