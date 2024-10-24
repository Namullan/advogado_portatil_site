// Criar grid de fundo
function createTechGrid() {
    const grid = document.querySelector('.tech-grid');
    const rows = 20;
    const cols = 20;
    
    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        grid.appendChild(gridItem);
    }
    
    // Animar grid items aleatoriamente
    setInterval(() => {
        const items = document.querySelectorAll('.grid-item');
        items.forEach(item => item.classList.remove('active'));
        
        const numActive = Math.floor(Math.random() * 10) + 5;
        for (let i = 0; i < numActive; i++) {
            const randomIndex = Math.floor(Math.random() * items.length);
            items[randomIndex].classList.add('active');
        }
    }, 2000);
}

// Criar partículas flutuantes
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

// Função para criar o pop-up de download
function createDownloadPopup() {
    // Seleciona todos os botões de download
    const downloadButtons = document.querySelectorAll('.download-button');
    
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

// Inicializar elementos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    createTechGrid();
    createParticles();
    createDownloadPopup(); // Adicionando a inicialização do pop-up
});