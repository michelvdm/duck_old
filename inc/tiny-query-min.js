!function(){function t(t,n,e){t.addEventListener(n,e,S)}function n(t,n,e){for(var i=t[T];i--;)t[i][m][n](e);return t}function e(t,n){for(var e in n)t[e]=n[e];return t}function i(t,n){switch(n){case C:return t[n];default:return parseInt(getComputedStyle(t)[n])}}function r(t,n,e){switch(n){case C:t[n]=e;break;case"left":case"top":case"width":case"height":t.style[n]=e+"px";break;default:t.style[n]=e}}function o(t,n){for(var e in n)r(t,e,n[e])}function s(t){return!(null===t||void 0===t)}function u(t,n){for(var e=this,i=typeof t==x?n.querySelectorAll(t):[t],r=0,o=e[T]=i[T];o>r;r++)e[r]=i[r];s(e[0])||(e[T]=0)}var a=[],f=document,c="Attribute",l="get"+c,h="set"+c,d="remove"+c,v="add",p="block",m="classList",g="documentElement",y="toggle",w="innerHTML",T="length",b="none",A="preventDefault",q="remove",C="scrollTop",x="string",N="value",k=Math,L=!0,S=!1,E=window,D=E.$=function(t){return"function"!=typeof t?new u(t,f):void a.push(t)},I={t:function(){return(new Date).getTime()},fn:function(t){return.5-k.cos(t*k.PI)/2},q:function(t){t&&(clearTimeout(t),t=null)},s:function(t,n,o,s){var u,a=this,f={};a.q(t.T);for(u in n)f[u]=i(t,u);e(t,{A:a.t(),Z:o||800,s1:f,s2:n,S:function(){var n,e,i=a.t()-t.A;if(i<t.Z){n=a.fn(i/t.Z);for(e in t.s2)r(t,e,t.s1[e]+(t.s2[e]-t.s1[e])*n)}else{for(e in t.s2)r(t,e,t.s2[e]);a.q(t.T),s&&s()}}}),t.T=setInterval(t.S,10)}},M=400;D.fn=u.prototype={addClass:function(t){return n(this,v,t)},removeClass:function(t){return n(this,q,t)},toggleClass:function(t,e){return n(this,s(e)?e==L?v:q:y,t)},hasClass:function(t){for(var n=this,e=n[T];e--;)if(n[e][m].contains(t))return L;return S},attr:function(t,n){var e=this,i=e[T],r=s(n);if(r)for(;i--;)e[i][h](t,n);return r?e:e[0][l](t)},removeAttr:function(t){for(var n=this,e=[T];e--;)n[e][d](t)},html:function(t){var n=this,e=n[T],i=s(t);if(i)for(;e--;)n[e][w]=t;return i?n:n[0][w]},val:function(t){var n=this,e=n[T],i=s(t);if(i)for(;e--;)n[e][N]=t;return i?n:n[0][N]},eq:function(t){return new u(this[t])},on:function(n,e){for(var i=this,r=i[T];r--;)t(i[r],n,function(t){var n=e.apply(this);return n===S&&(t=t||E.event,t[A]?t[A]():t.returnValue=S),n});return i},scroll:function(t){return this.on("scroll",t)},click:function(t){return this.on("click",t)},hover:function(t,n){return this.on("mouseover",t).on("mouseout",n)},scrollTop:function(){return this[0][C]||this[0].scrollY||f[g][C]},width:function(){var t=this,n=t[0];return n==E?k.max(f[g].clientWidth,E.innerWidth||0):n.offsetWidth},animate:function(t,n,e){for(var i=this,r=i[T];r--;)I.s(i[r],t,n,e);return i},css:function(t,n){for(var e=this,i=e[T];i--;)o(e[i],t,n);return e},slideDown:function(t){var n,e,i=this,r=i[T];for(t=t||400,I.q(i.timer);r--;)n=i[r],o(n,{position:"absolute",visibility:"hidden",display:p}),n.style.height="auto",e=n.offsetHeight,o(n,{position:"static",visibility:"visible",height:0,overflow:"hidden"}),I.s(n,{height:e},t);return i},slideUp:function(t){var n=this,e=n[T];for(t=t||M;e--;)I.s(n[e],{height:0},t);return n.timer=setTimeout(function(){n.css({display:b})},t),n},fadeIn:function(t,n){return this.css({opacity:0,display:p}).animate({opacity:1},t||M,n)},fadeOut:function(t,n){return this.animate({opacity:0},t||M,n)},show:function(){return this.css({display:p,opacity:"1"})},hide:function(){return this.css({display:b})},parent:function(){return new u(this[0].parentNode)},find:function(t){return new u(t,this[0])},each:function(t){for(var n=this,e=n[T];e--;)t(e,n[e]);return n},index:function(){for(var t=this[0],n=t.parentNode.childNodes,e=0;e<n[T];e++)if(n[e]==t)return e;return-1},append:function(t){for(var n=this,e=n[T];e--;)n[e][w]+=t;return n}},t(f,"DOMContentLoaded",function(){for(var t in a)a[t]()})}();