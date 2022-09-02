gsap.registerPlugin(ScrollTrigger);

gsap.from(".stories-card", {
  duration: 0.4,
  scale: "1.1",
  yoyo: true,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    // markers: { startColor: "blue", endColor: "yellow", fontSize: "4rem", indent: 200 },
    trigger: "#Portfolio",
    toggleActions: "restart pause reverse pause",
    start: "top 70%",
    end: "top 68%",
    scrub: 3,
    // toggleClass: "red",
  },
});
