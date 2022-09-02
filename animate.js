gsap.registerPlugin(ScrollTrigger);

gsap.to(".mypicture", {
  x: "92vw",
  duration: 1,
  yoyo: true,
  // repeat: -1,
  ease: "power4.out",

  scrollTrigger: {
    trigger: ".stories-card",
    start: "top top",
    end: "bottom top",
    toggleActions: "restart pause reverse pause",
    // toggleClass: "red",
  },
});

gsap.from("#main-header", {
  x: -200,
  y: -200,
  opacity: 0,
  duration: 0.1,
  scale: "1.5",
  scrollTrigger: {
    trigger: "#main-header",
    toggleActions: "restart pause reverse pause",
    start: "top 35%",
    end: "top 40%",
    scrub: 1,
  },
});

gsap.from("#About", {
  x: -500,
  opacity: 0,
  duration: 0.9,
  scrollTrigger: {
    trigger: ".stories-card",
    start: "bottom 50%",
    toggleActions: "restart pause reverse pause",
    scrub: 1,
    // toggleClass: "red",
  },
});


gsap.from(".conclusion-text", {
  x: -1000,
  duration: 0.9,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "#langs",
    toggleActions: "restart pause reverse pause",
    start: "bottom 85%",
    end: "bottom 60%",
    scrub: 1,
  },
});

gsap.from("#Contact", {
  y: 600,
  duration: 0.5,
  yoyo: true,
  ease: "power4.out",

  scrollTrigger: {
    trigger: "#langs",
    toggleActions: "restart pause reverse pause",
    start: "bottom 85%",
    end: "bottom 55%",
    scrub: 1,
  },
});
