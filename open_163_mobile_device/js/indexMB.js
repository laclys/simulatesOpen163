window.onload = function () {
    /*导航栏li*/
    var navList = $('#navList li');
    var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        autoHeight: true,
        onSlideChangeEnd: function (swiper) {
            console.log('当前是第' + swiper.activeIndex + '页') //切换结束时，现在是第几个slide
            localStorage.now_swiper = swiper.activeIndex;
            //当页面切换，导航条加class：on
            navList.removeClass('on');
            navList.eq(swiper.activeIndex).addClass('on');
        }
    });
    // console.log(localStorage.now_swiper);
    mySwiper.slideTo(localStorage.now_swiper);
    /*从localStorage得到第几页并将该页加上class：on*/
    // console.log(navList);
    navList.removeClass('on');
    navList.eq(localStorage.now_swiper).addClass('on');
    //导航栏点击事件
    navList.tap(function () {
        console.log('点击第' + $(this).index() + '页');
        mySwiper.slideTo($(this).index());
        //并将该页面编号存入localStorage
        localStorage.now_swiper = $(this).index();
    });
    //nav顶部吸附
    var headerH = $('header').height();
    console.log('header Height----' + headerH);
    $(window).on('scroll', function () {
        // console.log('scrolling');
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() >= headerH) {
            $('#top_nav').css({
                'position': 'fixed',
                'top': '0px',
                'z-index': '99',
                'background': 'white'
            });
            $('#fake_nav').css('display', 'block');
        } else {
            $('#fake_nav').css('display', 'none');
            $('#top_nav').css({
                'position': 'relative'
            });
        }
    });
    //nav左右滑动
    $('#top_nav').on('touchstart', function (ev) {
        var navListUl = $('#navList');
        //按下时left值
        var nowL = parseFloat(navListUl.css('left'));
        console.log('nowL:' + nowL);
        //按下时x轴坐标点
        var pageX = ev.touches[0].clientX;
        console.log('x轴坐标点------' + pageX);
        $(document).on('touchmove', function (ev) {
            //平移量
            var l = ev.touches[0].clientX - pageX + nowL;
            // console.log('平移量----'+l);
            var ulLeftMax = parseFloat(navListUl.css('width')) - $(document).width();
            console.log(ulLeftMax);
            if (l >= 0) {
                l = 0;
            } else if (l <= -ulLeftMax) {
                l = -ulLeftMax;
            }
            navListUl.css('left', l);
        });
        $(document).on('touchend', function (ev) {
            //移除touchmove和touchend事件
            $(document).off('touchmove');
            $(document).off('touchend');
        });
    });
    //nav_more事件
    var more_flag = false;
    $('#btn_more').tap(function () {
        //打开导航栏
        var oNav = $('#top_nav');
        var nav_inner = $('#nav_inner');
        var list_boxDiv = $('#list_box_div');
        var navListUl = $('#navList');
        if (!more_flag) {
            oNav.css('height', '8.9rem');
            nav_inner.css('height', '8.9rem');
            list_boxDiv.css('height', '8.9rem');
            navListUl.css('height', '8.9rem');
            navListUl.css('width', '100%');
            navListUl.css('position', 'static');
            //改变小箭头伪类before方向
            $('#icon-more').addClass('rotate');
            more_flag = !more_flag;
        } else {
            //收缩导航栏
            oNav.css('height', '');
            nav_inner.css('height', '');
            list_boxDiv.css('height', '');
            navListUl.css('height', '');
            navListUl.css('width', '');
            navListUl.css('position', '');
            more_flag = !more_flag;
            $('#icon-more').removeClass('rotate');
        }
    });
};