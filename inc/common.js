'use strict';

/*! svg4everybody v1.0.0 | github.com/jonathantneal/svg4everybody */
!function(e,t,n,o,i){function r(t,n){if(n){var o=n.getAttribute("viewBox"),i=e.createDocumentFragment(),r=n.cloneNode(!0);for(o&&t.setAttribute("viewBox",o);r.childNodes.length;)i.appendChild(r.childNodes[0]);t.appendChild(i)}}function a(){var t=this,n=e.createElement("x"),o=t.s;n.innerHTML=t.responseText,t.onload=function(){o.splice(0).map(function(e){r(e[0],n.querySelector("#"+e[1].replace(/(\W)/g,"\\$1")))})},t.onload()}function d(){for(var i;i=t[0];){var s=i.parentNode,l=i.getAttribute("xlink:href").split("#"),u=l[0],c=l[1];if(s.removeChild(i),u.length){var g=o[u]=o[u]||new XMLHttpRequest;g.s||(g.s=[],g.open("GET",u),g.onload=a,g.send()),g.s.push([s,c]),4===g.readyState&&g.onload()}else r(s,e.getElementById(c))}n(d)}i&&d()}(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/Trident\/[567]\b/.test(navigator.userAgent)||/Edge\/12/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537);

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
