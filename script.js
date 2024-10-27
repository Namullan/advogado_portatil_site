// Modificar o script de toggle do menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navButtons = document.querySelector('.nav-buttons');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navButtons.classList.toggle('active');
    });
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

// Cards da srção Funcionalidades - Ativação automática em dispositivos móveis
document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        const cards = document.querySelectorAll('.feature-card');
        
        // Adiciona classe inicial para animação
        cards.forEach(card => {
            card.classList.add('animate-in');
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Pequeno delay para cada card
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('show-mobile');
                    }, Array.from(cards).indexOf(entry.target) * 150); // 150ms de delay entre cada card
                } else {
                    // Suaviza a saída também
                    entry.target.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.classList.remove('show-mobile');
                }
            });
        }, {
            threshold: 0.2, // Reduzido para começar a animação mais cedo
            rootMargin: '-10% 0px'
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    } else {
        // Mantém o comportamento desktop existente
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const wasActive = this.classList.contains('show-mobile');
                
                // Adiciona transição suave para todos os cards
                cards.forEach(c => {
                    c.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                    c.classList.remove('show-mobile');
                });
                
                if (!wasActive) {
                    setTimeout(() => {
                        this.classList.add('show-mobile');
                    }, 50); // Pequeno delay para suavizar a transição
                }
            });
        });
    }
});

// Script do Pop-up de "Em breve"
function createDownloadPopup() {
    const downloadButtons = document.querySelectorAll('.call-to-action .btn, .download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const existingPopup = document.querySelector('.download-popup');
            if (existingPopup) {
                existingPopup.remove();
            }
            
            const popup = document.createElement('div');
            popup.className = 'download-popup';
            popup.innerHTML = `
                <div class="popup-content">
                    <button class="close-popup" aria-label="Fechar">×</button>
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
            
            document.body.appendChild(popup);
            
            // Adiciona evento de clique no botão fechar
            const closeBtn = popup.querySelector('.close-popup');
            closeBtn.addEventListener('click', () => {
                popup.classList.add('fade-out');
                setTimeout(() => popup.remove(), 300);
            });
            
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    popup.classList.add('fade-out');
                    setTimeout(() => popup.remove(), 300);
                }
            });
            
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.classList.add('fade-out');
                    setTimeout(() => popup.remove(), 300);
                }
            }, 4000);
        });
    });
}

// Função para criar o grid e animar células aleatórias
function createTechGrid() {
    const grid = document.querySelector('.tech-grid');
    const rows = 20;
    const cols = 20;
    
    // Criar células do grid
    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        grid.appendChild(gridItem);
    }
    
    // Animar células aleatórias
    setInterval(() => {
        const items = document.querySelectorAll('.grid-item');
        items.forEach(item => item.classList.remove('active'));
        
        const numActive = Math.floor(Math.random() * 10) + 5; // 5-15 células ativas
        for (let i = 0; i < numActive; i++) {
            const randomIndex = Math.floor(Math.random() * items.length);
            items[randomIndex].classList.add('active');
        }
    }, 2000);
}

// Função para criar partículas flutuantes
function createParticles() {
    const container = document.querySelector('.floating-particles');
    const numParticles = 20;
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posição inicial aleatória
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        
        container.appendChild(particle);
    }
}

// Inicializa todas as funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    toggleTitles();
    createDownloadPopup();
    createTechGrid();
    createParticles();
});