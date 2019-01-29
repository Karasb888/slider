$(document).ready(function(){
  $('.games').slick({
    rows: 2,
    slidesPerRow: 3,
    dots: true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesPerRow:2,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesPerRow:1,
        rows:1,
        centerMode:true,
        variableWidth: true
      }
    }
  ]

  });

  $('.games__slider-item').hover(
       function(){ $(this).addClass('hover') },
       function(){ $(this).removeClass('hover') }
);
const COUNT_NUM = document.getElementById('slick-current');
$('.games').on('afterChange', function(event, slick, currentSlide, nextSlide){
  COUNT_NUM.innerHTML = $('.games').slick('slickCurrentSlide') + 1;
});
});
