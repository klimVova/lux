window.menu = (function () {
   function init() {
       const menu = document.querySelector('.header__burger')
       const body = document.body
       const header = document.querySelector('.header__menu')
       menu.addEventListener('click', function() {
           menu.classList.toggle('active')
           body.classList.toggle('active')
           header.classList.toggle('active')
       })
   }
   
   return {
       init: init
   }
})() 