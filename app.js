console.log(window.innerWidth);
let flightPath = {};
// GreenSock
// if (window.innerWidth <= 500) {
//   console.log("screen at 500 or less");
//   flightPath = {
//     curviness: 1.25,
//     autoRotate: true,
//     values: [
//       { x: 50, y: -5 },
//       { x: 80, y: 15 },
//       { x: 100, y: 25 },
//       { x: 150, y: 45 },
//       { x: 200, y: -10 },
//       { x: 100, y: 10 },
//       { x: 400, y: -25 },
//       { x: window.innerWidth, y: -50 }
//     ]
//   };
// }

// if (window.innerWidth <= 800) {
//   console.log("screen at 800 or less");
//   flightPath = {
//     curviness: 1.25,
//     autoRotate: true,
//     values: [
//       { x: 100, y: -10 },
//       { x: 150, y: 5 },
//       { x: 300, y: 25 },
//       { x: 350, y: -25 },
//       { x: 250, y: -25 },
//       { x: 300, y: 25 },
//       { x: 400, y: 0 },
//       { x: window.innerWidth, y: -50 }
//     ]
//   };
// }

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
