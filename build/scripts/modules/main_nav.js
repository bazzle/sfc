const header = document.querySelector('header');
const menu = document.getElementById('menu-main');
const menuItems = menu.querySelectorAll('.menu-item');

menuItems.forEach( (i) => {
   i.addEventListener('mouseenter',() => {
       console.log('yey');
   })
});

