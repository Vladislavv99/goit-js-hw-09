const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>{a(),d=setInterval(a,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(()=>{clearInterval(d),d=null,t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.21f9d25b.js.map
