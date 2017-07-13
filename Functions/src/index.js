import { TweenLite, CSSPlugin } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("h2");
  var i = 0;

  TweenLite.from(header, 1, {
    autoAlpha: 0,
    y: 50,
    onStart,
    onUpdate,
    onComplete
  });

  function onStart() {
    console.log("Animation start");
  }

  function onUpdate() {
    header.innerHTML = i++;
    console.log("Animation in progress");
  }

  function onComplete() {
    console.log("Animation ended");
  }
});
