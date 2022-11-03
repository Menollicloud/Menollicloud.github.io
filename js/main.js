var header = $(".header");
let scrollTop = $('.scroll-top');
var scrollChange = 1;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('scroll');
        scrollTop.addClass('scroll');
    } else {
        header.removeClass("scroll");
        scrollTop.removeClass('scroll');
    }
});

$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
});

function myAnimate (el, animation){
    $(`${el}`).mouseover(function(){
        return $(this).addClass(`${animation}`);
    })
    $(`${el}`).mouseout(function(){
        return $(this).removeClass(`${animation}`);
    });

}
// animate('.btn','animated heartBeat infinite');
myAnimate('.header-logo','animated shake infinite slow');
myAnimate('.contact-us,.basket','animated pulse infinite');

document.querySelector('.scroll-top').onclick = () => {
    window.scrollTo(pageYOffset, 0);
}

$(document).ready(function() {
    new WOW().init();
});

window.addEventListener("load", function(event) {
    document.querySelector('.scroll-top').click()
});


jQuery(document).ready(function(){
    if(jQuery('#slider .logos.alt-arrow').length) {
        jQuery('#slider .logos.alt-arrow').slick({
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 3,
          arrows: true,
          prevArrow: '<div class="slick-prev"><svg width="15" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.25 2L2 13.25L13.25 24.5" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
          nextArrow: '<div class="slick-next"><svg width="15" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 2L13 13.25L1.75 24.5" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
          autoplay: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                rows: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
    
              }
            }
          ]
        });
    }
});