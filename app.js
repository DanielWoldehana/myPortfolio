let aboutIcon = document.querySelectorAll(".aboutIcon")
let profilePic = document.querySelector('.profilePic')
// let myChart = document.getElementById('myChart').getContext('2d');
// let massPopChart = new Chart(myChart, {
//   type: 'horizontalBar',
//   data: {
//     labels: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'Express', 'Python'],
//     datasets: [{
//       label: 'languages',
//       data: [
//         93,
//         90,
//         85,
//         70,
//         70,
//         65,
//         50,
//         0,
//         100
//       ],
//       // backgroundColor: '#243139',
//       backgroundColor: ['rgba(68, 68, 68, 0.6)', 'rgba(0, 143, 199, 0.6)', 'rgba(83, 178, 143, 0.6)', 'rgba(255, 179, 15, 0.6)', 'rgba(255, 105, 5, 0.6)', 'rgb(245, 20, 0, 0.6)', 'rgba(171, 217, 102, 0.6)'],
//       borderWidth: 2,
//       borderColor: '#999',
//       hoverBorderWidth: 3,
//       hoverBorderColor: 'black'
//     }]
//   },
//   options: {}

// })

profilePic.addEventListener('mouseover', function () {
  profilePic.classList.add('scaleClass')
})

profilePic.addEventListener('mouseout', function () {
  profilePic.classList.remove('scaleClass')
})

aboutIcon.forEach(function (elem) {
  elem.addEventListener("mouseover", function () {
    elem.classList.add('spinClass')
  });
});

aboutIcon.forEach(function (elem) {
  elem.addEventListener("mouseout", function () {
    elem.classList.remove('spinClass')
  });
});

let flightPath = {};
let iconPath = {};
if (window.innerWidth >= 1100) {
  console.log("screen at 1100 or more");
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

if (window.innerWidth >= 1100) {
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
    duration: 1000,
    triggerHook: 0
  })
    .setTween(tween)
    .setPin(".animation")
    .addTo(controller);
}