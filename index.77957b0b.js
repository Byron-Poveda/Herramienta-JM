!function(){var t=document.querySelector(".carousels__btn--left"),e=document.querySelector(".carousels__btn--right"),n=document.querySelector(".carousels"),r=document.querySelectorAll(".carousels__section"),l=0,s=0,c=100/r.length;function o(){if(s>=r.length-1)return l=0,s=0,n.style.transform="translateX(".concat(l,"%)"),void(n.style.transition="none");s+=1,l-=c,n.style.transform="translateX(".concat(l,"%)"),n.style.transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"}setInterval((function(){o()}),3e3),t.addEventListener("click",(function(){if(0===s)return s=r.length-1,l=c*(r.length-1)*-1,n.style.transform="translateX(".concat(l,"%)"),void(n.style.transition="none");s-=1,l+=c,n.style.transform="translateX(".concat(l,"%)"),n.style.transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"})),e.addEventListener("click",o)}();
//# sourceMappingURL=index.77957b0b.js.map