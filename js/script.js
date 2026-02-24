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
// Project filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projects.forEach(project => {
            if (filter === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display =
                    project.classList.contains(filter) ? 'block' : 'none';
            }
        });
    });
});
