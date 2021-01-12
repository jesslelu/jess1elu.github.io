anime({
    
    targets:'div.header',
    translateX:[
        {value:2400, duration:45000},],

    rotate:[{
        value: '1.6turn',duration:45000},],
        loop:false,

}
);

anime({
    
    targets:'div.outer',
    translateX:[
        {value:1400, duration:45000},]},


    

);


function scrollToTop() {
  var position =
      document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout("scrollToTop()", 30);
  } else clearTimeout(scrollAnimation);
}