// JavaScript для модальных окон Next Demons

// Данные для демонов в процессе верификации
const nextDemonDetails = {
    1: {
        name: "ACU",
        verifier: "Walen0k",
        progress: 74,
        videoId: "ZLAAxK_yZLs",
        levelId: "Неизвестно",
        difficulty: "Insane Demon",
        description: "ACU - сложный Insane Demon в процессе верификации.",
        status: "verifying",
        startDate: "2024-01-15",
    },
    2: {
        name: "Void Wave",
        verifier: "DoloresKingGMD", 
        progress: 39,
        videoId: "ufo_1lwptQY",
        levelId: "Неизвестно",
        difficulty: "Extreme Demon",
        description: "Void Wave - Extreme Demon в процессе верификации.",
        status: "progress",
        startDate: "2024-01-10",
    }
};

// Функция для открытия модального окна с демоном
window.openNextDemonModal = function(demonId) {
    const demon = nextDemonDetails[demonId];
    if (!demon) return;
    
    const modalContent = document.getElementById('next-demon-modal-content');
    modalContent.innerHTML = `
        <div class="next-demon-details">
            <h2>${demon.name}</h2>
            
            <div class="demon-progress-info">
                <div class="progress-group">
                    <h3>Информация</h3>
                    <p><strong>Верификатор:</strong> ${demon.verifier}</p>
                    <p><strong>Сложность:</strong> ${demon.difficulty}</p>
                    <p><strong>ID уровня:</strong> ${demon.levelId}</p>
                    <p><strong>Статус:</strong> ${demon.status === 'verifying' ? 'Верификация' : 'В процессе'}</p>
                </div>
                
                <div class="progress-group">
                    <h3>Прогресс</h3>
                    <p><strong>Начало:</strong> ${demon.startDate}</p>
                    
                    <div class="large-progress-container">
                        <div class="large-progress-bar" style="width: ${demon.progress}%"></div>
                    </div>
                    <div class="large-progress-text">Прогресс: ${demon.progress}%</div>
                </div>
            </div>
            
            <div class="progress-description">
                <h3>Описание</h3>
                <p>${demon.description}</p>
            </div>
            
            <div class="progress-video">
                <h3>Прогресс прохождения</h3>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/${demon.videoId}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                </div>
                <div class="video-actions">
                    <button class="btn btn-secondary" onclick="window.open('https://youtube.com/watch?v=${demon.videoId}', '_blank')">
                        <i class="fab fa-youtube"></i> Открыть на YouTube
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('next-demon-modal').style.display = 'block';
};

// Функция для закрытия модального окна
window.closeNextDemonModal = function() {
    document.getElementById('next-demon-modal').style.display = 'none';
};

// Закрытие при клике вне модального окна
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('next-demon-modal').addEventListener('click', function(event) {
        if (event.target === this) {
            closeNextDemonModal();
        }
    });
});