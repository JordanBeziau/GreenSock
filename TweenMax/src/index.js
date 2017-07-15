import { TweenMax } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const Timeline = new TimelineLite({ paused: true });

  const boxHTML = document.getElementById("boxHTML"),
    boxSVG = document.getElementById("boxSVG"),
    htmlDOT = document.getElementById("htmlDOT"),
    circ = document.querySelector(".circ"),
    circStroke = document.querySelector(".circStroke"),
    rect = document.querySelector("svg .rect"),
    hello = document.querySelector(".hello"),
    title = document.querySelector(".hello h1");

  Timeline.to(boxHTML, 0.7, {
    x: "100%",
    y: "100%",
    ease: Power2.easeInOut
  })
    .to(boxSVG, 0.7, { x: "100%", y: "100%", ease: Power2.easeInOut })
    .addPause()
    .to(boxHTML, 0.7, { top: "50%", left: "50%", ease: Power2.easeInOut })
    .to(boxSVG, 0.7, { top: "50%", left: "50%", ease: Power2.easeInOut })
    .addPause()
    .to(boxHTML, 0.7, {
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
      ease: Power2.easeInOut
    })
    .to(htmlDOT, 0.7, { top: 0, left: 0, ease: Power2.easeInOut })
    .addPause()
    .to(boxSVG, 0.7, {
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
      ease: Power2.easeInOut
    })
    .to(circ, 0.7, { attr: { cx: 0, cy: 0 }, ease: Power2.easeInOut })
    .addPause()
    .to(boxHTML, 0.7, {
      rotation: 90,
      transformOrigin: "100% 100%",
      ease: Power2.easeInOut
    })
    .addPause()
    .to(boxSVG, 0.7, {
      rotation: 90,
      transformOrigin: "100% 100%",
      ease: Power2.easeInOut
    })
    .addPause()
    .to(boxHTML, 0.7, { xPercent: -100, rotation: 0, ease: Power2.easeInOut })
    .addPause()
    .to(boxSVG, 0.7, { x: "0%", rotation: 0, ease: Power2.easeInOut })
    .addPause()
    .to(htmlDOT, 0.7, { top: "50%", left: "50%", ease: Power2.easeInOut })
    .to(circ, 0.7, { attr: { cx: 100, cy: 100 }, ease: Power2.easeInOut })
    .addPause()
    .to([boxHTML, boxSVG], 0.7, {
      rotation: 720,
      transformOrigin: "50% 50%",
      ease: Power2.easeInOut
    })
    .addPause()
    .to(boxHTML, 0.7, {
      rotationX: -180,
      transformOrigin: "0% 50%",
      ease: Power2.easeInOut
    })
    .to(boxSVG, 0.7, {
      rotationY: -180,
      transformOrigin: "100% 50%",
      ease: Power2.easeInOut
    })
    .addPause()
    .to(boxHTML, 0.7, {
      rotationX: -360,
      ease: Power2.easeInOut
    })
    .to(boxSVG, 0.7, {
      rotationY: -360,
      ease: Power2.easeInOut
    })
    .addPause()
    .to([boxHTML, boxSVG], 0.7, {
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      ease: Power2.easeInOut
    })
    .addPause()
    .to([boxSVG, boxHTML], 1.5, {
      rotation: 1440,
      transformOrigin: "50% 50%",
      ease: Power4.easeIn
    })
    .to([rect, boxHTML], 0.2, { autoAlpha: 0 }, "-=0.2")
    .fromTo(
      circStroke,
      0.5,
      { scale: 0.5, transformOrigin: "50% 50%" },
      {
        autoAlpha: 1,
        scale: 1,
        transformOrigin: "50% 50%",
        ease: Power2.easeIn
      },
      "-=0.3"
    )
    .to(circStroke, 0.5, { scale: 0.5, transformOrigin: "50% 50%" })
    .to(hello, 0.4, { autoAlpha: 1, ease: Power2.easeIn }, "-=0.5")
    .to(title, 0.4, { autoAlpha: 1, scale: 2, ease: Power2.easeIn }, "-=0.5")
    .addPause();

  document
    .getElementById("next")
    .addEventListener("click", () => Timeline.play());

  document
    .getElementById("prev")
    .addEventListener("click", () => Timeline.reverse());
});
