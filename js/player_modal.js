// ОТДЕЛЬНЫЙ JavaScript для модальных окон игроков
// БЛЯТЬ КАКОГО ХУЯ Я 4 ЕБАНЫХ ЧАСА С ЭТИМ ЕБАЛСЯ?!?!
// Данные для игроков (расширенные с видео)
const playerDetails = {
    1: {
        name: "DoloreskingGMD",
        points: 112.2,
        demons: 4,
        extremes: 0,
        country: "Kazahstan",
        joinDate: "2025",
        completedDemons: [
            {name: "Beetle", position: 1, difficulty: "insane", points: 50.1, videoId: "uBoeNsbdCkA?si=3ZqdwutFK5MuCfvX"},
            {name: "Acropolis", position: 2, difficulty: "insane", points: 37.2, videoId: "pHBFPKlUXIc?si=LNQvOJJ9ciiYqa7G"},
            {name: "Psychosis", position: 4, difficulty: "hard", points: 24.9, videoId: "VFJiTCMAjoc?si=3j56Uuy1s1mttH9Q"}
        ],
        description: "Основатель DLS."
    },
    2: {
        name: "Walen0k",
        points: 30.4,
        demons: 1,
        extremes: 0,
        country: "Russia",
        joinDate: "2025",
        completedDemons: [
            {name: "Crazy II", position: 3, difficulty: "insane", points: 30.4, videoId: "p37bPqFSf7M?si=c3EIGSPF9yj-TYDm"}
        ],
        description: "Создатель Листа"
    },
    3: {
        name: "Alien Muha",
        points: 3.6,
        demons: 4,
        extremes: 0,
        country: "Russia",
        joinDate: "2025",
        completedDemons: [
            {name: "Sakupen Egg", position: 6, difficulty: "medium", points: 1.5, videoId: "M61Vqi6ryj8"},
            {name: "Xstep v2", position: 7, difficulty: "easy", points: 0.8, videoId: "K9rBb0HVvMg"},
            {name: "Speed Racer", position: 8, difficulty: "easy", points: 0.7, videoId: "R8RsJVKKd8w"},
            {name: "Problematic", position: 9, difficulty: "easy", points: 0.6, videoId: "N18tn6vfyGg"}
        ],
        description: ""
    },
    4: {
        name: "Dracolord",
        points: 0.1,
        demons: 1,
        extremes: 0,
        country: "Russia",
        joinDate: "2023",
        completedDemons: [
            {name: "The Nightmare", position: 11, difficulty: "easy", points: 0.1, videoId: "i0dlZgqA8ds"}
        ],
        description: ""
    }
};

// Функция для открытия модального окна с игроком
window.openPlayerModal = function(playerId) {
    const player = playerDetails[playerId];
    if (!player) return;
    
    const modalContent = document.getElementById('player-modal-content');
    modalContent.innerHTML = `
        <div class="player-details">
            <h2>${player.name}</h2>
            
            <div class="player-header">
                <div class="player-avatar-large">
                    <i class="fas fa-user"></i>
                </div>
                <div class="player-basic-info">
                    <h3>${player.name}</h3>
                    <div class="player-country">Страна: ${player.country}</div>
                    <div class="player-join-date">В списке с: ${player.joinDate}</div>
                </div>
            </div>
            
            <div class="player-stats-detailed">
                <div class="player-stat-card">
                    <h4>Общие очки</h4>
                    <div class="stat-value">${player.points}</div>
                    <div class="stat-label">Всего заработано</div>
                </div>
                <div class="player-stat-card">
                    <h4>Пройдено демонов</h4>
                    <div class="stat-value">${player.demons}</div>
                    <div class="stat-label">Всего уровней</div>
                </div>
                <div class="player-stat-card">
                    <h4>Позиция в топе</h4>
                    <div class="stat-value">#${playerId}</div>
                    <div class="stat-label">Место в рейтинге</div>
                </div>
            </div>
            
            <div class="player-completed-demons">
                <h3>Пройденные демоны</h3>
                <div class="completed-demons-list">
                    ${player.completedDemons.map(demon => `
                        <div class="completed-demon" onclick="openPlayerVideoModal('${demon.videoId}', '${demon.name}', ${playerId})">
                            <div class="completed-demon-info">
                                <div class="completed-demon-position">#${demon.position}</div>
                                <div class="completed-demon-name">${demon.name}</div>
                                <div class="completed-demon-difficulty difficulty-${demon.difficulty}">${demon.difficulty}</div>
                            </div>
                            <div class="completed-demon-points">+${demon.points}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="player-description">
                <h3>Об игроке</h3>
                <p>${player.description}</p>
            </div>
        </div>
    `;
    
    document.getElementById('player-modal').style.display = 'block';
};

// Функция для открытия видео прохождения игрока
window.openPlayerVideoModal = function(videoId, demonName, playerId) {
    const modalContent = document.getElementById('player-video-modal-content');
    modalContent.innerHTML = `
        <div class="video-modal">
            <h2>${playerDetails[playerId].name} - ${demonName}</h2>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${videoId}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
            <div class="video-actions">
                <button class="btn btn-primary" onclick="closePlayerVideoModal(); openPlayerModal(${playerId})">
                    <i class="fas fa-arrow-left"></i> Назад к игроку
                </button>
                <button class="btn btn-secondary" onclick="window.open('https://youtube.com/watch?v=${videoId}', '_blank')">
                    <i class="fab fa-youtube"></i> Открыть на YouTube
                </button>
            </div>
        </div>
    `;
    
    // Закрываем модал игрока и открываем модал видео
    document.getElementById('player-modal').style.display = 'none';
    document.getElementById('player-video-modal').style.display = 'block';
};

// Функция для закрытия модального окна игрока
window.closePlayerModal = function() {
    document.getElementById('player-modal').style.display = 'none';
};

// Функция для закрытия модального окна видео игрока
window.closePlayerVideoModal = function() {
    document.getElementById('player-video-modal').style.display = 'none';
};

// Закрытие при клике вне модального окна
document.addEventListener('DOMContentLoaded', function() {
    // Для модала игрока
    document.getElementById('player-modal').addEventListener('click', function(event) {
        if (event.target === this) {
            closePlayerModal();
        }
    });
    
    // Для модала видео игрока
    document.getElementById('player-video-modal').addEventListener('click', function(event) {
        if (event.target === this) {
            closePlayerVideoModal();
        }
    });
});