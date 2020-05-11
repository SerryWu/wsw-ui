


let scrollLeftRafId = '';

let cancelRaf = window.cancelAnimationFrame;
var raf = window.requestAnimationFrame;

export default function scrollLeftTo(scroller,to,duration) { 
    if(!duration){
        scroller.scrollLeft = to;  
    }
    cancelRaf(scrollLeftRafId);
    let count = 0;
    const from = scroller.scrollLeft;
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);
  
    function animate() {
      scroller.scrollLeft += (to - from) / frames;
  
      if (++count < frames) {
        scrollLeftRafId = raf(animate);
      }
    }
    animate();
}