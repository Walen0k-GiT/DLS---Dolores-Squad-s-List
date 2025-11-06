// JavaScript для страницы Next Demons

document.addEventListener('DOMContentLoaded', function() {
    const nextDemonsList = document.querySelector('.next-demons-list');
    
    // Данные демонов в процессе верификации
    const nextDemons = [
        { 
            id: 1, 
            name: "ACU", 
            verifier: "Walen0k", 
            progress: 74,
            videoId: "ZLAAxK_yZLs",
            levelId: "Неизвестно",
            difficulty: "Insane Demon",
            description: "ACU - сложный Insane Demon в процессе верификации.",
            status: "verifying"
        },
        { 
            id: 2, 
            name: "Void Wave", 
            verifier: "DoloresKingGMD", 
            progress: 39,
            videoId: "ufo_1lwptQY", 
            levelId: "Неизвестно",
            difficulty: "Extreme Demon",
            description: "Void Wave - Extreme Demon с уникальной волновой механикой. Находится в активной стадии прохождения.",
            status: "progress"
        },
        { 
            id: 3, 
            name: "Necropolis", 
            verifier: "what", 
            progress: 0,
            videoId: "",
            levelId: "Неизвестно",
            difficulty: "Insane Demon",
            description: "Necropolis - сложный Insane Demon в процессе верификации.",
            status: "verifying"
        },
        {
            id: 4,
        name: "Windy Landscape",
        verifier: "Alien Muha", 
        progress: 97,
        videoId: "uU4Hng2xuXY",
        levelId: "4957691",
        difficulty: "Insane Demon",
        description: "Windy Landscape - Insane Demon в процессе верификации.",
        status: "progress",
        startDate: "2025-11-06",
    }
        
    ];
    
    // Функция для отображения демонов
    function displayNextDemons() {
        nextDemonsList.innerHTML = '';
        
        nextDemons.forEach(demon => {
            const demonItem = document.createElement('div');
            demonItem.className = 'next-demon-item';
            demonItem.setAttribute('onclick', `openNextDemonModal(${demon.id})`);
            demonItem.innerHTML = `
                <div class="next-demon-main">
                    <h3 class="next-demon-name">${demon.name}</h3>
                    <p class="next-demon-verifier">Verifier: ${demon.verifier}</p>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: ${demon.progress}%"></div>
                    </div>
                    <div class="progress-text">Прогресс: ${demon.progress}%</div>
                </div>
                <div class="next-demon-status">
                    <div class="status-badge status-${demon.status}">
                        ${demon.status === 'verifying' ? 'Верификация' : 'В процессе'}
                    </div>
                    <div class="progress-percent">${demon.progress}%</div>
                </div>
            `;
            nextDemonsList.appendChild(demonItem);
        });
    }
    
    // Инициализация демонов
    displayNextDemons();
});