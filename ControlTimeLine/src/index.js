import { TimelineLite, CSSPlugin } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const Timeline = new TimelineLite();
  const all = Array.from(document.querySelectorAll("header > *:not(ul)")),
    lists = Array.from(document.querySelectorAll("header ul > li"));

  lists.forEach(list => all.push(list));

  all.forEach(element => {
    Timeline.from(element, 0.3, { autoAlpha: 0, y: -50 }, "-=.10");
  });
  Timeline.pause();

  document
    .getElementById("tlPlay")
    .addEventListener("click", () => Timeline.play());

  document
    .getElementById("tlPause")
    .addEventListener("click", () => Timeline.pause());

  document
    .getElementById("tlResume")
    .addEventListener("click", () => Timeline.resume());

  document
    .getElementById("tlReverse")
    .addEventListener("click", () => Timeline.reverse());

  document
    .getElementById("tlSpeedUp")
    .addEventListener("click", () => Timeline.timeScale(2));

  document
    .getElementById("tlSlow")
    .addEventListener("click", () => Timeline.timeScale(0.5));

  document
    .getElementById("tlSeek")
    .addEventListener("click", () => Timeline.seek(1));

  document
    .getElementById("tlGoTo")
    .addEventListener("click", () => Timeline.progress(0.5)); // 0 start, 1 end

  document
    .getElementById("tlRestart")
    .addEventListener("click", () => Timeline.restart());
});
