// JavaScript для страницы демон-листа

document.addEventListener('DOMContentLoaded', function() {
    const demonList = document.querySelector('.demon-list');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Данные демонов (ваш список)
    const demons = [
        { 
            id: 1, 
            name: "Beetle", 
            creator: "Cirtrax", 
            difficulty: "insane", 
            levelId: "61366260",
            scores: 50.1,
            beted: "DoloreskingGMD",
            position: 1,
            description: "Beetle - сложный Insane Demon от Cirtrax.",
            videoId: "LRJib9DTEOE?si=9bKJu7sHoHnYWvL8" // Замените на реальный ID видео YouTube
        },
        { 
            id: 2, 
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
        { 
            id: 3, 
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
        { 
            id: 4, 
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
        { 
            id: 5, 
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
        { 
            id: 6, 
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
        { 
            id: 7, 
            name: "Speed Racer", 
            creator: "Неизвестно", 
            difficulty: "easy", 
            levelId: "Неизвестно",
            scores: 0.7,
            beted: "Alien Muha",
            position: 8,
            description: "Speed Racer - Easy Demon.",
            videoId: "R8RsJVKKd8w?si=6cJut7OvEJIOhatc"
        },
        { 
            id: 8, 
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
        { 
            id: 9, 
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
        { 
            id: 10, 
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
    ];
    
    // Функция для отображения демонов
    function displayDemons(filter = 'all') {
        demonList.innerHTML = '';
        
        const filteredDemons = filter === 'all' 
            ? demons 
            : demons.filter(demon => demon.difficulty === filter);
        
        filteredDemons.forEach(demon => {
            const demonItem = document.createElement('div');
            demonItem.className = 'demon-item';
            demonItem.setAttribute('onclick', `openDemonModal(${demon.id})`);
            demonItem.innerHTML = `
                <div class="demon-position">#${demon.position}</div>
                <div class="demon-main-info">
                    <h3 class="demon-name">${demon.name}</h3>
                    <p class="demon-creator">BY: ${demon.creator}</p>
                    <p class="demon-id">ID: ${demon.levelId}</p>
                    <div class="demon-difficulty difficulty-${demon.difficulty}">${demon.difficulty.charAt(0).toUpperCase() + demon.difficulty.slice(1)} Demon</div>
                </div>
                <div class="demon-side-info">
                    <div class="demon-scores">${demon.scores} очков</div>
                    <div class="demon-beted">Beted: ${demon.beted}</div>
                </div>
            `;
            demonList.appendChild(demonItem);
        });
    }
    
    // Инициализация демонов
    displayDemons();
    
    // Фильтрация демонов
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс к нажатой кнопке
            this.classList.add('active');
            // Фильтруем демоны
            const filter = this.getAttribute('data-filter');
            displayDemons(filter);
        });
    });
});