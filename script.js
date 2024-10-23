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

// Script do Pop-up de "Em breve"
function createDownloadPopup() {
    // Seleciona todos os botões de download
    const downloadButtons = document.querySelectorAll('.call-to-action .btn, .download-btn');
    
    // Adiciona o event listener para cada botão
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove qualquer popup existente
            const existingPopup = document.querySelector('.download-popup');
            if (existingPopup) {
                existingPopup.remove();
            }
            
            // Cria o elemento do popup
            const popup = document.createElement('div');
            popup.className = 'download-popup';
            popup.innerHTML = `
                <div class="popup-content">
                    <div class="popup-icon">
                        <svg viewBox="0 0 24 24" class="icon-app" width="32" height="32">
                            <path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H3V4h18v16z"/>
                            <path fill="currentColor" d="M15 12l-6-4v8z"/>
                        </svg>
                        <div class="icon-ping"></div>
                    </div>
                    <h3>Em breve</h3>
                    <p class="popup-subtitle">Estamos preparando algo incrível para você!</p>
                    <div class="feature-list">
                        <div class="feature-item">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                            </svg>
                            <span>Em desenvolvimento</span>
                        </div>
                        <div class="feature-item">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor" d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3 1.2-6.8-5-4.9 6.9-1z"/>
                            </svg>
                            <span>Novidades em breve</span>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                    <p class="popup-footer">Fique ligado nas nossas redes sociais</p>
                </div>
            `;
            
            // Adiciona o popup ao body
            document.body.appendChild(popup);
            
            // Adiciona evento de clique para fechar o popup ao clicar fora dele
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    popup.classList.add('fade-out');
                    setTimeout(() => popup.remove(), 300);
                }
            });
            
            // Remove o popup após 4 segundos
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.classList.add('fade-out');
                    setTimeout(() => popup.remove(), 300);
                }
            }, 4000);
        });
    });
}

// Inicializa todas as funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    toggleTitles();
    createDownloadPopup();
});