import { TweenLite, TimelineLite, CSSPlugin } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const Timeline = new TimelineLite();
  const all = document.querySelectorAll("header > *");

  all.forEach(element => {
    Timeline.from(element, 0.3, { autoAlpha: 0, y: -25 }, "-=.15");
  });
});
