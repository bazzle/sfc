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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9tYWluLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWxfdmFyaWFibGVzLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tYWluX25hdi5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvbWVudV90cmlnZ2VyLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGxfZXZlbnQuanMiLCJhc3NldHMvc2NyaXB0cy9tb2R1bGVzL3Njcm9sbF9wcm9ncmVzc19pbmRpY2F0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7QUNITyxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBUCxDQUFrQixtQkFBbEIsQ0FBakI7Ozs7OztBQ0FQLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFiO0FBQ0EsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFMLENBQXNCLHFCQUF0QixDQUFsQjtBQUNBLFNBQVMsQ0FBQyxPQUFWLENBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3RCLE1BQUksUUFBUSxHQUFHLENBQWY7QUFDQSxNQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsYUFBRixDQUFnQiwyQkFBaEIsQ0FBZjtBQUNBLE1BQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFGLENBQWdCLFdBQWhCLENBQVQ7QUFDQSxFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixZQUExQixFQUF1QyxZQUFNO0FBQ3pDLElBQUEsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBdUIsYUFBdkI7QUFDSCxHQUZEO0FBR0EsRUFB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O0FBQ0Q7O0FBQ0QsUUFBRyxFQUFFLENBQUMsUUFBSCxDQUFZLE9BQWYsRUFBdUI7QUFDckIsTUFBQSxXQUFXO0FBQ1o7QUFDRixHQXhCRDtBQXlCRCxDQTFCRDs7QUE0QkEsUUFBUTs7Ozs7Ozs7O0FDL0RSO0FBRU8sSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixxQkFBdkIsQ0FBM0I7OztBQUVBLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxHQUFNO0FBRTdCO0FBQ0EsTUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLFdBQTNCLENBSDZCLENBSTdCOztBQUNBLE1BQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCLENBQXBCLENBTDZCLENBTTdCOztBQUNBLE1BQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFULENBQWMsWUFBL0IsQ0FQNkIsQ0FRN0I7O0FBQ0EsTUFBSSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsWUFBeEMsQ0FUNkIsQ0FVN0I7O0FBQ0EsTUFBSSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsU0FBeEM7QUFDQSxNQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsSUFBMkIsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsU0FBcEUsQ0FaNkIsQ0FhN0I7O0FBQ0EsTUFBSSxhQUFhLEdBQUcsU0FBUyxHQUFHLG1CQUFoQyxDQWQ2QixDQWU3Qjs7QUFDQSxNQUFJLHFCQUFxQixHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUMsV0FBbkQsQ0FoQjZCLENBaUI3Qjs7QUFDQSxNQUFJLFVBQVUsR0FBRyxxQkFBcUIsR0FBRyxtQkFBeEIsR0FBOEMsR0FBL0Q7QUFFQSxFQUFBLFFBQVEsQ0FBQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDLEtBQWpDLENBQXVDLEtBQXZDLEdBQStDLFVBQVUsR0FBRyxHQUE1RDtBQUVELENBdEJNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0ICcuL21vZHVsZXMvZ2xvYmFsX3ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9tZW51X3RyaWdnZXIuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvbWFpbl9uYXYuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvc2Nyb2xsX2V2ZW50LmpzJztcbi8qXG5pbXBvcnQgJy4vbW9kdWxlcy9wYWdlX25hdi5qcyc7XG4qLyIsImV4cG9ydCBjb25zdCBtcV9zbWFsbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDo1NjBweClcIik7IiwiY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbWFpbicpO1xuY29uc3QgbWVudUl0ZW1zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51X19pdGVtJyk7XG5tZW51SXRlbXMuZm9yRWFjaCggKGkpID0+IHtcbiAgICBsZXQgbWVudWl0ZW0gPSBpO1xuICAgIGxldCBtYWlubGluayA9IGkucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudV9faXRlbV9fbGluaycpO1xuICAgIGxldCBkZCA9IGkucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG4gICAgbWVudWl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCkgPT4ge1xuICAgICAgICBtZW51aXRlbS5jbGFzc0xpc3QuYWRkKCdsaW5rLWFjdGl2ZScpO1xuICAgIH0pO1xuICAgIG1lbnVpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpID0+IHtcbiAgICAgICAgbWVudWl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGluay1hY3RpdmUnKTtcbiAgICB9KTtcbn0gKTsiLCIvLyBtZW51IHRyaWdnZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCB0cmlnZ2VybWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyLW1lbnUnKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUnKTtcbnZhciBpc29wZW4gPSBmYWxzZTtcblxuY29uc3QgbWVudV9vcGVuID0gKCkgPT4ge1xuICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJyx0cnVlKTtcbiAgaXNvcGVuID0gdHJ1ZTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcbn1cbmNvbnN0IG1lbnVfY2xvc2UgPSAoKSA9PiB7XG4gIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLGZhbHNlKTtcbiAgaXNvcGVuID0gZmFsc2U7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG59XG5cbnRyaWdnZXJtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICBjb25zb2xlLmxvZygneWV5ZXllJyk7XG4gIGlzb3BlbiA/IG1lbnVfY2xvc2UoKSA6IG1lbnVfb3BlbigpO1xufSk7XG5cbnRyaWdnZXJtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxmdW5jdGlvbihlKXtcbiAgaWYoIGUua2V5ID09ICdFc2NhcGUnICYmIGlzb3BlbiA9PSB0cnVlICl7XG4gICAgbWVudV9jbG9zZSgpO1xuICB9XG59KTsiLCIvLyBzY3JvbGwgZXZlbnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgKiBhcyBzYiBmcm9tICcuL3Njcm9sbF9wcm9ncmVzc19pbmRpY2F0b3IuanMnO1xuaW1wb3J0ICogYXMgZ3YgZnJvbSAnLi9nbG9iYWxfdmFyaWFibGVzLmpzJztcblxuY29uc3QgYmFja3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrdG9wJyk7XG5jb25zdCBiYWNrdG9waW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja3RvcF9faW5uZXInKTtcbmNvbnN0IGNvbnRlbnRzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IGNvbnRlbnRvZmZzZXQgPSBjb250ZW50c3RhcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgcGFnZVlPZmZzZXQ7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBhbGxlbGVtcyA9IFtzYi5wcm9ncmVzc19pbmRpY2F0b3IsIGJhY2t0b3BdO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxldCBzY3JvbGxkZWxheTtcbnZhciBpc2l0ZG93bjtcblxuY29uc3QgYmFja3RvcGZ1bmMgPSAoKSA9PiB7XG4gIGlmIChpc2l0ZG93bil7XG4gICAgZmFkZWluKCk7XG4gICAgaXNpdGRvd24gPSBmYWxzZTtcbiAgfVxuICBjbGVhclRpbWVvdXQoc2Nyb2xsZGVsYXkpO1xuICBzY3JvbGxkZWxheSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICBmYWRlb3V0KCk7XG4gICAgaXNpdGRvd24gPSB0cnVlO1xuICB9LDE1MDApO1xufVxuXG5jb25zdCBmYWRlb3V0ID0gKCkgPT4ge1xuICBiYWNrdG9waW5uZXIuY2xhc3NMaXN0LmFkZCgnZmFkZW91dCcpO1xuICBiYWNrdG9waW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZWluJyk7XG59O1xuY29uc3QgZmFkZWluID0gKCkgPT4ge1xuICBiYWNrdG9waW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZW91dCcpO1xuICBiYWNrdG9waW5uZXIuY2xhc3NMaXN0LmFkZCgnZmFkZWluJyk7XG59O1xuXG5jb25zdCBoaWRlc2hvdyA9IGZ1bmN0aW9uKCl7XG4gIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2FyY2hpdmUnKSl7XG4gICAgICBzYi5zY3JvbGxiYXIoKTtcbiAgICB9XG4gICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPCBjb250ZW50b2Zmc2V0ICl7XG4gICAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2FyY2hpdmUnKSl7XG4gICAgICAgIGFsbGVsZW1zLmZvckVhY2goIChlKSA9PiB7XG4gICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1zaGFsbG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnYXJjaGl2ZScpKXtcbiAgICAgICAgYWxsZWxlbXMuZm9yRWFjaCggKGUpID0+IHtcbiAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLXNoYWxsb3cnKTtcbiAgICB9XG4gICAgaWYoZ3YubXFfc21hbGwubWF0Y2hlcyl7XG4gICAgICBiYWNrdG9wZnVuYygpO1xuICAgIH1cbiAgfVxufTtcblxuaGlkZXNob3coKTsiLCIvLyBzY3JvbGxiYXIgcG9yZ3Jlc3MgaW5kaWNhdG9yIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc19pbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtaW5kaWNhdG9yJyk7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXIgPSAoKSA9PiB7XG5cbiAgLy8gZGlzcGxheSBoZWlnaHRcbiAgdmFyIGRpc3BsYXloZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIC8vIHBpbGxhclxuICB2YXIgcGlsbGFyY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlJyk7XG4gIC8vIGJvZHkgaGVpZ2h0XG4gIHZhciBib2R5aGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gIC8vIHBpbGxhciBjb250ZW50IGhlaWdodFxuICB2YXIgcGlsbGFyY29udGVudGhlaWdodCA9IHBpbGxhcmNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAvLyBwaWxsYXIgY29udGVudCBkaXN0YW5jZSBmcm9tIHRoZSB0b3BcbiAgdmFyIHBpbGxhcmNvbnRlbnRvZmZzZXQgPSBwaWxsYXJjb250ZW50Lm9mZnNldFRvcDtcbiAgdmFyIHdpblNjcm9sbCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIC8vIGhvdyBmYXIgc2Nyb2xsZWQgZG93biBmcm9tIHRoZSB0b3AgbWludXMgb2Zmc2V0IChkaXN0YW5jZSBiZXR3ZWVuIHRvcCBvZiBkb2N1bWVudCBhbmQgdG9wIG9mIHBpbGxhcilcbiAgdmFyIHdpblNjcm9sbF9uZXcgPSB3aW5TY3JvbGwgLSBwaWxsYXJjb250ZW50b2Zmc2V0O1xuICAvLyB0aGUgc2FtZSBhcyBhYm92ZSwgYnV0IGJvdHRvbSBvZiBkaXNwbGF5XG4gIHZhciB3aW5kU2Nyb2xsX25ld19ib3R0b20gPSB3aW5TY3JvbGxfbmV3ICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAvLyBwZXJjZW50YWdlIG9mIHNjcm9sbGVkIHBvc2l0aW9uIG9mIHRoZSBoZWlnaHQgb2YgdGhlIGRpdlxuICB2YXIgc2Nyb2xsZWRwYyA9IHdpbmRTY3JvbGxfbmV3X2JvdHRvbSAvIHBpbGxhcmNvbnRlbnRoZWlnaHQgKiAxMDA7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUJhclwiKS5zdHlsZS53aWR0aCA9IHNjcm9sbGVkcGMgKyBcIiVcIjtcblxufSJdfQ==
