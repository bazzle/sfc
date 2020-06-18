// scroll event ---------------------------------------------
import * as pn from './page_nav.js';
import * as sb from './scroll_progress_indicator.js';
import * as gv from './global_variables.js';

export const contentstart = document.querySelector('.pillar-content');
const backtop = document.querySelector('.backtop');
const backtopinner = document.querySelector('.backtop__inner');
const contentoffset = contentstart.getBoundingClientRect().top + pageYOffset;
const allelems = [sb.progress_indicator, pn.pagenav, backtop];
let scrolldelay;
var isitdown;

const backtopfunc = () => {
  if (isitdown){
    fadein();
    isitdown = false;
  }
  clearTimeout(scrolldelay);
  scrolldelay = setTimeout(function(){
    fadeout();
    isitdown = true;
  },1500);
}

const fadeout = () => {
  backtopinner.classList.add('fadeout');
  backtopinner.classList.remove('fadein');
};
const fadein = () => {
  backtopinner.classList.remove('fadeout');
  backtopinner.classList.add('fadein');
};

const hideshow = function(){
  window.onscroll = () => {
    sb.scrollbar();
    if ( window.pageYOffset < contentoffset ){
      allelems.forEach( (e) => {
        e.classList.remove('visible');
        e.classList.add('hidden');
      });
    } else {
      allelems.forEach( (e) => {
        e.classList.add('visible');
        e.classList.remove('hidden');
      });
    }
    if(gv.mq_small.matches){
      backtopfunc();
    }
  }
};



hideshow();