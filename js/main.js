
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
                
        }, 2000);
*/
        })
    })

})
