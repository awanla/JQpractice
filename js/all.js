$(document).ready(function () {
    $('.click_menu').click(function (e) { 
        e.preventDefault();
        $('.click_menu').toggleClass('active');
        $('.product_menu').slideToggle(1000);
    });
    var mySwiper = new Swiper('.swiper-container', {
        // 可選參數
        loop: true,

        // 如果需要分頁設置
        pagination: {
            el: '.swiper-pagination',
        },

        // 上一個/下一個 按鈕
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    
    $('.top-icon').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    
    });
    