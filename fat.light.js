/*
 FAT v0.6.3
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/fat
*/
'use strict';(function(k,f,l){var m;(m=l.define)&&m.amd?m([],function(){return f}):(m=l.modules)?m[k.toLowerCase()]=f:"object"===typeof exports?module.exports=f:l[k]=f})("Fat",function(){function k(a,c,b,e,d,h,B,f,t,v,w,p){this.l=a;this.B=a.m;this.style=c;this.G=c.replace(/([A-Z])/g,"-$1").toLowerCase();this.b=e;this.c=d;this.h=e;this.H=h;this.s=B;this.duration=f;this.f=t;this.ease=m(t)?[]:null;this.time=0;this.j=v;this.i=w;this.F=b;this.a=p;this.D="px"!==h}function f(){this.id=++C;this.stack=[];
this.u=l.bind(this);this.exec=this.g=0}function l(a){var c=this.stack.length;if(c){this.exec=requestAnimationFrame(this.u);var b=!1;if(c)for(var e=0;e<c;e++){var d=this.stack[e];d&&(b=!0,d.C(this,a)||(this.stack[e]=null))}this.g=a;b||this.destroy()}}function m(a){return"string"===typeof a}var x=Math.max(screen.width,screen.height),q=parseFloat,C=0,u=k.prototype;u.animate=function(a,c){var b=this.b===this.c||!1,e=this.l;a=this.time+=a-(c||a);c=a>=this.duration;if(!b)if(c)var d=this.c;else this.ease?
d=this.ease.length?(this.c-this.b)*this.ease[x/this.duration*a+.5>>0]/1E4:(this.c-this.b)*a/this.duration:d=1===this.f.length?this.f(a/this.duration):this.f(a,this.b,this.c,this.duration),d=this.b+d,d=this.D?(d*x+.5>>0)/x:d+.5>>0;var h=this.style;b||this.h===d||(this.h=d,d+=this.H,"custom"!==h&&this.A(d));this.i&&this.i.call(e,c?1:a/this.duration,d);c&&(this.time=-1,this.j&&this.j.call(e))};u.C=function(a,c){if(-1===this.time)this.l[this.F]=null;else{var b=c-a.g;if(this.a)if("view"===this.a)if(b=
this.l.getBoundingClientRect(),0<=b.top&&b.bottom<=window.innerHeight)this.a=0;else return!0;else{if(0<(this.a-=b))return!0;this.a=0}this.animate(c,a.g);return!0}};u.A=function(a){var c=this.B,b=this.G;this.s?c.setProperty(b,a,"important"):c.setProperty(b,a)};var r=f.prototype;r.w=function(a,c,b,e,d,h,f,y,t,v,w,p){if("custom"===c)e=e||0;else{var n=a.m||(a.m=a.style);e=(e="undefined"===typeof e?n[c]:e)?e:(a.o||(a.o=getComputedStyle(a)))[c]}n=""+e;"auto"===n&&(n="0");e=q(n);if(m(d)){var g=d;d=q(d);
h||(h=g.substring((""+d).length))}h||(h=n.substring((""+e).length)||"");c=new k(a,c,b,e,d,h,f,y,t,v,w,p,!1,!1);this.stack[this.stack.length]=c;a[b]=c};r.animate=function(a,c,b,e){if(a&&c){b?"function"===typeof b&&(e=b,b={}):b={};m(a)?a=document.querySelectorAll(a):a.length||(a=[a]);var d=b.delay,h=b.duration||400,f=b.ease||"",y=Object.keys(c),t=y.length;e=e||b.callback||!1;var v=b.step,w=b.force;b=b.init;for(var p=0;p<t;p++){var n=y[p],g=c[n],k=void 0,l=void 0;"object"===typeof g&&(d=g.delay||d,h=
g.duration||h,f=g.ease||f,k=g.from,l=g.unit,g=g.to);g.constructor===Array&&(k=g[0],l=g[2],g=g[1]);for(var q=p===t-1,u="_fat_"+n+this.id,r=0,x=a.length;r<x;r++){var z=a[r];b&&0===p&&(z.o=null);var A=!b&&z[u];A?A.v(k,g,w,h,f,q&&e,q&&v,d):this.w(z,n,u,k,g,l,w,h,f,q&&e,q&&v,d)}}this.exec||(this.exec=requestAnimationFrame(this.u))}return this};r.destroy=function(){this.exec&&(this.exec=0,this.stack=[],this.g=0);return this};r.create=function(a){return new f(a)};u.v=function(a,c,b,e,d,f,k,l){"undefined"===
typeof a?a=this.h:a=q(a);m(c)&&(c=q(c));this.b=a;this.c=c;this.duration=e;this.time=0;this.s=b;this.f!==d&&(this.ease=m(d)?[]:null,this.f=d);this.j=f;this.i=k;this.a=l};return new f}(),this);
