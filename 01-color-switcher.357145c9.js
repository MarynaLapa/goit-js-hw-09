const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",""),t.removeAttribute("disabled"),clearTimeout(d)}));let d=null;
//# sourceMappingURL=01-color-switcher.357145c9.js.map
