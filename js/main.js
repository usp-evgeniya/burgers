
$(document).ready(function () {

    /* hamburger-menu */
    $(function(){
            var hamburgerMenu = $('.hamburger-menu');
        hamburgerMenu.on('click', function (e) {
            e.preventDefault();
            hamburgerMenu.toggleClass('open');

            if (hamburgerMenu.hasClass('open')) {
                
                $('.header__nav').slideDown(700);
                hamburgerMenu.css({
                    background: "url('img/icon/close.svg') 50% 50% no-repeat",
                    opacity: '0.7'
                });
                $('body').css({
                    height: '100vh',
                    overflow: 'hidden'
                });
            } else {
                $('.header__nav').slideUp(700);
                hamburgerMenu.css({
                    background: "url('img/icon/hamburger-menu.svg') 50% 50% no-repeat",
                    opacity: '1'
                });
                $('body').css({
                    height: '100%',
                    overflow: 'initial'
                });

            }
        })
    })
    


    /* team-accordeon */

    $(function() {
        $('.team__member').on('click', function (e) {
            e.preventDefault();
            var elem = $(e.target),
            active = elem.closest('.team__item'),
            result = elem.next('.team__details');

            if (active.hasClass('active')) {
                active.removeClass('active');
                result.css('height','0rem')
                
            } else {
                active.addClass('active');
                result.css('height','6.625rem');
                active.siblings().find('.team__details').css('height','0rem');
                active.siblings().removeClass('active')
            }
        })

    })

        /* menu-accordeon */

    $(function() {
        $('.menu__type-title').on('click', function (e) {
            console.log($(e.target))
            
            e.preventDefault();
            var elem = $(e.target),
            active = elem.closest('.menu__item'),
            result = active.find('.menu__description');

            if (active.hasClass('active')) {
                active.removeClass('active');
                result.css({
                    'width':'0rem',
                    'padding': '0rem'
                })
                
            } else {
                active.addClass('active');
                result.css({
                    'width':'37rem',
                    'padding': '3.75rem 2.1875rem'
                })
                active.siblings().find('.menu__description').css({
                    'width':'0rem',
                    'padding': '0rem'
                });
                active.siblings().removeClass('active')
            }

            
        })

    })




})



