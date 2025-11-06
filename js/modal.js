// JavaScript для модальных окон

document.addEventListener('DOMContentLoaded', function() {
    // Получаем модальное окно
    const modal = document.getElementById('demon-modal');
    const closeBtn = document.querySelector('.close');
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Данные для демонов (расширенные)
    const demonDetails = {
        1: {
            name: "Beetle",
            creator: "Cirtrax",
            difficulty: "insane",
            levelId: "61366260",
            scores: 50.1,
            beted: "DoloreskingGMD",
            position: 1,
            description: "Beetle - сложный Insane Demon от Cirtrax.",
            videoId: "LRJib9DTEOE?si=9bKJu7sHoHnYWvL8" // Замените на реальный ID видео
        },
        2: {
            name: "Acropolis",
            creator: "Zobros",
            difficulty: "insane",
            levelId: "5155022",
            scores: 37.2,
            beted: "DoloreskingGMD",
            position: 2,
            description: "Acropolis - известный Insane Demon от Zobros.",
            videoId: "SSAfuCZ2cks?si=VEpokYJcdEti1eU5"
        },
        3: {
            name: "Crazy II",
            creator: "DavJT",
            difficulty: "insane",
            levelId: "47620786",
            scores: 30.4,
            beted: "Walen0k",
            position: 3,
            description: "Crazy II - сложный Insane Demon от DavJT.",
            videoId: "eGPNEaZV6cc?si=tC8OArvxMYAFEXzo"
        },
        4: {
            name: "Psychosis",
            creator: "Hinds",
            difficulty: "hard",
            levelId: "15855959",
            scores: 24.9,
            beted: "DoloreskingGMD",
            position: 4,
            description: "Psychosis - Hard Demon от Hinds.",
            videoId: "DKRI2lK1oYE?si=VffrePBJ8vVwrDfP"
        },
        5: {
            name: "Future Funk",
            creator: "JonathanGD",
            difficulty: "hard",
            levelId: "44062068",
            scores: 21.5,
            beted: "EndermitGD",
            position: 5,
            description: "Future Funk - популярный Hard Demon от JonathanGD.",
            videoId: "LUORMA2NvmM?si=n8PaYBtUvzAgXEYp"
        },
        6: {
            name: "Sakupen Egg",
            creator: "Неизвестно",
            difficulty: "medium",
            levelId: "Неизвестно",
            scores: 1.5,
            beted: "Alien Muha",
            position: 6,
            description: "Sakupen Egg - Medium Demon.",
            videoId: "M61Vqi6ryj8?si=1YUO-NdIGPQqjYqx"
        },
        7: {
            name: "Xstep v2",
            creator: "Неизвестно",
            difficulty: "easy",
            levelId: "Неизвестно",
            scores: 0.8,
            beted: "Alien Muha",
            position: 7,
            description: "Xstep v2 - Easy Demon.",
            videoId: "K9rBb0HVvMg?si=AjkTXcmpHlX6A1VI"
        },
        8: {
            name: "Speed Racer",
            creator: "Неизвестно",
            difficulty: "easy",
            levelId: "Неизвестно",
            scores: 0.7,
            beted: "Alien Muha",
            position: 8,
            description: "Speed Racer - Easy Demon",
            videoId: "R8RsJVKKd8w?si=6cJut7OvEJIOhatc"
        },
        9: {
            name: "Problematic",
            creator: "Неизвестно",
            difficulty: "easy",
            levelId: "Неизвестно",
            scores: 0.6,
            beted: "Alien Muha",
            position: 9,
            description: "Problematic - классический Easy Demon.",
            videoId: "N18tn6vfyGg?si=G7sZIfI0S-79vkx4"
        },
        10: {
            name: "IS",
            creator: "Неизвестно",
            difficulty: "easy",
            levelId: "Неизвестно",
            scores: 0.5,
            beted: "Alien Muha",
            position: 10,
            description: "IS - простой Easy Demon.",
            videoId: "yn5I1UdZF4c?si=nfXSNTSkEQnlAWJI"
        },
        11: {
            name: "The Nightmare",
            creator: "Неизвестно",
            difficulty: "easy",
            levelId: "Неизвестно",
            scores: 0.1,
            beted: "Dracolord",
            position: 11,
            description: "The Nightmare - самый известный Easy Demon.",
            videoId: "i0dlZgqA8ds?si=vN0YR1c-QruCl6Y2"
        }
    };
    
    // Функция для открытия модального окна с демоном
    window.openDemonModal = function(demonId) {
        const demon = demonDetails[demonId];
        if (!demon) return;
        
        const modalContent = document.getElementById('demon-modal-content');
        modalContent.innerHTML = `
            <div class="demon-details">
                <h2>${demon.name} <span class="demon-position">#${demon.position}</span></h2>
                
                <div class="demon-info">
                    <div class="info-group">
                        <h3>Создатель</h3>
                        <p>${demon.creator}</p>
                    </div>
                    <div class="info-group">
                        <h3>ID уровня</h3>
                        <p>${demon.levelId}</p>
                    </div>
                    <div class="info-group">
                        <h3>Сложность</h3>
                        <p><span class="demon-difficulty difficulty-${demon.difficulty}">${demon.difficulty.charAt(0).toUpperCase() + demon.difficulty.slice(1)} Demon</span></p>
                    </div>
                    <div class="info-group">
                        <h3>Верификатор</h3>
                        <p>${demon.beted}</p>
                    </div>
                </div>
                
                <div class="demon-scores-large">
                    <h3>Очки</h3>
                    <div class="scores-value">${demon.scores}</div>
                </div>
                
                <div class="demon-description">
                    <h3>Описание</h3>
                    <p>${demon.description}</p>
                </div>
                
                <div class="demon-video">
                    <h3>Прохождение на YouTube</h3>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${demon.videoId}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    };
});