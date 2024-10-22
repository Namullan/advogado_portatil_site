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

// Adicionar funcionalidade adicional conforme necessário
