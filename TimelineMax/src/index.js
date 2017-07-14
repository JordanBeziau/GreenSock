import { TimelineMax, TimelineLite } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const Timeline = new TimelineLite({ paused: true });
  const all = Array.from(document.querySelectorAll("header > *:not(ul)")),
    lists = Array.from(document.querySelectorAll("header ul > li")),
    loader = document.getElementById("loader"),
    dots = document.querySelectorAll(".dot"),
    TimelineLoad = new TimelineMax({ repeat: 2, onComplete: loadContent });

  Timeline.set(document.getElementById("header"), { opacity: 1 });
  lists.forEach(list => all.push(list));
  all.forEach(element => {
    Timeline.from(element, 0.3, { autoAlpha: 0, y: -50 }, "-=.15");
  });

  TimelineLoad.staggerFromTo(
    dots,
    0.3,
    { y: -30, autoAlpha: 0 },
    { y: 20, autoAlpha: 1 },
    0.05
  ).fromTo(
    loader,
    0.3,
    { autoAlpha: 1, scale: 1.3 },
    { autoAlpha: 0, scale: 1 },
    0.9
  );

  function loadContent() {
    const TimelineLoaderOut = new TimelineLite({ onComplete: displayContent });
    TimelineLoaderOut.set(dots, { backgroundColor: "#2b4d66" })
      .to(loader, 0.3, {
        autoAlpha: 1,
        scale: 1.3
      })
      .staggerFromTo(
        dots,
        0.3,
        { y: -30, autoAlpha: 0 },
        { y: 20, autoAlpha: 1 },
        0.05,
        "-=0.2"
      )
      .to(loader, 0.3, { y: -150, autoAlpha: 0 }, "+=0.3");
  }

  function displayContent() {
    Timeline.play();
  }
});
