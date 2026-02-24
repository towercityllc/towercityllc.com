// Smooth reveal animation on scroll
window.addEventListener("scroll", function() {
  document.querySelectorAll(".service-card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if(position < screenPosition) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
