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
       '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".header__button").on("click", function (){
        $(".header__box").toggleClass("active");
        $(".logo__top").toggleClass("active");
        $(".search__icon").toggleClass("active__state2");
    });
    $(".search__icon").on("click", function (){
        $(".header__form").toggleClass("active");
        $(".menu__list-btn").toggleClass("active");
    });
    $(".menu__list-btn").on("click", function (){
        $(".menu__list").slideToggle();
    });

    $(".category__btn-wrapper").on("click", function (){
        $(".category__aside").toggleClass("active");
        $(".category__box").toggleClass("active");
        $(".category__btn").toggleClass("active");
    });

    $(".category__full-items").on("click", function () {
        $(".category__small-items").removeClass("active");
        $(".category__full-items").addClass("active");
        $(".product__item-entire-wrapper").addClass("active");
        $(".product__item-small-wrapper").removeClass("active");
        $(".product__item-inner").addClass("full-width");
    })
    $(".category__small-items").on("click", function () {
        $(".category__full-items").removeClass("active");
        $(".category__small-items").addClass("active");
        $(".product__item-small-wrapper").addClass("active");
        $(".product__item-entire-wrapper").removeClass("active");
        $(".product__item-inner").removeClass("full-width");
    })

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 400,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('select.search__form-select').styler();

    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs .tab').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    var mixer = mixitup(".products__inner-box");

    var jqBar = $('#counts'); // селектор для вашего блока
    var jqBarStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        if (scrollEvent && jqBarStatus) {
            jqBarStatus = false;
            /* выполнение скрипта jqbar с определенными параметрами */
            $(".number").spincrement({
                thousandSeparator: ",",
                duration: 4200
            });
        }
    });

});