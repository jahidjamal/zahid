// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Contact form submit message
const contactForm = document.querySelector("#contact form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for reaching out, Jahid will get back to you soon!");
    contactForm.reset();
  });
}