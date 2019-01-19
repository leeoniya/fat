/*
 FAT v0.6.5
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/fat
*/
'use strict';(function(A,B,w){var p;(p=w.define)&&p.amd?p([],function(){return B}):(p=w.modules)?p[A.toLowerCase()]=B:"object"===typeof exports?module.exports=B:w[A]=B})("Fat",function(){function A(a,b,c,d,e,h,f,g,k,x,D,S,m,r,p,t,l,q,n){this.b=a;this.m=a.v;this.style=b;this.H=b.replace(/([A-Z])/g,"-$1").toLowerCase();this.C=d;this.D=e;this.i=d;this.u=h;this.g=f;this.duration=g;this.o=k;this.ease=J(k)?[]:null;this.time=0;this.l=x;this.j=D;this.G=c;this.a=S;this.F=q?"%"===h||-1!==b.indexOf("A"):"px"!==
h;q&&(this.h=q,this.s=n);t&&(this.transform=t)}function B(a,b,c){var d=c||-1,e;if("#"===a[0])if(a=a.toLowerCase(),4===a.length){c=y[(e=a[1])+e];var h=y[(e=a[2])+e];var f=y[(e=a[3])+e]}else c=y[a[1]+a[2]],h=y[a[3]+a[4]],f=y[a[5]+a[6]];else e=G(a,"(",")").split(","),c=parseInt(e[0],10),h=parseInt(e[1],10),f=parseInt(e[2],10),3<e.length&&(d=z(e[3])),-1!==a.indexOf("hsl")&&(0===h?h=f=a=f:(a=.5>f?f*(1+h):f+h-f*h,e=2*f-a,h=w(e,a,c+1/3),f=w(e,a,c),a=w(e,a,c-1/3)),c=255*h+.5>>0,h=255*f+.5>>0,f=255*a+.5>>
0);a={};a[b+"R"]=c;a[b+"G"]=h;a[b+"B"]=f;-1!==d&&(a[b+"A"]=d);return a}function w(a,b,c){0>c?c+=1:1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}function p(){this.id=++T;this.stack=[];this.B=U.bind(this);this.exec=this.c=0}function U(a){var b=this.stack.length;if(b){this.exec=requestAnimationFrame(this.B);this.c||(this.c=a);var c=!1;if(b)for(var d=0;d<b;d++){var e=this.stack[d];e&&(c=!0,e.L(this,a)||(this.stack[d]=null))}this.c=a;c||this.destroy()}}function J(a){return"string"===
typeof a}function H(a){return"undefined"===typeof a}function M(a,b,c){if("custom"===b)return c||0;var d=a.v||(a.v=a.style);return(c=H(c)?d[b]:c)?c:(a.w||(a.w=getComputedStyle(a)))[b]}function O(a,b,c,d){if("none"===b)return b=a.substring(0,a.length-1),c[a]="scale"===b?1:0,d&&(d[d.length]=b),c;-1!==b.indexOf("matrix")&&(b=G(b,"(",")").split(","),b=a+"("+(parseFloat(b[V[a]])||"")+")");a=b.replace(/, /g,",").split(" ");b={};for(var e=0,h=0;h<a.length;h++){var f=a[h],g=G(f,"(");if(g){f=G(f,"(",")").split(",");
var k=f.length;2<k&&(g=g.replace("3d",""),c[g+"Z"]=f[2]);1<k?(c[g+"X"]=f[0],c[g+"Y"]=f[1]):(c[g]=f[0],g=g.substring(0,g.length-1));b[g]||(d&&(d[e++]=g),b[g]=1)}}return c}function W(a,b,c){var d=a.f;if(d)var e=a.A;else a.f=d={},a.A=e=[];if(!d||H(d[b]))a=c||M(a,P||"transform"),O(b,a,d,e);return d[b]}function X(a,b,c,d){var e="_"+d,h=a[e];h||(c=c||M(a,d),a[e]=h=B(c,d,1));return h[b]}function G(a,b,c){var d=a.indexOf(b);return-1!==d?c?a.substring(d+b.length,a.indexOf(c)):a.substring(0,d):""}function K(a,
b,c,d){d?a.setProperty(b,c,"important"):a.setProperty(b,c)}var N=Math.max(screen.width,screen.height),r=function(){var a=getComputedStyle(document.body);if(H(a.transform))for(var b=["webkit","moz","ms","o"],c=0,d;c<b.length;c++){if(!H(a[(d=b[c])+"Transform"]))return d}else return""}(),P=r&&r+"Transform",Y=r&&"-"+P.replace(/([A-Z])/g,"-$1").toLowerCase(),z=parseFloat,T=0;r=A.prototype;r.animate=function(a,b){var c=this.C,d=this.D,e=this.duration,h=this.b,f=c===d||!1;a=this.time+=a-(b||a);b=a>=e;if(!f)if(b)var g=
d;else{var k;if(k=this.ease)g=k.length?(d-c)*k[N/e*a+.5>>0]/1E4:(d-c)*a/e;else if(k=this.o)g=1===k.length?k(a/e):k(a,c,d,e);g=c+g;g=this.F?(g*N+.5>>0)/N:g+.5>>0}c=this.style;f||this.i===g||(this.i=g,this.transform?h.f[c]=g+this.u:this.h?h["_"+this.s][c]=g:"custom"!==c&&this.M(g+=this.u));c===this.transform?g=this.I():c===this.h&&(g=this.N(this.s));this.j&&this.j.call(h,b?1:a/e,g);b&&(this.time=-1,this.l&&this.l.call(h))};r.L=function(a,b){if(-1===this.time)this.b[this.G]=null;else{var c=b-a.c;if(this.a)if("view"===
this.a)if(c=this.b.getBoundingClientRect(),0<=c.top&&c.bottom<=window.innerHeight)this.a=0;else return!0;else{if(0<(this.a-=c))return!0;this.a=0}this.animate(b,a.c);return!0}};r.M=function(a){K(this.m,this.H,a,this.g)};var Q=function(a){function b(c,b){a[c]=-b;a[c+"R"]=b;a[c+"G"]=b;a[c+"B"]=b;a[c+"A"]=b}b("color",1);b("backgroundColor",2);b("borderColor",3);return a}({}),R=function(a){function b(c,b){a[c]=b;a[c+"X"]=b;a[c+"Y"]=b;a[c+"Z"]=b;a[c+"3d"]=b}b("translate",1);b("scale",2);b("rotate",3);b("skew",
4);return a}({}),V={scaleX:0,skewY:1,skewX:2,scaleY:3,translateX:4,translateY:5};var y={};var F=Array(255);for(var m=0;256>m;m++){var E=m.toString(16);E.length%2&&(E="0"+E);y[E]=m;F[m]=E}r.I=function(){for(var a=this.b.f,b=this.m,c=this.b.A,d="",e=0,h=c.length;e<h;e++){var f=c[e],g="scale"===f?1:0,k=a[f+"X"],x=a[f+"Y"],D=a[f+"Z"];if(k||x||D)"rotate"===f&&(k&&(d+=f+"X("+(k||g)+") "),x&&(d+=f+"Y("+(x||g)+") ")),D&&z(D)!==g?d="rotate"===f?d+(f+"Z("+(D||g)+") "):d+(f+"3d("+(k||g)+","+(x||g)+","+D+") "):
"rotate"!==f&&(d+=f+"("+(k||g)+","+(x||g)+") ")}K(b,Y||"transform",d,this.g);return a};r.N=function(a){var b=this.b["_"+a],c=this.m,d=a.replace("C","-c"),e=b[a+"R"]||0,h=b[a+"G"]||0,f=b[a+"B"]||0;a=b[a+"A"];"%"===this.u&&(e=2.55*e+.5>>0,h=2.55*h+.5>>0,f=2.55*f+.5>>0,a&&(a/=100));K(c,d,1===a||H(a)?"#"+F[e]+F[h]+F[f]:"rgba("+e+","+h+","+f+","+a+")",this.g);return b};m=p.prototype;m.K=function(a,b,c,d,e,h,f,g,k,x,D,m,r,p,B){var t=""+(r?W:p?X:M)(a,b,d,B);"auto"===t&&(t="0");d=z(t);if(J(e)){var l=e;e=
z(e);h||(h=l.substring((""+e).length))}h||(h=t.substring((""+d).length)||"");b=new A(a,b,c,d,e,h,f,g,k,x,D,m,!1,!1,!1,r,void 0,p,B);this.stack[this.stack.length]=b;a[c]=b};m.animate=function(a,b,c,d){c?"function"===typeof c&&(d=c,c={}):c={};J(a)?a=document.querySelectorAll(a):a.length||(a=[a]);var e=c.delay,h=c.duration||400,f=c.ease||"",g=Object.keys(b),k=g.length;d=d||c.callback||!1;var x=c.step,r=c.force;c=c.init;for(var m,p,w,y,t=k;0<t--;){var l=g[t];if("transform"===l){m=O(l,b[l],{});l=Object.keys(m);
for(var q=0,n=l.length;q<n;q++){var v=l[q];g[k++]=v;b[v]=m[v]}m=l[l.length-1]}else if(!m&&R[l])m=l;else if(q=Q[l])0>q&&(n=b[l],"object"===typeof n&&(n=n.to),v=B(n,l),g[k++]=n=l+"R",b[n]=v[n],g[k++]=n=l+"G",b[n]=v[n],g[k++]=n=l+"B",b[n]=v[n],H(v=v[n=l+"A"])?l+="B":(g[k++]=n,b[n]=v,l=n),q*=-1),p||1!==q?w||2!==q?y||3!==q||(y=l):w=l:p=l}for(t=0;t<k;t++){var z=v=n=q=void 0,L=g[t],u=b[L],A=void 0,E=void 0;"object"===typeof u&&(e=u.delay||e,h=u.duration||h,f=u.ease||f,A=u.from,E=u.unit,u=u.to);if("transform"!==
L){l=R[L]&&m;var C=Q[L];if(C){if(0>C)continue;1===C?(q=p,z="color"):2===C?(n=w,z="backgroundColor"):3===C&&(v=y,z="borderColor")}u.constructor===Array&&(A=u[0],E=u[2],u=u[1]);C=t===k-1;for(var G="_fat_"+L+this.id,F=0,M=a.length;F<M;F++){var I=a[F];c&&0===t&&(I.w=null,m?I.f=null:p?I.R=null:w?I.O=null:y&&(I.P=null));var K=!c&&I[G];K?K.J(A,u,r,h,f,C&&d,C&&x,e,l,q||n||v,z):this.K(I,L,G,A,u,E,r,h,f,C&&d,C&&x,e,l,q||n||v,z)}}}this.exec||(this.exec=requestAnimationFrame(this.B));return this};m.destroy=function(){this.exec&&
(this.exec=0,this.stack=[],this.c=0);return this};m.create=function(a){return new p(a)};m.transform=function(a,b,c,d){J(b)&&(b={transform:b});return this.animate(a,b,c,d)};r.J=function(a,b,c,d,e,h,f,g,k,m,p){H(a)?a=this.i:a=z(a);J(b)&&(b=z(b));this.C=a;this.D=b;this.duration=d;this.time=0;this.g=c;this.o!==e&&(this.ease=J(e)?[]:null,this.o=e);this.l=h;this.j=f;this.a=g;k&&(this.transform=k);m&&(this.h=m,this.s=p)};return new p}(),this);
