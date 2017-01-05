/**
 * @Date 2017-01-05
 * @author [hoyinWong]
 **/
;
(function($) {
    var ele = $('.outer').eq(0);
    var result;
    var
        w = ele.width(),
        h = ele.height(),
        orient = {},
        w2 = w / 2,
        h2 = h / 2,
        slope1 = h / w,
        slope2 = -h / w;
    $('.outer').on('mouseenter mouseleave', function(e) {
        var
            she = this,
            direct = "",
            x = e.offsetX,
            y = e.offsetY,
            xpos = x - w2,
            ypos = y - h2,
            s = ypos / xpos;
        console.log(orient.mouseleave);
        if (slope2 < s && s < slope1) {
            if (x > w2) {
                direct = 'right';
            } else {
                direct = 'left';
            }
        } else {
            if (y < h2) {
                direct = 'top';
            } else {
                direct = 'down';
            }
        }
        if (e.type == 'mouseenter') {
            orient.mouseenter = direct;
            $(she).find('.inner').removeClass('l-slide' + orient.mouseleave);
        } else {
            orient.mouseleave = direct;
        }
        move(she, e.type, orient);
    });

    function move(she, eventType, orient) {
        if (eventType == 'mouseenter') {
            $(she).find('.inner').removeClass('leave');
            switch (orient.mouseenter) {
                case 'top':
                    $(she).find('.inner').addClass('e-slidetop');
                    break;
                case 'down':
                    $(she).find('.inner').addClass('e-slidedown');
                    break;
                case 'left':
                    $(she).find('.inner').addClass('e-slideleft');
                    break;
                case 'right':
                    $(she).find('.inner').addClass('e-slideright');
            };
        } else {
            $(she).find('.inner').removeClass('e-slide' + orient.mouseenter);
            $(she).find('.inner').addClass('leave');
        }
    }
})(jQuery);
