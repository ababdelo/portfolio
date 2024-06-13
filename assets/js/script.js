"use strict";const elementToggleFunc=function(e){e.classList.toggle("active")},sidebar=document.querySelector("[data-sidebar]"),sidebarBtn=document.querySelector("[data-sidebar-btn]");sidebarBtn.addEventListener("click",function(){elementToggleFunc(sidebar)});const testimonialsItem=document.querySelectorAll("[testimonials-data-item]"),modalContainer=document.querySelector("[testimonials-data-modal-container]"),modalCloseBtn=document.querySelector("[testimonials-data-modal-close-btn]"),overlay=document.querySelector("[testimonials-data-overlay]"),modalImg=document.querySelector("[testimonials-data-modal-img]"),modalTitle=document.querySelector("[testimonials-data-modal-title]"),modalText=document.querySelector("[testimonials-data-modal-text]"),testimonialsModalFunc=function(){modalContainer.classList.toggle("active"),overlay.classList.toggle("active")};for(let i=0;i<testimonialsItem.length;i++)testimonialsItem[i].addEventListener("click",function(){modalImg.src=this.querySelector("[testimonials-data-avatar]").src,modalImg.alt=this.querySelector("[testimonials-data-avatar]").alt,modalTitle.innerHTML=this.querySelector("[testimonials-data-title]").innerHTML,modalText.innerHTML=this.querySelector("[testimonials-data-text]").innerHTML,testimonialsModalFunc()});modalCloseBtn.addEventListener("click",testimonialsModalFunc),overlay.addEventListener("click",testimonialsModalFunc);const select=document.querySelector("[data-select]"),selectItems=document.querySelectorAll("[data-select-item]"),selectValue=document.querySelector("[data-selecct-value]"),filterBtn=document.querySelectorAll("[data-filter-btn]");select.addEventListener("click",function(){elementToggleFunc(this)});for(let i=0;i<selectItems.length;i++)selectItems[i].addEventListener("click",function(){let e=this.innerText.toLowerCase();selectValue.innerText=this.innerText,elementToggleFunc(select),filterFunc(e)});const filterItems=document.querySelectorAll("[data-filter-item]"),filterFunc=function(e){for(let t=0;t<filterItems.length;t++)"42cursus"===e?filterItems[t].classList.add("active"):e===filterItems[t].dataset.category?filterItems[t].classList.add("active"):filterItems[t].classList.remove("active")};let lastClickedBtn=filterBtn[0];for(let i=0;i<filterBtn.length;i++)filterBtn[i].addEventListener("click",function(){let e=this.innerText.toLowerCase();selectValue.innerText=this.innerText,filterFunc(e),lastClickedBtn.classList.remove("active"),this.classList.add("active"),lastClickedBtn=this});const form=document.querySelector("[data-form]"),formInputs=document.querySelectorAll("[data-form-input]"),formBtn=document.querySelector("[data-form-btn]");for(let i=0;i<formInputs.length;i++)formInputs[i].addEventListener("input",function(){form.checkValidity()?formBtn.removeAttribute("disabled"):formBtn.setAttribute("disabled","")});const navigationLinks=document.querySelectorAll("[data-nav-link]"),pages=document.querySelectorAll("[data-page]");for(let i=0;i<navigationLinks.length;i++)navigationLinks[i].addEventListener("click",function(){for(let e=0;e<pages.length;e++)this.innerHTML.toLowerCase()===pages[e].dataset.page?(pages[e].classList.add("active"),navigationLinks[e].classList.add("active"),window.scrollTo(0,0)):(pages[e].classList.remove("active"),navigationLinks[e].classList.remove("active"))});