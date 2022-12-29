import data from '../../data.js';

const filterSystem = {
    init: function () {
        this.fillOptions();

        document.querySelector('select#engine').addEventListener('change', this.handleSelection);
        document.querySelector('select#language').addEventListener('change', this.handleSelection);
        document.querySelector('select#platform').addEventListener('change', this.handleSelection);
        

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
            newOption.textContent = engine;
            newOption.value = engine;
            
            gameEngineSelectElm.appendChild(newOption);
        });

        languages.forEach(language => {
            const newOption = document.createElement('option');
            newOption.textContent = language;
            newOption.value = language;
            
            languageSelectElm.appendChild(newOption);
        });

        platforms.forEach(platform => {
            const newOption = document.createElement('option');
            newOption.textContent = platform;
            newOption.value = platform;
            
            platformSelectElm.appendChild(newOption);
        });
    },
    handleSelection: function (event) {
        //? Getting elements
        const gameEngineSelectElm = document.querySelector('select#engine');
        const languageSelectElm = document.querySelector('select#language');
        const platformSelectElm = document.querySelector('select#platform');

        //? Reseting game engine if language is changed and vice versa
        if (event.currentTarget === gameEngineSelectElm) {
            languageSelectElm.selectedIndex = 0;
        } else if (event.currentTarget === languageSelectElm) {
            gameEngineSelectElm.selectedIndex = 0;
        }
       
        //? Filtering
        document.querySelectorAll('.project-list article').forEach(project => {
            const isGameEngineValid = project.querySelector('.engine').textContent === gameEngineSelectElm.value || gameEngineSelectElm.selectedIndex === 0;
            const isLanguageValid = project.querySelector('.language').textContent === languageSelectElm.value || languageSelectElm.selectedIndex === 0;
            const isPlatformValid = project.querySelector('.platform').textContent === platformSelectElm.value || platformSelectElm.selectedIndex === 0;
            if (isGameEngineValid && isLanguageValid && isPlatformValid) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
}

export default filterSystem;