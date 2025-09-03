const sr = ScrollReveal({ reset: true });

sr.reveal(".text-home h1", {
  origin: "top",
  distance: "150px",
  duration: 1200,
  delay: 550,
});

sr.reveal(".text-home span", {
  origin: "top",
  distance: "100px",
  duration: 1000,
  delay: 500,
});

sr.reveal(".redes-sociais", {
  origin: "left",
  distance: "100px",
  duration: 1000,
  delay: 300,
});

sr.reveal(".about-content", {
  rotate: {
    x: 100,
    y: 100,
    z: 100,
  },
  duration: 1100,
  delay: 200,
});
