$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 600,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/scroll-menu/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/scroll-menu/right.png"></button>',
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true,
                }
            }
        ],
    });
  });