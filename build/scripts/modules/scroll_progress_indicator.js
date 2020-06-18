// scrollbar porgress indicator -----------------------------

export const progress_indicator = document.querySelector('.progress-indicator');

export const scrollbar = () => {

  // display height
  var displayheight = window.innerHeight;
  // pillar
  var pillarcontent = document.querySelector('.pillar-content');
  // body height
  var bodyheight = document.body.clientHeight;
  // pillar content height
  var pillarcontentheight = pillarcontent.clientHeight;
  // pillar content distance from the top
  var pillarcontentoffset = pillarcontent.offsetTop;
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // how far scrolled down from the top minus offset (distance between top of document and top of pillar)
  var winScroll_new = winScroll - pillarcontentoffset;
  // the same as above, but bottom of display
  var windScroll_new_bottom = winScroll_new + window.innerHeight;
  // percentage of scrolled position of the height of the div
  var scrolledpc = windScroll_new_bottom / pillarcontentheight * 100;

  document.getElementById("myBar").style.width = scrolledpc + "%";

}