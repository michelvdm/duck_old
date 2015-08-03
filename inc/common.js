
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

$(function(){
	$('.bb-menu-link').click(function(){return !$('aside').toggleClass('open')});
});

/* litebox */
$(function(){
	var $items=$('.litebox figure'),list=[],$box=$('.mv-litebox'),speed=500,active=-1;if(!$items.length)return;
	function prepItems(i,o){var $o=$(o),link=$o.find('a').attr('href'),q={link:link,img:new Image,txt:$o.find('figcaption').html()};q.img.src=link;list[i]=q;o.index=i}
	function setImg(i){
		i=(i<list.length)?(i<0)?0:i:0;
		var p=list[i],ww=0;
		if(active>-1)$box.find('img').fadeOut(speed),$box.find('div').html(''),ww=speed;
		active=i;
		setTimeout(function(){$box.find('img').attr('src',p.link).css({display:'none'}).fadeIn(speed);$box.find('div').html(p.txt)},ww);
	}
	function showBox(){var p=this.index*1;$('.mv-litebox').fadeIn(speed);setTimeout(function(){setImg(p)},speed);return false}
	function doAction(){
		switch(this.className.slice(6)){
			case'close':$box.fadeOut(speed);setTimeout(function(){$box.css({display:'none'})},speed);break;
			case'prev':setImg(active-1);break;
			default:setImg(active+1);
		}
		return false;
	}

	$items.each(prepItems).click(showBox);
	$box.find('span a').click(doAction);
});
