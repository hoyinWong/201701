/**
  * @Date 2017-01-05
  * @author [hoyinWong]
 **/
;
(function($){
	init();
	function init(){
		var ele = $('.outer').eq(0);
		var result;
		var 
			w = ele.width(),
			h = ele.height(),
			slope1 = h/w,
			slope2 = -h/w;
		$('.outer').on('mouseenter', function(e){
			console.log(e.type);
			var
				x = e.offsetX,
				y = e.offsetY,
				w2 = w/2,
				h2 = h/2,
				xpos = x - w2,
				ypos = y -h2,
				s = ypos/xpos;
			if(slope2 <s && s< slope1){
				if(x >= w2){ //第二象限
					result = 2;
					$(this).find('.inner').addClass('slide2');
				}else if(x < w2){ //第四象限
					result = 4;
					$(this).find('.inner').addClass('slide4');
				}
			}else{
				if(y <= h2){ //第一象限
					result = 1;
					$(this).find('.inner').addClass('slide1');
				}else if(y > h2){ //第三象限
					result = 3;
					$(this).find('.inner').addClass('slide3');
				}
			}
		});
		$('.outer').on('mouseleave', function(e){
			$(this).find('.inner').removeClass('slide'+result);
		})
	}


})(jQuery);
