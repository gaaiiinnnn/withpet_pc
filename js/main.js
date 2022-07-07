//메인슬라이드
const swiper1 = new Swiper(".main_slider", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//알려줄개
const swiper2 = new Swiper(".notice_slide", {
    loop: true,

    autoplay: {
        delay: 1500,
    },

    direction: "vertical",
    disableOnInteraction: false,
});

//추천해줄개
const swiper3 = new Swiper(".right", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});