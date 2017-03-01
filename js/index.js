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
});