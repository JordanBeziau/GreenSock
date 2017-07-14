import { TimelineLite, CSSPlugin } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const Timeline = new TimelineLite();
  const all = Array.from(document.querySelectorAll("header > *:not(ul)")),
    lists = Array.from(document.querySelectorAll("header ul > li"));

  lists.forEach(list => all.push(list));

  all.forEach(element => {
    Timeline.from(element, 0.3, { autoAlpha: 0, y: -50 }, "-=.15");
  });
});
