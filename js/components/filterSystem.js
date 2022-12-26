import data from '../../data.json' assert {type: 'json'};

const filterSystem = {
    init: function () {
        this.fillOptions();

        console.log('Filter system OK')
    },
    fillOptions: function () {
        //? Getting every game engines, languages and platforms from JSON datas
        let gameEngines = [],
            languages = [],
            platforms = [];
        
        data.projects.forEach(project => {
            // Game engine
            if (!gameEngines.includes(project.gameEngine)) {
                gameEngines.push(project.gameEngine);
            }

            // Language
            if (!languages.includes(project.language)) {
                languages.push(project.language);
            }

            // Platform
            if (!platforms.includes(project.platform)) {
                platforms.push(project.platform);
            }
        });

        //? Filling filters options
        const gameEngineSelectElm = document.querySelector('select#engine');
        const languageSelectElm = document.querySelector('select#language');
        const platformSelectElm = document.querySelector('select#platform');

        gameEngines.forEach(engine => {
            const newOption = document.createElement('option');
            newOption.innerText = engine;
            
            gameEngineSelectElm.appendChild(newOption);
        });

        languages.forEach(language => {
            const newOption = document.createElement('option');
            newOption.innerText = language;
            
            languageSelectElm.appendChild(newOption);
        });

        platforms.forEach(platform => {
            const newOption = document.createElement('option');
            newOption.innerText = platform;
            
            platformSelectElm.appendChild(newOption);
        });
    }
}

export default filterSystem;