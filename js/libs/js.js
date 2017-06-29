$(document).ready(function() {

$('.nav-toggle').click(function(){
  $('.nav__list').toggleClass('nav__list--active');
});

$('.slider__list').slick({
  slidesToScroll: 1,
  autoplay: false,
  infinity: false,
  dots: false,
  arrows: true,
  nextArrow: '<button type="button" class="main-next">&nbsp;</button>',
  prevArrow: '<button type="button" class="main-prev">&nbsp;</button>',
  
});

$('.maecenas__list').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
});

/*popups*/

  $('.recall').magnificPopup({
    type: 'inline',
    preloader: false,
    mainClass: 'zoom-in',
    removalDelay: 160
  });

  // $('.gratitude-page__item').magnificPopup({
  // type: 'image',
  // gallery: {
  //     enabled: true,
  //     navigateByImgClick: true
  //   },
  // });

});