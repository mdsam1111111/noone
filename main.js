// custom cursor
let cursor = document.querySelector(".cursor");
let cursorBl = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (location) {
  cursor.style.left = `${location.x}px`;
  cursor.style.top = `${location.y}px`;
  cursorBl.style.left = `${location.x-250}px`;
  cursorBl.style.top = `${location.y-250}px`;
});

// navigation animation
gsap.to(".nav-container", {
  backgroundColor: "#000",
  height: "85px",
  delay: 0.5,
  scrollTrigger: {
    trigger: ".nav-container",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -10%",
    scrub: 1,
  },
});

// first section
gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});
