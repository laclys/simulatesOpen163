$(function () {
    //顶部菜单栏'我的公开课''关于我们'移入移出
    var oTopUlMenuOpenClass = $('.fr_top_ul').find('li').eq(0);
    oTopUlMenuOpenClass.hover(function () {
        $('.ul_menu').removeClass('hide');
    }, function () {
        $('.ul_menu').addClass('hide');
    });
    var oTopUlMenu2Code = $('#about_us');
    oTopUlMenu2Code.hover(function () {
        $('.weibo_weixin').removeClass('hide');
    }, function () {
        $('.weibo_weixin').addClass('hide');
    });
    $('.weixin').hover(function () {
        $('.weixin').find('div').removeClass('hide');
    }, function () {
        $('.weixin').find('div').addClass('hide');
    });
    //搜索栏 
    $('#sreach_content').focusin(function () {
        $(this).val('    ');
        $('.sreachList').removeClass('hide');
        $('#sreach_content').keypress(function () {
            if ($(this).val() == '' || $(this).val() == '    ') {
                $('.sreachList').removeClass('hide');
            } else {
                $('.sreachList').addClass('hide');
            }
        });
    });
    $('#sreach_content').blur(function () {
        if ($(this).val() == '    ') {
            $(this).val('  搜素课程、视频、公开课策划');
        }
        $('.sreachList').addClass('hide');
    });
    //科目移入移出
    var oSub_menu = $('.sub_menu');
    var oSub_menu_p = oSub_menu.find('li');
    // var oSub_menu_div = oSub_menu.find('.block_menu');
    oSub_menu_p.hover(function () {
        $(this).find('.block_menu').removeClass('hide');
    }, function () {
        $(this).find('.block_menu').addClass('hide');
    });
    //大图选项卡
    var tabPicTitleArr = [
        '你发过“短性息”吗？',
        '天墓的秘密',
        '肥皂剧教会我们的四个重要的道理',
        '癌症早发现早治疗的新招',
        '激动人心的吉他表演',
        '纳米科技何去何从',
        '性暴力的救赎之路',
        '高薪岗位大揭秘'
    ];
    var box_categoryBPosY = [
        '0px',
        '-75px',
        '0px',
        '0px',
        '0px',
        '0px',
        '0px',
        '-175px'
    ];
    var tabPicSubArr = [
        '科技能引发人类最恶劣的品性和行为，并放大，你发过这种信息吗？',
        '喜玛拉雅山上，科学家发现了距今数千年的黄金面具和丝绸的石墓。',
        '肥皂剧剧情跌宕起伏，看似超出实际生活，但它又来源于实际。',
        '介绍通过纳米科技研发提早发现人体癌细胞的方法。',
        '当弗拉门戈吉他与重金属碰撞，会产生怎样的神奇效果呢？',
        '如果芯片变得小到不能再小了，纳米科技又将何去何从呢？',
        '20年前，在学校舞会后，他竟强奸了她。20年后，他们坦诚感情路。',
        '12场直播，解读互联网岗位成长轨迹'
    ];
    var ochangePic = $('#changePic');
    var oBox_category = $('#box_category');
    var oTabPicTitle = $('#tabPicTitle');
    var oTabPicSub = $('#tabPicSub');
    //--------
    var aTabImgBtn = $('#tabImgUl').find('li');
    aTabImgBtn.mouseover(function () {
        // console.log($(this).index());
        ochangePic.attr('src', `./img/tagpic${$(this).index()}.jpg`);
        oBox_category.css('background-position-y', box_categoryBPosY[$(this).index() - 1]);
        oTabPicTitle.html(tabPicTitleArr[$(this).index() - 1]);
        oTabPicSub.html(tabPicSubArr[$(this).index() - 1]);
        // $(this).find('a').css({'top':'-8px',});
        aTabImgBtn.find('a').removeClass('smallPicOn');
        $(this).find('a').addClass('smallPicOn');
    });
    //轮播图右边课程排名事件
    var oHotRank = $('#hot_rank');
    var oNewRank = $('#new_rank');
    var aRankRontentBox = $('.content_rank');
    oHotRank.mouseover(function () {
        $(this).addClass('rankOn');
        oNewRank.removeClass('rankOn');
        aRankRontentBox.eq(0).removeClass('hide');
        aRankRontentBox.eq(1).addClass('hide');
    });
    oNewRank.mouseover(function () {
        $(this).addClass('rankOn');
        oHotRank.removeClass('rankOn');
        aRankRontentBox.eq(1).removeClass('hide');
        aRankRontentBox.eq(0).addClass('hide');
    });
    //关闭底部广告
    $('.fixed_ads').click(
        function () {
            $(this).addClass('hide');
        }
    );
    //slider事件
    $(window).scroll(function () {
        //    console.log($(this));
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() != 0) {
            $('#slider_box3').removeClass('hide');
        } else {
            $('#slider_box3').addClass('hide');
        }
    });
    //回到顶部
    $('#slider_box3').click(function () {
        $(window).scrollTop(0);
    });
    //app二维码移入移出
    $('#slider_box1').hover(function () {
        $('#slider_box1 a').removeClass('hide');
    }, function () {
        $('#slider_box1 a').addClass('hide');
    });
    //下半部分图片延迟加载
    //获取到obj的top值，left值
    function getPos(obj) {
        var l = 0;
        var t = 0;

        while (obj) {
            l += obj.offsetLeft;
            t += obj.offsetTop;

            obj = obj.offsetParent;
        }

        return {
            left: l,
            top: t
        }
    }
    $(window).scroll(function () {
        var aChangeImg = $('.bottom_box_template .can_change_img');
        // console.log(aChangeImg);
        var clientH = $(window).height();
        var scrollT = $(this).scrollTop();
        // console.log($(window).height());
        // console.log(scrollT);
        aChangeImg.each(function (index, value) {
            // console.log(index);
            // console.log(value.src);
            var aChangeImgT = getPos(value).top;
            // console.log(aChangeImgT);
            // console.log(value.dataset.src);
            var that=value;
            if (scrollT + clientH >= aChangeImgT) {
                value.src=value.dataset.src;
            }
        });

    });
    //当设备可视区在1314px像素以上时侧边栏出现，否则隐藏
        $(window).resize(function () {
        // alert(1);
        var clientW = $(window).width()
        console.log(clientW);
        if(clientW>=1314){
            $('.slider').css('display','block');
        }else{
            $('.slider').css('display','none');
        }
    });
});