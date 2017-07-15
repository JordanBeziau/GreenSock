import { TweenLite, CSSPlugin } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("h2"),
    img = document.querySelector("img"),
    h1 = document.querySelector("h1"),
    p = document.querySelector("p");

  TweenLite.from(h1, 1, { autoAlpha: 0, y: 50 });
  TweenLite.from(p, 1, { autoAlpha: 0, y: 50, delay: 0.5 });
  TweenLite.fromTo(
    img,
    1,
    { autoAlpha: 0, x: "-50%" },
    { autoAlpha: 1, x: "50%", delay: 1 }
  );
  TweenLite.fromTo(
    header,
    1,
    { autoAlpha: 0, x: "50%" },
    { autoAlpha: 1, x: "-50%", delay: 1 }
  );
  TweenLite.to(img, 0.5, { x: "0%", delay: 2 });
  TweenLite.to(header, 0.5, { x: "0%", delay: 2 });

  TweenLite.to(h1, 1, { autoAlpha: 0, x: -300, delay: 4 });
  TweenLite.to(p, 1, { autoAlpha: 0, x: 300, delay: 4 });
  TweenLite.to(img, 1, { autoAlpha: 0, x: -300, delay: 4 });
  TweenLite.to(header, 1, { autoAlpha: 0, x: 300, delay: 4 });
});
