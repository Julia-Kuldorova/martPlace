$(function(){

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true,
        ratedFill: "#ffc000"
    });
    $(".product__item--rate-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        ratedFill: "#ffc000"
    });

    $(".slider__inner").slick({
        infinite: true,
        prevArrow:
       '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
     nextArrow:
       '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
    });


    $(".slider__bottom-inner").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:
       '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
     nextArrow:
       '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
    });

    var mixer = mixitup(".products__inner-box");

    var currentNumber = $('.number').text();

    
        $(window).scroll(function() {
            
            if ($(this).scrollTop() > 2240) {
            
                    // apply effects and animations
                    $({numberValue: currentNumber}).animate({numberValue: 38436}, {
                        duration: 4000,
                        easing: 'swing',
                        step: function() { 
                            $('.number_1').text(Math.ceil(this.numberValue)); 
                        }
                        });
                    $({numberValue: currentNumber}).animate({numberValue: 3736
                    }, {
                        duration: 2800,
                        easing: 'swing',
                        step: function() { 
                            $('.number_2').text(Math.ceil(this.numberValue)); 
                        }
                        });
                    $({numberValue: currentNumber}).animate({numberValue: 2736
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() { 
                            $('.number_3').text(Math.ceil(this.numberValue)); 
                        }
                    });
                    $({numberValue: currentNumber}).animate({numberValue: 25736
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function() { 
                            $('.number_4').text(Math.ceil(this.numberValue)); 
                        }
                    });
            
            }
            
            });
            
});