(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();let p="Badger Dodger",f=0,u=!1,c=0;function k(e){for(let t=1;t<4;t++)e[t].image="\u{1F9A1}",e[t].y=0,e[t].x=300*t}function A(e,t,a,i,o,n,r,b){if(u)return b&&(c=0,u=!1,e[0].y=150),c;r?(e[0].x+=a*500,e[0].flip=!0):n&&(e[0].x-=a*500,e[0].flip=!1),n||r?e[0].y>0?e[0].image="\u{1F3C3}\u200D\u2642\uFE0F":e[0].image=Math.round(t*10)%2?"\u{1F9CD}\u200D\u2642\uFE0F":"\u{1F3C3}\u200D\u2642\uFE0F":e[0].image="\u{1F9CD}\u200D\u2642\uFE0F",e[0].x<0&&(e[0].x=0),e[0].x>750&&(e[0].x=750),i&&e[0].y==0&&(f=10),e[0].y+=f,e[0].y>0?f=f-.5:(f=0,e[0].y=0);for(let l=1;l<4;l++)e[l].x-=a*(100+30*l+10*c),e[l].x<-50&&(e[l].x=800+Math.random()*400,c++),e[l].y=Math.sin(20*t+10*l);if(!u)for(let l=1;l<4;l++)Math.abs(e[l].x-e[0].x)<10&&e[0].y<30&&(u=!0,e[0].image="\u2620\uFE0F");return c}document.querySelector("#name").innerText=p;let m=[{image:"?",x:0,y:0,flip:!1},{image:"?",x:0,y:0,flip:!1},{image:"?",x:0,y:0,flip:!1},{image:"?",x:0,y:0,flip:!1}],y,g,s,x,w;document.onkeyup=document.onkeydown=function(e){let t=e.type=="keydown";switch(e.key){case"ArrowUp":y=t;break;case"ArrowDown":g=t;break;case"ArrowLeft":s=t;break;case"ArrowRight":x=t;break;case" ":w=t;break}};let T=document.querySelector("#score > span"),M=document.querySelectorAll("#app > div.sprite"),q=new Date().getTime(),d=new Date().getTime();function h(){let e=new Date().getTime(),t=(e-d)/1e3,a=(e-q)/1e3;d=e;for(let o=0;o<m.length;o++){let n=M[o],r=m[o];n.innerText=r.image,n.style.left=r.x+"px",n.style.bottom=r.y+"px",n.style.transform=r.flip?"scale(-1, 1)":""}let i=A(m,a,t,y,g,s,x,w);T.innerText=i,requestAnimationFrame(h)}k(m);requestAnimationFrame(h);