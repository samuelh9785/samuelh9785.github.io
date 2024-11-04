import data from '../../data.js';

const filterSystem = {
    init: function () {
        this.fillOptions();

        document.querySelector('input#search').addEventListener('input', this.handleSearch);
        document.querySelectorAll('.filters input').forEach(input => {
            input.addEventListener('change', this.handleSelection);
        });

        document.querySelector('.filter-system .reset-wrapper button').addEventListener('click', this.handleReset);

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
            project.platforms.forEach(platform => {
                if (!platforms.includes(platform)) {
                    platforms.push(platform);
                }
            });
        });

        //? Filling filters options
        const gameEngineListElm = document.querySelector('.filters.engine ul');
        const languageListElm = document.querySelector('.filters.language ul');
        const platformListElm = document.querySelector('.filters.platform ul');

        gameEngines.forEach(engine => {
            // <li><input type="radio" name="engine" id=""><label for=""><img src="./image/favicon/smth.svg" alt="">Name</label></li>
            const liElm = document.createElement('li');
            const inputElm = document.createElement('input');
            const labelElm = document.createElement('label');
            
            engine = engine.charAt(0).toUpperCase() + engine.slice(1);
            const snakeCaseEngine = engine.toLowerCase().replaceAll(' ', '-').replaceAll(/[^a-z]/g, '');
            
            inputElm.type = 'radio';
            inputElm.name = 'engine';
            inputElm.id = snakeCaseEngine;
            liElm.appendChild(inputElm)
            
            labelElm.setAttribute('for', snakeCaseEngine);
            labelElm.textContent = engine;
            liElm.appendChild(labelElm);
            
            if (data.images[engine] === undefined || data.images[engine] !== null) {
                const imgElm = document.createElement('img');

                imgElm.src = './image/icon/' + (data.images[engine] === undefined ? engine+'.svg' : data.images[engine]);
                imgElm.alt = `${engine} icon`
                labelElm.prepend(imgElm);
            }

            gameEngineListElm.appendChild(liElm);
        });

        languages.forEach(language => {
            // <li><input type="radio" name="language" id=""><label for=""><img src="./image/favicon/smth.svg" alt="">Name</label></li>
            const liElm = document.createElement('li');
            const inputElm = document.createElement('input');
            const labelElm = document.createElement('label');
            
            language = language.charAt(0).toUpperCase() + language.slice(1);
            const snakeCaseLanguage = language.toLowerCase().replaceAll(' ', '-').replaceAll(/[^a-z]/g, '');
            
            inputElm.type = 'radio';
            inputElm.name = 'language';
            inputElm.id = snakeCaseLanguage;
            liElm.appendChild(inputElm)
            
            labelElm.setAttribute('for', snakeCaseLanguage);
            labelElm.textContent = language;
            liElm.appendChild(labelElm);
            
            if (data.images[language] === undefined || data.images[language] !== null) {
                const imgElm = document.createElement('img');
                
                imgElm.src = './image/icon/' + (data.images[language] === undefined ? language+'.svg' : data.images[language]);
                imgElm.alt = `${language} icon`
                labelElm.prepend(imgElm);
            }

            languageListElm.appendChild(liElm);
        });

        platforms.forEach(platform => {
            // <li><input type="checkbox" name="platform" id=""><label for=""><img src="./image/favicon/smth.svg" alt="">Name</label></li>
            const liElm = document.createElement('li');
            const inputElm = document.createElement('input');
            const labelElm = document.createElement('label');
            
            platform = platform.charAt(0).toUpperCase() + platform.slice(1);
            const snakeCasePlatform = platform.toLowerCase().replaceAll(' ', '-').replaceAll(/[^a-z]/g, '');
            
            inputElm.type = 'checkbox';
            inputElm.name = 'platform';
            inputElm.id = snakeCasePlatform;
            liElm.appendChild(inputElm)
            
            labelElm.setAttribute('for', snakeCasePlatform);
            labelElm.textContent = platform;
            liElm.appendChild(labelElm);
            
            const imgElm = document.createElement('img');
                
            imgElm.src = './image/icon/' + (data.images[platform] === undefined ? platform+'.svg' : data.images[platform]);
            imgElm.alt = `${platform} icon`
            labelElm.prepend(imgElm);

            platformListElm.appendChild(liElm);
        });
    },
    refreshResetButtonDisplay: function () {
        if (document.querySelector('input#search').value !== ''
        || document.querySelector('input[name=engine]:checked') !== null
        || document.querySelector('input[name=language]:checked') !== null
        || document.querySelector('input[name=platform]:checked') !== null) {
            document.querySelector('.filter-system .reset-wrapper button').classList.remove('hidden');
        } else {
            document.querySelector('.filter-system .reset-wrapper button').classList.add('hidden');
        }
    },
    handleSearch: function (event) {
        const searchedValue = event.currentTarget.value.trim();

        //? Show reset button if needed
        filterSystem.refreshResetButtonDisplay();

        document.querySelectorAll('.project-list article').forEach(project => {
            project.style.display = 
                project.querySelector('h3[lang=fr]').textContent.toLowerCase().includes(searchedValue) 
                || project.querySelector('h3[lang=en]').textContent.toLowerCase().includes(searchedValue) 
                || searchedValue === '' ? 'block' : 'none';
        });
    },
    handleSelection: function (event) {
        //? Getting elements
        const gameEngineListElm = document.querySelector('.filters.engine ul');
        const languageListElm = document.querySelector('.filters.language ul');

        //? Reseting game engine if language is changed and vice versa
        if (event.currentTarget.closest('ul') === gameEngineListElm && document.querySelector('input[name=language]:checked') !== null) {
            document.querySelector('input[name=language]:checked').checked = false;
        } else if (event.currentTarget.closest('ul') === languageListElm && document.querySelector('input[name=engine]:checked') !== null) {
            document.querySelector('input[name=engine]:checked').checked = false;
        }

        //? Show reset button if needed
        filterSystem.refreshResetButtonDisplay();
       
        //? Filtering
        const engineSearched = document.querySelector('input[name=engine]:checked') !== null ? document.querySelector('input[name=engine]:checked').id : null;
        const languageSearched = document.querySelector('input[name=language]:checked') !== null ? document.querySelector('input[name=language]:checked').id : null;
        const platformsSearched = Array.from(document.querySelectorAll('input[name=platform]:checked')).map(platform => {return platform.id;});

        document.querySelectorAll('.project-list article').forEach(project => {
            if (
                (project.dataset.engine === engineSearched || engineSearched === null) 
                && (project.dataset.language === languageSearched || languageSearched === null) 
                && (project.dataset.platforms.split(',').some(platform => platformsSearched.includes(platform)) || platformsSearched.length === 0) 
            ) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    },
    handleReset: function () {
        document.querySelector('input#search').value = '';

        if (document.querySelector('input[name=language]:checked') !== null) {
            document.querySelector('input[name=language]:checked').checked = false;
        }

        if (document.querySelector('input[name=engine]:checked') !== null) {
            document.querySelector('input[name=engine]:checked').checked = false;
        }

        document.querySelectorAll('input[name=platform]:checked').forEach(platform => {
            platform.checked = false;
        });

        // Trigger change event to update project list
        document.querySelector('input#search').dispatchEvent(new Event('change'));
        document.querySelector('input[name=engine]').dispatchEvent(new Event('change'));
    },
    refreshLanguage: function () {
        if (document.querySelector('html').getAttribute('lang') === 'en') {
            document.querySelector('input#search').setAttribute('placeholder', 'Search...');
            document.querySelector('.filters.engine   h3').textContent = 'Game engine';
            document.querySelector('.filters.language h3').textContent = 'Language';
            document.querySelector('.filters.platform h3').textContent = 'Platform';
            document.querySelector('.filter-system [type=reset]').textContent = 'Reset';
        } else {
            document.querySelector('input#search').setAttribute('placeholder', 'Recherche...');
            document.querySelector('.filters.engine   h3').textContent = 'Moteur de jeu';
            document.querySelector('.filters.language h3').textContent = 'Langage';
            document.querySelector('.filters.platform h3').textContent = 'Plateforme';
            document.querySelector('.filter-system [type=reset]').textContent = 'Réinitialiser';
        }
    },
}

export default filterSystem;