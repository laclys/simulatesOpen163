window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        autoHeight: true,
        onSlideChangeEnd: function (swiper) {
            console.log(swiper.activeIndex) //切换结束时，现在是第几个slide
            localStorage.now_swiper = swiper.activeIndex;
        }
    });
    // console.log(localStorage);
    mySwiper.slideTo(localStorage.now_swiper);
};