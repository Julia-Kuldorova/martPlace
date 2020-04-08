$(function(){

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true
    });

    $(".slider__inner").slick({
        infinite: true,
        prevArrow:
       '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
     nextArrow:
       '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
    });
});