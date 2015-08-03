/* slideshow plugin */

$.fn.acSlider=function(){
	if(!this.length)return;

	var options={ delay:2500, speed:1000 },$list=this,$container=$list.parent(),$items=$list.find('li'),num=$items.length,timer,active=0,$dots;

	function prepSlider(){
		var b=[];
		$items.each(function(i,o){ $(o).css({'zIndex':5-i}); b.push('<b></b>') });
		$dots=$container.find('.ac-sl-bullets').html(b.join('')).find('b');
		$dots.eq(active).addClass('on');
	}

	function nextSlide(){
		if(active<num-1){
			$items.eq(active).fadeOut(options.speed);
			active++;
		}
		else{
			$items.eq(0).fadeIn(options.speed, function(){$items.css({opacity:1,display:'block'})});
			active=0;
		}
		$dots.removeClass('on').eq(active).addClass('on');
		doSlider();
	}

	function doSlider(){ timer=setTimeout(nextSlide,options.delay) }

	function stopSlider(){ clearTimeout(timer); timer=null }

	function doNav(){
		var $o=$(this),p=$o.index();
		if(p==active)return;
		stopSlider();
		$items.each(function(i,o){ if(i>=p)$(o).show(); else $(o).hide() });
		active=p;
		$dots.removeClass('on').eq(active).addClass('on');
		return false;
	}

	prepSlider();
	$container.hover( stopSlider, doSlider );
	$dots.click(doNav);
	doSlider();
};
$(function(){
	$( ".ac-slideshow" ).acSlider(); 
});

