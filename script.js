// Menu Toggle para Dispositivos Móveis
const menuToggle = document.querySelector('.menu-toggle');
const navButtons = document.querySelector('.nav-buttons');

menuToggle.addEventListener('click', () => {
    navButtons.classList.toggle('active');
});

// Script para navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Script para animação da Seção Hero
function toggleTitles() {
    const title1 = document.getElementById('hero-title-1');
    const title2 = document.getElementById('hero-title-2');
    let isFirstTitle = true;

    setInterval(() => {
        if (isFirstTitle) {
            title1.classList.remove('fade-in');
            title1.classList.add('fade-out');
            title2.classList.remove('fade-out');
            title2.classList.add('fade-in');
        } else {
            title2.classList.remove('fade-in');
            title2.classList.add('fade-out');
            title1.classList.remove('fade-out');
            title1.classList.add('fade-in');
        }
        isFirstTitle = !isFirstTitle;
    }, 5000);
}

document.addEventListener('DOMContentLoaded', toggleTitles);

// Adicionar funcionalidade adicional conforme necessário