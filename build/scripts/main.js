(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./modules/global_variables.js");

require("./modules/menu_trigger.js");

require("./modules/main_nav.js");

require("./modules/scroll_event.js");

},{"./modules/global_variables.js":2,"./modules/main_nav.js":3,"./modules/menu_trigger.js":4,"./modules/scroll_event.js":5}],2:[function(require,module,exports){
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
var body = document.getElementsByTagName("BODY")[0];
var isopen = false;

var menu_open = function menu_open() {
  menu.setAttribute('aria-pressed', true);
  isopen = true;
  menu.classList.add('open');
  menu.classList.remove('close');
  body.classList.add('locked');
};

var menu_close = function menu_close() {
  menu.setAttribute('aria-pressed', false);
  isopen = false;
  menu.classList.add('close');
  menu.classList.remove('open');
  body.classList.remove('locked');
};

triggermenu.addEventListener('click', function () {
  isopen ? menu_close() : menu_open();
});
triggermenu.addEventListener('keyup', function (e) {
  if (e.key == 'Escape' && isopen == true) {
    menu_close();
  }
});

},{}],5:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var sb = _interopRequireWildcard(require("./scroll_progress_indicator.js"));

var gv = _interopRequireWildcard(require("./global_variables.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// scroll event ---------------------------------------------
var backtop = document.querySelector('.backtop');
var backtopinner = document.querySelector('.backtop__inner');
var contentstart = document.querySelector('main');
var contentoffset = contentstart.getBoundingClientRect().top + pageYOffset;
var header = document.querySelector('.header');
var allelems = [sb.progress_indicator, backtop];
var body = document.querySelector('body');
var scrolldelay;
var isitdown;

var backtopfunc = function backtopfunc() {
  if (isitdown) {
    fadein();
    isitdown = false;
  }

  clearTimeout(scrolldelay);
  scrolldelay = setTimeout(function () {
    fadeout();
    isitdown = true;
  }, 1500);
};

var fadeout = function fadeout() {
  backtopinner.classList.add('fadeout');
  backtopinner.classList.remove('fadein');
};

var fadein = function fadein() {
  backtopinner.classList.remove('fadeout');
  backtopinner.classList.add('fadein');
};

var hideshow = function hideshow() {
  window.onscroll = function () {
    if (body.classList.contains('archive')) {
      sb.scrollbar();
    }

    if (window.pageYOffset < contentoffset) {
      if (body.classList.contains('archive')) {
        allelems.forEach(function (e) {
          e.classList.remove('visible');
          e.classList.add('hidden');
        });
      }

      header.classList.remove('header--shallow');
    } else {
      if (body.classList.contains('archive')) {
        allelems.forEach(function (e) {
          e.classList.add('visible');
          e.classList.remove('hidden');
        });
      }

      header.classList.add('header--shallow');
    }

    if (gv.mq_small.matches) {
      backtopfunc();
    }
  };
};

hideshow();

},{"./global_variables.js":2,"./scroll_progress_indicator.js":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollbar = exports.progress_indicator = void 0;
// scrollbar porgress indicator -----------------------------
var progress_indicator = document.querySelector('.progress-indicator');
exports.progress_indicator = progress_indicator;

var scrollbar = function scrollbar() {
  // display height
  var displayheight = window.innerHeight; // pillar

  var pillarcontent = document.querySelector('.article'); // body height

  var bodyheight = document.body.clientHeight; // pillar content height

  var pillarcontentheight = pillarcontent.clientHeight; // pillar content distance from the top

  var pillarcontentoffset = pillarcontent.offsetTop;
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; // how far scrolled down from the top minus offset (distance between top of document and top of pillar)

  var winScroll_new = winScroll - pillarcontentoffset; // the same as above, but bottom of display

  var windScroll_new_bottom = winScroll_new + window.innerHeight; // percentage of scrolled position of the height of the div

  var scrolledpc = windScroll_new_bottom / pillarcontentheight * 100;
  document.getElementById("myBar").style.width = scrolledpc + "%";
};

exports.scrollbar = scrollbar;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9tYWluLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWxfdmFyaWFibGVzLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tYWluX25hdi5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvbWVudV90cmlnZ2VyLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGxfZXZlbnQuanMiLCJhc3NldHMvc2NyaXB0cy9tb2R1bGVzL3Njcm9sbF9wcm9ncmVzc19pbmRpY2F0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7QUNITyxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBUCxDQUFrQixtQkFBbEIsQ0FBakI7Ozs7OztBQ0FQLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFiO0FBQ0EsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFMLENBQXNCLHFCQUF0QixDQUFsQjtBQUNBLFNBQVMsQ0FBQyxPQUFWLENBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3RCLE1BQUksUUFBUSxHQUFHLENBQWY7QUFDQSxNQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBRixDQUFnQiwyQkFBaEIsQ0FBZjtBQUNBLE1BQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFGLENBQWdCLFdBQWhCLENBQVQ7QUFDQSxFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixZQUExQixFQUF1QyxZQUFNO0FBQ3pDLElBQUEsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBdUIsYUFBdkI7QUFDSCxHQUZEO0FBR0EsRUFB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QyxLQUFqQyxDQUF1QyxLQUF2QyxHQUErQyxVQUFVLEdBQUcsR0FBNUQ7QUFFRCxDQXRCTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCAnLi9tb2R1bGVzL2dsb2JhbF92YXJpYWJsZXMuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvbWVudV90cmlnZ2VyLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL21haW5fbmF2LmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL3Njcm9sbF9ldmVudC5qcyc7XG4vKlxuaW1wb3J0ICcuL21vZHVsZXMvcGFnZV9uYXYuanMnO1xuKi8iLCJleHBvcnQgY29uc3QgbXFfc21hbGwgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6NTYwcHgpXCIpOyIsImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW1haW4nKTtcbmNvbnN0IG1lbnVJdGVtcyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbWVudV9faXRlbScpO1xubWVudUl0ZW1zLmZvckVhY2goIChpKSA9PiB7XG4gICAgbGV0IG1lbnVpdGVtID0gaTtcbiAgICBsZXQgbWFpbmxpbmsgPSBpLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnVfX2l0ZW1fX2xpbmsnKTtcbiAgICBsZXQgZGQgPSBpLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuICAgIG1lbnVpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpID0+IHtcbiAgICAgICAgbWVudWl0ZW0uY2xhc3NMaXN0LmFkZCgnbGluay1hY3RpdmUnKTtcbiAgICB9KTtcbiAgICBtZW51aXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKSA9PiB7XG4gICAgICAgIG1lbnVpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmstYWN0aXZlJyk7XG4gICAgfSk7XG59ICk7IiwiLy8gbWVudSB0cmlnZ2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgdHJpZ2dlcm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpZ2dlci1tZW51Jyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51Jyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdO1xudmFyIGlzb3BlbiA9IGZhbHNlO1xuXG5jb25zdCBtZW51X29wZW4gPSAoKSA9PiB7XG4gIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLHRydWUpO1xuICBpc29wZW4gPSB0cnVlO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZScpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2tlZCcpO1xufVxuY29uc3QgbWVudV9jbG9zZSA9ICgpID0+IHtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsZmFsc2UpO1xuICBpc29wZW4gPSBmYWxzZTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrZWQnKTtcbn1cblxudHJpZ2dlcm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gIGlzb3BlbiA/IG1lbnVfY2xvc2UoKSA6IG1lbnVfb3BlbigpO1xufSk7XG5cbnRyaWdnZXJtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxmdW5jdGlvbihlKXtcbiAgaWYoIGUua2V5ID09ICdFc2NhcGUnICYmIGlzb3BlbiA9PSB0cnVlICl7XG4gICAgbWVudV9jbG9zZSgpO1xuICB9XG59KTsiLCIvLyBzY3JvbGwgZXZlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgKiBhcyBzYiBmcm9tICcuL3Njcm9sbF9wcm9ncmVzc19pbmRpY2F0b3IuanMnO1xuaW1wb3J0ICogYXMgZ3YgZnJvbSAnLi9nbG9iYWxfdmFyaWFibGVzLmpzJztcblxuY29uc3QgYmFja3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrdG9wJyk7XG5jb25zdCBiYWNrdG9waW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja3RvcF9faW5uZXInKTtcbmNvbnN0IGNvbnRlbnRzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IGNvbnRlbnRvZmZzZXQgPSBjb250ZW50c3RhcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgcGFnZVlPZmZzZXQ7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBhbGxlbGVtcyA9IFtzYi5wcm9ncmVzc19pbmRpY2F0b3IsIGJhY2t0b3BdO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxldCBzY3JvbGxkZWxheTtcbnZhciBpc2l0ZG93bjtcblxuY29uc3QgYmFja3RvcGZ1bmMgPSAoKSA9PiB7XG4gIGlmIChpc2l0ZG93bil7XG4gICAgZmFkZWluKCk7XG4gICAgaXNpdGRvd24gPSBmYWxzZTtcbiAgfVxuICBjbGVhclRpbWVvdXQoc2Nyb2xsZGVsYXkpO1xuICBzY3JvbGxkZWxheSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICBmYWRlb3V0KCk7XG4gICAgaXNpdGRvd24gPSB0cnVlO1xuICB9LDE1MDApO1xufVxuXG5jb25zdCBmYWRlb3V0ID0gKCkgPT4ge1xuICBiYWNrdG9waW5uZXIuY2xhc3NMaXN0LmFkZCgnZmFkZW91dCcpO1xuICBiYWNrdG9waW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZWluJyk7XG59O1xuY29uc3QgZmFkZWluID0gKCkgPT4ge1xuICBiYWNrdG9waW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZW91dCcpO1xuICBiYWNrdG9waW5uZXIuY2xhc3NMaXN0LmFkZCgnZmFkZWluJyk7XG59O1xuXG5jb25zdCBoaWRlc2hvdyA9IGZ1bmN0aW9uKCl7XG4gIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2FyY2hpdmUnKSl7XG4gICAgICBzYi5zY3JvbGxiYXIoKTtcbiAgICB9XG4gICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPCBjb250ZW50b2Zmc2V0ICl7XG4gICAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2FyY2hpdmUnKSl7XG4gICAgICAgIGFsbGVsZW1zLmZvckVhY2goIChlKSA9PiB7XG4gICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1zaGFsbG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnYXJjaGl2ZScpKXtcbiAgICAgICAgYWxsZWxlbXMuZm9yRWFjaCggKGUpID0+IHtcbiAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLXNoYWxsb3cnKTtcbiAgICB9XG4gICAgaWYoZ3YubXFfc21hbGwubWF0Y2hlcyl7XG4gICAgICBiYWNrdG9wZnVuYygpO1xuICAgIH1cbiAgfVxufTtcblxuaGlkZXNob3coKTsiLCIvLyBzY3JvbGxiYXIgcG9yZ3Jlc3MgaW5kaWNhdG9yIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc19pbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtaW5kaWNhdG9yJyk7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXIgPSAoKSA9PiB7XG5cbiAgLy8gZGlzcGxheSBoZWlnaHRcbiAgdmFyIGRpc3BsYXloZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIC8vIHBpbGxhclxuICB2YXIgcGlsbGFyY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlJyk7XG4gIC8vIGJvZHkgaGVpZ2h0XG4gIHZhciBib2R5aGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gIC8vIHBpbGxhciBjb250ZW50IGhlaWdodFxuICB2YXIgcGlsbGFyY29udGVudGhlaWdodCA9IHBpbGxhcmNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAvLyBwaWxsYXIgY29udGVudCBkaXN0YW5jZSBmcm9tIHRoZSB0b3BcbiAgdmFyIHBpbGxhcmNvbnRlbnRvZmZzZXQgPSBwaWxsYXJjb250ZW50Lm9mZnNldFRvcDtcbiAgdmFyIHdpblNjcm9sbCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIC8vIGhvdyBmYXIgc2Nyb2xsZWQgZG93biBmcm9tIHRoZSB0b3AgbWludXMgb2Zmc2V0IChkaXN0YW5jZSBiZXR3ZWVuIHRvcCBvZiBkb2N1bWVudCBhbmQgdG9wIG9mIHBpbGxhcilcbiAgdmFyIHdpblNjcm9sbF9uZXcgPSB3aW5TY3JvbGwgLSBwaWxsYXJjb250ZW50b2Zmc2V0O1xuICAvLyB0aGUgc2FtZSBhcyBhYm92ZSwgYnV0IGJvdHRvbSBvZiBkaXNwbGF5XG4gIHZhciB3aW5kU2Nyb2xsX25ld19ib3R0b20gPSB3aW5TY3JvbGxfbmV3ICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAvLyBwZXJjZW50YWdlIG9mIHNjcm9sbGVkIHBvc2l0aW9uIG9mIHRoZSBoZWlnaHQgb2YgdGhlIGRpdlxuICB2YXIgc2Nyb2xsZWRwYyA9IHdpbmRTY3JvbGxfbmV3X2JvdHRvbSAvIHBpbGxhcmNvbnRlbnRoZWlnaHQgKiAxMDA7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUJhclwiKS5zdHlsZS53aWR0aCA9IHNjcm9sbGVkcGMgKyBcIiVcIjtcblxufSJdfQ==
