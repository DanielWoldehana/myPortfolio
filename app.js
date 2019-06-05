
let flightPath = {};
if (window.innerWidth >= 1000) {
  console.log("screen at 1300 or more");
  flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
      { x: 100, y: -20 },
      { x: 300, y: 10 },
      { x: 500, y: 50 },
      { x: 750, y: -50 },
      { x: 550, y: -50 },
      { x: 600, y: 50 },
      { x: 800, y: 0 },
      { x: window.innerWidth, y: -100 }
    ]
  };
}

// @ts-ignore
const tween = new TimelineLite();

tween.add(
  // @ts-ignore
  TweenLite.to(".paper-plane", 1, {
    bezier: flightPath,
    // @ts-ignore
    ease: Power1.easeInOut
  })
);

// @ts-ignore
const controller = new ScrollMagic.Controller();

// @ts-ignore
const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 3000,
  triggerHook: 0
})
  .setTween(tween)
  .setPin(".animation")
  .addTo(controller);
// @ts-ignore

let aboutIcon = document.querySelector(".aboutIcon");
TweenMax.to(aboutIcon, 2, { left: 600 });
