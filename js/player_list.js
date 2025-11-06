// JavaScript для страницы списка игроков

document.addEventListener('DOMContentLoaded', function() {
    const playerList = document.querySelector('.player-list');
    
    // Данные игроков с очками
    const players = [
        { 
            id: 1, 
            name: "DoloreskingGMD", 
            points: 112.2, 
            demons: 4, 
            extremes: 0, 
            country: "Kazahstan",
            joinDate: "2025",
            completedDemons: [
                {name: "Beetle", position: 1, difficulty: "insane", points: 50.1},
                {name: "Acropolis", position: 2, difficulty: "insane", points: 37.2},
                {name: "Psychosis", position: 4, difficulty: "hard", points: 24.9}
            ]
        },
        { 
            id: 2, 
            name: "Walen0k", 
            points: 30.4, 
            demons: 1, 
            extremes: 0, 
            country: "Russia",
            joinDate: "2025",
            completedDemons: [
                {name: "Crazy II", position: 3, difficulty: "insane", points: 30.4}
            ]
        },
        { 
            id: 3, 
            name: "Alien Muha", 
            points: 3.6, 
            demons: 4, 
            extremes: 0, 
            country: "Russia",
            joinDate: "2025",
            completedDemons: [
                {name: "Sakupen Egg", position: 6, difficulty: "medium", points: 1.5},
                {name: "Xstep v2", position: 7, difficulty: "easy", points: 0.8},
                {name: "Speed Racer", position: 8, difficulty: "easy", points: 0.7},
                {name: "Problematic", position: 9, difficulty: "easy", points: 0.6}
            ]
        },

        { 
            id: 4, 
            name: "Dracolord", 
            points: 0.1, 
            demons: 1, 
            extremes: 0, 
            country: "Russia",
            joinDate: "2023",
            completedDemons: [
                {name: "The Nightmare", position: 11, difficulty: "easy", points: 0.1}
            ]
        },
    ];
    
    // Сортируем игроков по очкам (по убыванию)
    players.sort((a, b) => b.points - a.points);
    
    // Функция для отображения игроков
    function displayPlayers() {
        playerList.innerHTML = '';
        
        players.forEach((player, index) => {
            // Обновляем позицию после сортировки
            player.position = index + 1;
            
            const playerItem = document.createElement('div');
            playerItem.className = 'player-item';
            playerItem.setAttribute('onclick', `openPlayerModal(${player.id})`);
            playerItem.innerHTML = `
                <div class="player-position">#${player.position}</div>
                <div class="player-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="player-info">
                    <h3 class="player-name">${player.name}</h3>
                    <div class="player-stats">
                        <div class="player-stat">
                            <i class="fas fa-flag"></i>
                            <span>${player.country}</span>
                        </div>
                        <div class="player-stat">
                            <i class="fas fa-skull"></i>
                            <span>Демонов: ${player.demons}</span>
                        </div>
                        <div class="player-stat">
                            <i class="fas fa-fire"></i>
                            <span>В списке с: ${player.joinDate}</span>
                        </div>
                    </div>
                </div>
                <div class="player-points">${player.points} pts</div>
            `;
            playerList.appendChild(playerItem);
        });
    }
    
    // Инициализация игроков
    displayPlayers();
});