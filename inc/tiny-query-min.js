!function(){function t(t,n,e){t.addEventListener(n,e,I)}function n(t,n,e){for(var r=t[T];r--;)t[r][y][n](e);return t}function e(t,n){for(var e in n)t[e]=n[e];return t}function r(t,n){switch(n){case A:return t[n];default:return parseInt(getComputedStyle(t)[n])}}function i(t,n,e){switch(n){case A:t[n]=e;break;case"left":case"top":case"width":case"height":t.style[n]=e+"px";break;default:t.style[n]=e}}function o(t,n){for(var e in n)i(t,e,n[e])}function s(t){return!(null===t||void 0===t)}function u(t,n){for(var e=this,r=typeof t==C?n.querySelectorAll(t):[t],i=0,o=e[T]=r[T];o>i;i++)e[i]=r[i];s(e[0])||(e[T]=0)}var f=[],a=document,c="Attribute",h="get"+c,l="set"+c,d="remove"+c,v="add",p="block",y="classList",g="documentElement",m="toggle",w="innerHTML",T="length",b="none",q="preventDefault",x="remove",A="scrollTop",C="string",E="value",S=Math,k=!0,I=!1,L=window,M=L.$=function(t){return"function"!=typeof t?new u(t,a):void f.push(t)},D={t:function(){return(new Date).getTime()},fn:function(t){return.5-S.cos(t*S.PI)/2},q:function(t){t&&(clearTimeout(t),t=null)},s:function(t,n,o,s){var u,f=this,a={};f.q(t.T);for(u in n)a[u]=r(t,u);e(t,{A:f.t(),Z:o||800,s1:a,s2:n,S:function(){var n,e,r=f.t()-t.A;if(r<t.Z){n=f.fn(r/t.Z);for(e in t.s2)i(t,e,t.s1[e]+(t.s2[e]-t.s1[e])*n)}else{for(e in t.s2)i(t,e,t.s2[e]);f.q(t.T),s&&s()}}}),t.T=setInterval(t.S,10)}},H=400;M.fn=u.prototype={addClass:function(t){return n(this,v,t)},removeClass:function(t){return n(this,x,t)},toggleClass:function(t,e){return n(this,s(e)?e==k?v:x:m,t)},hasClass:function(t){for(var n=this,e=n[T];e--;)if(n[e][y].contains(t))return k;return I},attr:function(t,n){var e=this,r=e[T],i=s(n);if(i)for(;r--;)e[r][l](t,n);return i?e:e[0][h](t)},removeAttr:function(t){for(var n=this,e=[T];e--;)n[e][d](t)},html:function(t){var n=this,e=n[T],r=s(t);if(r)for(;e--;)n[e][w]=t;return r?n:n[0][w]},val:function(t){var n=this,e=n[T],r=s(t);if(r)for(;e--;)n[e][E]=t;return r?n:n[0][E]},eq:function(t){return new u(this[t])},on:function(n,e){for(var r=this,i=r[T];i--;)t(r[i],n,function(t){var n=e.apply(this);return n===I&&(t=t||L.event,t[q]?t[q]():t.returnValue=I),n});return r},scroll:function(t){return this.on("scroll",t)},click:function(t){return this.on("click",t)},hover:function(t,n){return this.on("mouseover",t).on("mouseout",n)},scrollTop:function(){return this[0][A]||this[0].scrollY||a[g][A]},width:function(){var t=this,n=t[0];return n==L?S.max(a[g].clientWidth,L.innerWidth||0):n.offsetWidth},animate:function(t,n,e){for(var r=this,i=r[T];i--;)D.s(r[i],t,n,e);return r},css:function(t,n){for(var e=this,r=e[T];r--;)o(e[r],t,n);return e},slideDown:function(t){var n,e,r=this,i=r[T];for(t=t||400,D.q(r.timer);i--;)n=r[i],o(n,{position:"absolute",visibility:"hidden",display:p}),n.style.height="auto",e=n.offsetHeight,o(n,{position:"static",visibility:"visible",height:0,overflow:"hidden"}),D.s(n,{height:e},t);return r},slideUp:function(t){var n=this,e=n[T];for(t=t||H;e--;)D.s(n[e],{height:0},t);return n.timer=setTimeout(function(){n.css({display:b})},t),n},fadeIn:function(t,n){return this.css({opacity:0,display:p}).animate({opacity:1},t||H,n)},fadeOut:function(t,n){return this.animate({opacity:0},t||H,n)},show:function(){return this.css({display:p,opacity:"1"})},hide:function(){return this.css({display:b})},parent:function(){return new u(this[0].parentNode)},find:function(t){return new u(t,this[0])},each:function(t){for(var n=this,e=n[T];e--;)t(e,n[e]);return n},index:function(){for(var t=this[0],n=t.parentNode.childNodes,e=0;e<n[T];e++)if(n[e]==t)return e;return-1},append:function(t){for(var n=this,e=n[T];e--;)n[e][w]+=t;return n}},e(M,{ieVer:function(){var t=navigator.userAgent;if(!/Trident\/[567]\b/.test(t))return-1;var n=RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");return n.exec(t)?parseFloat(RegExp.$1):11},get:function(t,n,e){var r=new XMLHttpRequest;r.onreadystatechange=function(){4==r.readyState&&200==r.status&&e(r.responseText)},r.open("GET",t,k),r.send(n||I)}}),t(a,"DOMContentLoaded",function(){for(var t in f)f[t]()})}();