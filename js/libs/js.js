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

$('.report__slider').slick({
  slidesToScroll: 1,
  autoplay: false,
  infinity: false,
  dots: true,
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
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
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

  $('.gratitude-page__item').magnificPopup({
  type: 'image',
  gallery: {
      enabled: true,
      navigateByImgClick: true
    },
  });

  /*smuth scroll*/
  $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top - 0;
    $('body, html').animate({scrollTop: bl_top}, 700);
    return false;
  });

  /*ya maps*/
ymaps.ready(init);
  var myMap,
      myPin,
      myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [55.76867412, 37.58246556],
                zoom: 16
            });

myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl').remove('zoomControl').remove('rulerControl').remove('typeSelector');
myMap.behaviors.disable(['scrollZoom']); 
myMap.behaviors.get('drag').disable();
//myPlacemark = new ymaps.Placemark([55.75399400, 37.62209300]);
  // myMap.geoObjects.add(myPlacemark);
  // myMap.setBounds(myMap.geoObjects.getBounds());
      myPlacemark=new ymaps.Placemark([55.75399400, 37.62209300],{
    }, {
    iconImageHref:'../img/icons/big-pin.png',
    iconImageSize:[32, 46],
    iconImageOffset:[-3,-42]
    });
    myPlacemark.id=id;
    myMap.geoObjects.add(myPlacemark);
  }

});