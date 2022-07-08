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

// const swiper3 = new Swiper(".recommend_hotel", {
//     slidesPerView: "auto",
//     spaceBetween:20,
// });

//추천해줄개 tab
const tabBtn1 = document.querySelectorAll('.recommend .tabs_menu li');
const tabBd1 = document.querySelectorAll('.recommend .tabs_body > div');
console.log(tabBd1);

tabBtn1.forEach(function(item,index){
    item.onclick = function(e){
        e.preventDefault();
        for(let i = 0; i < tabBtn1.length; i++){
            tabBtn1[i].classList.remove('active');
            tabBd1[i].style.display = 'none';
        }

        item.classList.add('active');
        tabBd1[index].style.display = 'block';

        // tabBtn[num].classList.remove('on');
        // this.classList.add('on');
        // num = bb;
    };
})
