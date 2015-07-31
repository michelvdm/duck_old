/* tiny query v.0.2 */

'use strict';
!function(){

var A=[],
	D=document,
	aA='Attribute',
	aG='get'+aA,
	aS='set'+aA,
	aR='remove'+aA,
	cA='add',
	cB='block',
	cC='classList',
	cD='documentElement',
	cG='toggle',
	cH='innerHTML',
	cL='length',
	cN='none',
	cP='preventDefault',
	cR='remove',
	cS='scrollTop',
	cT='string',
	cV='value',
	M=Math,
	T=!0,
	F=!1,
	W=window,
	J=W.$=function(a){if(typeof a=='function')A.push(a);else return new O(a,D)},
	AN={
		t:function(){return new Date().getTime()},
		fn:function(a){return(0.5-M.cos(a*M.PI)/2)},
		q:function(a){if(a){clearTimeout(a);a=null}},
		s:function(o,a,tm,f){
			var m=this,s1={},p;m.q(o.T);for(p in a)s1[p]=getCss(o,p);
			extend(o,{A:m.t(),Z:tm||800,s1:s1,s2:a,S:function(){
					var t=m.t()-o.A,q,p;
					if(t>=o.Z){for(p in o.s2)setCss(o,p,o.s2[p]);m.q(o.T);if(f)f()}
					else{q=m.fn(t/o.Z);for(p in o.s2)setCss(o,p,o.s1[p]+(o.s2[p]-o.s1[p])*q)}
				}
			});
			o.T=setInterval(o.S,10);
		}
	}
;

function addEvent(a,b,c){a.addEventListener(b,c,F)}
function doClass(a,b,c){var i=a[cL];while(i--)a[i][cC][b](c);return a}
function extend(a,b){for(var o in b)a[o]=b[o];return a}
function getCss(o,a){switch(a){case cS:return o[a];default:return parseInt(getComputedStyle(o)[a])}}
function setCss(o,a,v){switch(a){case cS:o[a]=v;break;case'left':case'top':case'width':case'height':o.style[a]=v+'px';break;default:o.style[a]=v}}
function setCssMulti(a,b){for(var p in b)setCss(a,p,b[p])}
function isSet(a){return!(a===null||typeof a=='undefined')}

function O(a,b){
	var m=this,o=(typeof a==cT)?b.querySelectorAll(a):[a],i=0,l=m[cL]=o[cL];
	for(;i<l;i++)m[i]=o[i];
	if(!isSet(m[0]))m[cL]=0;
}
J.fn=O.prototype={
	addClass:function(a){return doClass(this,cA,a)},
	removeClass:function(a){return doClass(this,cR,a)},
	toggleClass:function(a,b){return doClass(this,isSet(b)?b==T?cA:cR:cG,a)},
	hasClass:function(a){var m=this,i=m[cL];while(i--)if(m[i][cC].contains(a))return T;return F},
	attr:function(a,b){var m=this,i=m[cL],q=isSet(b);if(q)while(i--)m[i][aS](a,b);return q?m:m[0][aG](a)},
	removeAttr:function(a){var m=this,i=[cL];while(i--)m[i][aR](a)},
	html:function(a){var m=this,i=m[cL],q=isSet(a);if(q)while(i--)m[i][cH]=a;return q?m:m[0][cH]},
	val:function(a){var m=this,i=m[cL],q=isSet(a);if(q)while(i--)m[i][cV]=a;return q?m:m[0][cV]},
	eq:function(a){return new O(this[a])},
	on:function(a,b){var m=this,i=m[cL];while(i--)addEvent(m[i],a,function(e){var q=b.apply(this);if(q===F){e=e||W.event;if(e[cP])e[cP]();else e.returnValue=F}return q});return m},
	scroll:function(f){return this.on('scroll',f)},
	click:function(f){return this.on('click',f)},
	hover:function(f,f2){return this.on('mouseover',f).on('mouseout',f2)},
	scrollTop:function(){return this[0][cS]||this[0].scrollY||D[cD][cS]},
	width:function(){var m=this,o=m[0];return (o==W)?M.max(D[cD].clientWidth,W.innerWidth||0):o.offsetWidth},
	animate:function(a,b,c){var m=this,i=m[cL];while(i--)AN.s(m[i],a,b,c);return m},
	css:function(a,b){var m=this,i=m[cL];while(i--)setCssMulti(m[i],a,b);return m},
	slideDown:function(a){
		var m=this,i=m[cL],p,h;
		a=a||400;
		AN.q(m.timer);
		while(i--){
			p=m[i];
			setCssMulti(p,{position:'absolute',visibility:'hidden',display:cB});
			p.style.height='auto';
			h=p.offsetHeight;
			setCssMulti(p,{position:'static',visibility:'visible',height:0,overflow:'hidden'});
			AN.s(p,{height:h},a);
		}
		return m
	},
	slideUp:function(a){var m=this,i=m[cL];a=a||400;while(i--)AN.s(m[i],{height:0},a);m.timer=setTimeout(function(){m.css({display:cN})},a);return m},
	fadeIn:function(a,f){return this.css({opacity:0,display:cB}).animate({opacity:1},a||400,f)},
	fadeOut:function(a,f){return this.animate({opacity:0},a||400,f)},
	show:function(){return this.css({display:cB,opacity:'1'})},
	hide:function(){return this.css({display:cN})},
	parent:function(){return new O(this[0].parentNode)},
	find:function(a){return new O(a,this[0])},
	each:function(f){var m=this,i=m[cL];while(i--)f(i,m[i]);return m},
	index:function(){var o=this[0],p=o.parentNode.childNodes,i=0;for(;i<p[cL];i++)if(p[i]==o)return i;return -1},
	append:function(a){var m=this,i=m[cL];while(i--)m[i][cH]+=a;return m}
}
addEvent(D,'DOMContentLoaded',function(){for(var p in A)A[p]()})}();

/*! svg4everybody v1.0.0 | github.com/jonathantneal/svg4everybody */
!function(e,t,n,o,i){function r(t,n){if(n){var o=n.getAttribute("viewBox"),i=e.createDocumentFragment(),r=n.cloneNode(!0);for(o&&t.setAttribute("viewBox",o);r.childNodes.length;)i.appendChild(r.childNodes[0]);t.appendChild(i)}}function a(){var t=this,n=e.createElement("x"),o=t.s;n.innerHTML=t.responseText,t.onload=function(){o.splice(0).map(function(e){r(e[0],n.querySelector("#"+e[1].replace(/(\W)/g,"\\$1")))})},t.onload()}function d(){for(var i;i=t[0];){var s=i.parentNode,l=i.getAttribute("xlink:href").split("#"),u=l[0],c=l[1];if(s.removeChild(i),u.length){var g=o[u]=o[u]||new XMLHttpRequest;g.s||(g.s=[],g.open("GET",u),g.onload=a,g.send()),g.s.push([s,c]),4===g.readyState&&g.onload()}else r(s,e.getElementById(c))}n(d)}i&&d()}(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/Trident\/[567]\b/.test(navigator.userAgent)||/Edge\/12/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537);

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
