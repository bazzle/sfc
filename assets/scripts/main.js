(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./modules/global_variables.js");

require("./modules/menu_trigger.js");

require("./modules/main_nav.js");

require("./modules/scroll_progress_indicator.js");

},{"./modules/global_variables.js":2,"./modules/main_nav.js":3,"./modules/menu_trigger.js":4,"./modules/scroll_progress_indicator.js":5}],2:[function(require,module,exports){
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
var menuItems = menu.querySelectorAll('.menu-item');
menuItems.forEach(function (i) {
  i.addEventListener('mouseenter', function () {
    console.log('yey');
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
  isopen ? menu_close() : menu_open();
});
triggermenu.addEventListener('keyup', function (e) {
  if (e.key == 'Escape' && isopen == true) {
    console.log('eye');
    menu_close();
  }
});

},{}],5:[function(require,module,exports){
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

  var pillarcontent = document.querySelector('.pillar-content'); // body height

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9zY3JpcHRzL21haW4uanMiLCJidWlsZC9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsX3ZhcmlhYmxlcy5qcyIsImJ1aWxkL3NjcmlwdHMvbW9kdWxlcy9tYWluX25hdi5qcyIsImJ1aWxkL3NjcmlwdHMvbW9kdWxlcy9tZW51X3RyaWdnZXIuanMiLCJidWlsZC9zY3JpcHRzL21vZHVsZXMvc2Nyb2xsX3Byb2dyZXNzX2luZGljYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQ0pPLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFQLENBQWtCLG1CQUFsQixDQUFqQjs7Ozs7O0FDQVAsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsWUFBdEIsQ0FBbEI7QUFFQSxTQUFTLENBQUMsT0FBVixDQUFtQixVQUFDLENBQUQsRUFBTztBQUN2QixFQUFBLENBQUMsQ0FBQyxnQkFBRixDQUFtQixZQUFuQixFQUFnQyxZQUFNO0FBQ2xDLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0gsR0FGRDtBQUdGLENBSkQ7Ozs7O0FDSkE7QUFFQSxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQWI7QUFDQSxJQUFJLE1BQU0sR0FBRyxLQUFiOztBQUVBLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxHQUFNO0FBQ3RCLEVBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsY0FBbEIsRUFBaUMsSUFBakM7QUFDQSxFQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0EsRUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsQ0FBbUIsTUFBbkI7QUFDQSxFQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFzQixPQUF0QjtBQUNELENBTEQ7O0FBTUEsSUFBTSxVQUFVLEdBQUcsU0FBYixVQUFhLEdBQU07QUFDdkIsRUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixjQUFsQixFQUFpQyxLQUFqQztBQUNBLEVBQUEsTUFBTSxHQUFHLEtBQVQ7QUFDQSxFQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZixDQUFtQixPQUFuQjtBQUNBLEVBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLE1BQXRCO0FBQ0QsQ0FMRDs7QUFPQSxXQUFXLENBQUMsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBcUMsWUFBVTtBQUM3QyxFQUFBLE1BQU0sR0FBRyxVQUFVLEVBQWIsR0FBa0IsU0FBUyxFQUFqQztBQUNELENBRkQ7QUFJQSxXQUFXLENBQUMsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBcUMsVUFBUyxDQUFULEVBQVc7QUFDOUMsTUFBSSxDQUFDLENBQUMsR0FBRixJQUFTLFFBQVQsSUFBcUIsTUFBTSxJQUFJLElBQW5DLEVBQXlDO0FBQ3ZDLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsSUFBQSxVQUFVO0FBQ1g7QUFDRixDQUxEOzs7Ozs7Ozs7QUN2QkE7QUFFTyxJQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLHFCQUF2QixDQUEzQjs7O0FBRUEsSUFBTSxTQUFTLEdBQUcsU0FBWixTQUFZLEdBQU07QUFFN0I7QUFDQSxNQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsV0FBM0IsQ0FINkIsQ0FJN0I7O0FBQ0EsTUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXBCLENBTDZCLENBTTdCOztBQUNBLE1BQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFULENBQWMsWUFBL0IsQ0FQNkIsQ0FRN0I7O0FBQ0EsTUFBSSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsWUFBeEMsQ0FUNkIsQ0FVN0I7O0FBQ0EsTUFBSSxtQkFBbUIsR0FBRyxhQUFhLENBQUMsU0FBeEM7QUFDQSxNQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsSUFBMkIsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsU0FBcEUsQ0FaNkIsQ0FhN0I7O0FBQ0EsTUFBSSxhQUFhLEdBQUcsU0FBUyxHQUFHLG1CQUFoQyxDQWQ2QixDQWU3Qjs7QUFDQSxNQUFJLHFCQUFxQixHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUMsV0FBbkQsQ0FoQjZCLENBaUI3Qjs7QUFDQSxNQUFJLFVBQVUsR0FBRyxxQkFBcUIsR0FBRyxtQkFBeEIsR0FBOEMsR0FBL0Q7QUFFQSxFQUFBLFFBQVEsQ0FBQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDLEtBQWpDLENBQXVDLEtBQXZDLEdBQStDLFVBQVUsR0FBRyxHQUE1RDtBQUVELENBdEJNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0ICcuL21vZHVsZXMvZ2xvYmFsX3ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9tZW51X3RyaWdnZXIuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvbWFpbl9uYXYuanMnO1xuLy8gaW1wb3J0ICcuL21vZHVsZXMvcGFnZV9uYXYuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvc2Nyb2xsX3Byb2dyZXNzX2luZGljYXRvci5qcyc7XG4vLyBpbXBvcnQgJy4vbW9kdWxlcy9zY3JvbGxfZXZlbnQuanMnOyIsImV4cG9ydCBjb25zdCBtcV9zbWFsbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDo1NjBweClcIik7IiwiY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbWFpbicpO1xuY29uc3QgbWVudUl0ZW1zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJyk7XG5cbm1lbnVJdGVtcy5mb3JFYWNoKCAoaSkgPT4ge1xuICAgaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKSA9PiB7XG4gICAgICAgY29uc29sZS5sb2coJ3lleScpO1xuICAgfSlcbn0pO1xuXG4iLCIvLyBtZW51IHRyaWdnZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCB0cmlnZ2VybWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyLW1lbnUnKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUnKTtcbnZhciBpc29wZW4gPSBmYWxzZTtcblxuY29uc3QgbWVudV9vcGVuID0gKCkgPT4ge1xuICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJyx0cnVlKTtcbiAgaXNvcGVuID0gdHJ1ZTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcbn1cbmNvbnN0IG1lbnVfY2xvc2UgPSAoKSA9PiB7XG4gIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLGZhbHNlKTtcbiAgaXNvcGVuID0gZmFsc2U7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG59XG5cbnRyaWdnZXJtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICBpc29wZW4gPyBtZW51X2Nsb3NlKCkgOiBtZW51X29wZW4oKTtcbn0pO1xuXG50cmlnZ2VybWVudS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsZnVuY3Rpb24oZSl7XG4gIGlmKCBlLmtleSA9PSAnRXNjYXBlJyAmJiBpc29wZW4gPT0gdHJ1ZSApe1xuICAgIGNvbnNvbGUubG9nKCdleWUnKTtcbiAgICBtZW51X2Nsb3NlKCk7XG4gIH1cbn0pOyIsIi8vIHNjcm9sbGJhciBwb3JncmVzcyBpbmRpY2F0b3IgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzX2luZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1pbmRpY2F0b3InKTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhciA9ICgpID0+IHtcblxuICAvLyBkaXNwbGF5IGhlaWdodFxuICB2YXIgZGlzcGxheWhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgLy8gcGlsbGFyXG4gIHZhciBwaWxsYXJjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpbGxhci1jb250ZW50Jyk7XG4gIC8vIGJvZHkgaGVpZ2h0XG4gIHZhciBib2R5aGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gIC8vIHBpbGxhciBjb250ZW50IGhlaWdodFxuICB2YXIgcGlsbGFyY29udGVudGhlaWdodCA9IHBpbGxhcmNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAvLyBwaWxsYXIgY29udGVudCBkaXN0YW5jZSBmcm9tIHRoZSB0b3BcbiAgdmFyIHBpbGxhcmNvbnRlbnRvZmZzZXQgPSBwaWxsYXJjb250ZW50Lm9mZnNldFRvcDtcbiAgdmFyIHdpblNjcm9sbCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIC8vIGhvdyBmYXIgc2Nyb2xsZWQgZG93biBmcm9tIHRoZSB0b3AgbWludXMgb2Zmc2V0IChkaXN0YW5jZSBiZXR3ZWVuIHRvcCBvZiBkb2N1bWVudCBhbmQgdG9wIG9mIHBpbGxhcilcbiAgdmFyIHdpblNjcm9sbF9uZXcgPSB3aW5TY3JvbGwgLSBwaWxsYXJjb250ZW50b2Zmc2V0O1xuICAvLyB0aGUgc2FtZSBhcyBhYm92ZSwgYnV0IGJvdHRvbSBvZiBkaXNwbGF5XG4gIHZhciB3aW5kU2Nyb2xsX25ld19ib3R0b20gPSB3aW5TY3JvbGxfbmV3ICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAvLyBwZXJjZW50YWdlIG9mIHNjcm9sbGVkIHBvc2l0aW9uIG9mIHRoZSBoZWlnaHQgb2YgdGhlIGRpdlxuICB2YXIgc2Nyb2xsZWRwYyA9IHdpbmRTY3JvbGxfbmV3X2JvdHRvbSAvIHBpbGxhcmNvbnRlbnRoZWlnaHQgKiAxMDA7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUJhclwiKS5zdHlsZS53aWR0aCA9IHNjcm9sbGVkcGMgKyBcIiVcIjtcblxufSJdfQ==
