
function toggleCase(header) {
    const body = header.nextElementSibling;
    const toggle = header.querySelector('.cs-toggle');
    body.classList.toggle('open');
    toggle.classList.toggle('open');
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
document.querySelectorAll('.brands-grid .brand-card,.exp-grid .exp-card,.certs-grid .cert-card').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.08) + 's';
});
