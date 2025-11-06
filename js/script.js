// Основной JavaScript для главной страницы

document.addEventListener('DOMContentLoaded', function() {
    // Добавляем текущий год в футер
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} DLS - Dolores Squad List. Все права защищены.`;
    }
    
    // Добавляем обработчики для карточек демонов на главной странице
    const demonCards = document.querySelectorAll('.demon-card');
    demonCards.forEach(card => {
        card.addEventListener('click', function() {
            const demonId = this.getAttribute('data-id');
            if (demonId) {
                openDemonModal(demonId);
            }
        });
    });
    
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});