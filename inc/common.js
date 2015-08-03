'use strict';

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

/* responsive menu */
$(function(){
	$('.bb-menu-link').click(function(){return !$('aside').toggleClass('open')});
});

/* litebox */
$(function(){
	var $items=$('.litebox figure');if(!$items.length)return;
	var list=[],$box=$('.mv-litebox'),$img=$box.find('img'),$txt=$box.find('div'),speed=500,active=-1;

	function prepItems(i,o){
		var $o=$(o),link=$o.find('a').attr('href'),im=new Image;
		im.src=link;
		list[i]={link:link,img:im,txt:$o.find('figcaption').html()};
		o.index=i;
	}

	function setImg(i){
		i=(i<list.length)?(i<0)?0:i:0;
		var p=list[i],ww=0,s=(active>-1)?speed:0;
		active=i;
		if(s)$img.fadeOut(s),$txt.html('');
		setTimeout(function(){$img.attr('src',p.link).hide().fadeIn(s);$txt.html(p.txt)},s);
	}
	function showBox(){
		var p=this.index*1,s=speed;
		$img.hide();
		$txt.html('');
		$box.fadeIn(s);
		setTimeout(function(){setImg(p)},s);
		return false;
	}
	function doAction(){
		var a=active,s=speed;
		switch(this.className.slice(6)){
		case'prev':setImg(a-1);break;
		case'next':setImg(a+1);break;
		default:
			active=-1;
			$box.fadeOut(s);
			setTimeout(function(){$box.hide()},s);
		}
		return false;
	}
	$items.each(prepItems).click(showBox);
	$box.find('span a').click(doAction);
});
