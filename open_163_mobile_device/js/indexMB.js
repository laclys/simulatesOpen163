window.onload = function () {
    /*导航栏li*/
    var navList = $('#navList li');
    var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        autoHeight: true,
        onSlideChangeEnd: function (swiper) {
            console.log(swiper.activeIndex) //切换结束时，现在是第几个slide
            localStorage.now_swiper = swiper.activeIndex;
            //当页面切换，导航条加class：on
            navList.removeClass('on');
            navList.eq(swiper.activeIndex).addClass('on');
        }
    });
    console.log(localStorage.now_swiper);
    mySwiper.slideTo(localStorage.now_swiper);
    /*从localStorage得到第几页并将该页加上class：on*/
    // console.log(navList);
    navList.removeClass('on');
    navList.eq(localStorage.now_swiper).addClass('on');
    //导航栏点击事件
    navList.tap(function () {
        console.log($(this).index());
        mySwiper.slideTo($(this).index());
        //并将该页面编号存入localStorage
        localStorage.now_swiper = $(this).index();
    });

};