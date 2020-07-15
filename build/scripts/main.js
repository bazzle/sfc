(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./modules/global_variables.js");

require("./modules/menu_trigger.js");

require("./modules/main_nav.js");

},{"./modules/global_variables.js":2,"./modules/main_nav.js":3,"./modules/menu_trigger.js":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mq_small = void 0;
var mq_small = window.matchMedia("(max-width:560px)");
exports.mq_small = mq_small;

},{}],3:[function(require,module,exports){
"use strict";

var header = document.querySelector('header');
var menu = document.getElementById('menu-main');
var menuItems = menu.querySelectorAll('.header__menu__item');
console.log('ee');
menuItems.forEach(function (i) {
  var menuitem = i;
  var mainlink = i.querySelector('.header__menu__item__link');
  var dd = i.querySelector('.dropdown');
  menuitem.addEventListener('mouseenter', function () {
    menuitem.classList.add('link-active');
  });
  menuitem.addEventListener('mouseleave', function () {
    menuitem.classList.remove('link-active');
  });
});

},{}],4:[function(require,module,exports){
"use strict";

// menu trigger -------------------------------------------------
var triggermenu = document.querySelector('.trigger-menu');
var menu = document.querySelector('.mobile-menu');
var isopen = false;

var menu_open = function menu_open() {
  menu.setAttribute('aria-pressed', true);
  isopen = true;
  menu.classList.add('open');
  menu.classList.remove('close');
};

var menu_close = function menu_close() {
  menu.setAttribute('aria-pressed', false);
  isopen = false;
  menu.classList.add('close');
  menu.classList.remove('open');
};

triggermenu.addEventListener('click', function () {
  console.log('yeyeye');
  isopen ? menu_close() : menu_open();
});
triggermenu.addEventListener('keyup', function (e) {
  if (e.key == 'Escape' && isopen == true) {
    menu_close();
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9tYWluLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWxfdmFyaWFibGVzLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tYWluX25hdi5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvbWVudV90cmlnZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7O0FDRk8sSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVAsQ0FBa0IsbUJBQWxCLENBQWpCOzs7Ozs7QUNBUCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYjtBQUNBLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBTCxDQUFzQixxQkFBdEIsQ0FBbEI7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQVo7QUFDQSxTQUFTLENBQUMsT0FBVixDQUFtQixVQUFDLENBQUQsRUFBTztBQUN0QixNQUFJLFFBQVEsR0FBRyxDQUFmO0FBQ0EsTUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLGFBQUYsQ0FBZ0IsMkJBQWhCLENBQWY7QUFDQSxNQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBRixDQUFnQixXQUFoQixDQUFUO0FBQ0EsRUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBdUMsWUFBTTtBQUN6QyxJQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLEdBQW5CLENBQXVCLGFBQXZCO0FBQ0gsR0FGRDtBQUdBLEVBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLFlBQTFCLEVBQXVDLFlBQU07QUFDekMsSUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixhQUExQjtBQUNILEdBRkQ7QUFHSCxDQVZEOzs7OztBQ0pBO0FBRUEsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsSUFBSSxNQUFNLEdBQUcsS0FBYjs7QUFFQSxJQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVksR0FBTTtBQUN0QixFQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLGNBQWxCLEVBQWlDLElBQWpDO0FBQ0EsRUFBQSxNQUFNLEdBQUcsSUFBVDtBQUNBLEVBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLE1BQW5CO0FBQ0EsRUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsT0FBdEI7QUFDRCxDQUxEOztBQU1BLElBQU0sVUFBVSxHQUFHLFNBQWIsVUFBYSxHQUFNO0FBQ3ZCLEVBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsY0FBbEIsRUFBaUMsS0FBakM7QUFDQSxFQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0EsRUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsQ0FBbUIsT0FBbkI7QUFDQSxFQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFzQixNQUF0QjtBQUNELENBTEQ7O0FBT0EsV0FBVyxDQUFDLGdCQUFaLENBQTZCLE9BQTdCLEVBQXFDLFlBQVU7QUFDN0MsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDQSxFQUFBLE1BQU0sR0FBRyxVQUFVLEVBQWIsR0FBa0IsU0FBUyxFQUFqQztBQUNELENBSEQ7QUFLQSxXQUFXLENBQUMsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBcUMsVUFBUyxDQUFULEVBQVc7QUFDOUMsTUFBSSxDQUFDLENBQUMsR0FBRixJQUFTLFFBQVQsSUFBcUIsTUFBTSxJQUFJLElBQW5DLEVBQXlDO0FBQ3ZDLElBQUEsVUFBVTtBQUNYO0FBQ0YsQ0FKRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCAnLi9tb2R1bGVzL2dsb2JhbF92YXJpYWJsZXMuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvbWVudV90cmlnZ2VyLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL21haW5fbmF2LmpzJztcbi8qXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlX25hdi5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9zY3JvbGxfcHJvZ3Jlc3NfaW5kaWNhdG9yLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL3Njcm9sbF9ldmVudC5qcyc7XG4qLyIsImV4cG9ydCBjb25zdCBtcV9zbWFsbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDo1NjBweClcIik7IiwiY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbWFpbicpO1xuY29uc3QgbWVudUl0ZW1zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51X19pdGVtJyk7XG5jb25zb2xlLmxvZygnZWUnKTtcbm1lbnVJdGVtcy5mb3JFYWNoKCAoaSkgPT4ge1xuICAgIGxldCBtZW51aXRlbSA9IGk7XG4gICAgbGV0IG1haW5saW5rID0gaS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51X19pdGVtX19saW5rJyk7XG4gICAgbGV0IGRkID0gaS5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgICBtZW51aXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKSA9PiB7XG4gICAgICAgIG1lbnVpdGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmstYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgbWVudWl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCkgPT4ge1xuICAgICAgICBtZW51aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsaW5rLWFjdGl2ZScpO1xuICAgIH0pO1xufSApOyIsIi8vIG1lbnUgdHJpZ2dlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IHRyaWdnZXJtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaWdnZXItbWVudScpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudScpO1xudmFyIGlzb3BlbiA9IGZhbHNlO1xuXG5jb25zdCBtZW51X29wZW4gPSAoKSA9PiB7XG4gIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLHRydWUpO1xuICBpc29wZW4gPSB0cnVlO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xufVxuY29uc3QgbWVudV9jbG9zZSA9ICgpID0+IHtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsZmFsc2UpO1xuICBpc29wZW4gPSBmYWxzZTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbn1cblxudHJpZ2dlcm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUubG9nKCd5ZXlleWUnKTtcbiAgaXNvcGVuID8gbWVudV9jbG9zZSgpIDogbWVudV9vcGVuKCk7XG59KTtcblxudHJpZ2dlcm1lbnUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLGZ1bmN0aW9uKGUpe1xuICBpZiggZS5rZXkgPT0gJ0VzY2FwZScgJiYgaXNvcGVuID09IHRydWUgKXtcbiAgICBtZW51X2Nsb3NlKCk7XG4gIH1cbn0pOyJdfQ==
