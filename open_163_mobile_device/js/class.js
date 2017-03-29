window.onload = function () {
    //课程介绍下拉上拉
    var arrowBtn = $('#arrow');
    var arrowFlag = true;
    arrowBtn.on('click', function () {
        if (arrowFlag) {
            $('.introduce').animate({
                'height': '4.87654rem'
            }, 'ease-out');
            $('#arrow_img').animate({
                'transform': 'rotate(0deg)'
            }, 'ease-out');
        } else {
            $('.introduce').animate({
                'height': '9.87654rem'
            }, 'ease-out');
            $('#arrow_img').animate({
                'transform': 'rotate(180deg)'
            }, 'ease-out');

        }
        arrowFlag = !arrowFlag;
    });
}