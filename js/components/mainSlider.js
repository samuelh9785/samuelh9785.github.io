import BlazeSlider from "../modules/blaze-slider.min.js"
import data from '../../data.js';
import themeManager from "./themeManager.js";

const mainSlider = {
    init: function () {
        themeManager.init();
        
        this.fillSlider();
        this.startSlider();

        console.log('Main slider OK')
    },
    blazeSlider: null,
    fillSlider: function () {
        const template = document.querySelector('#slider-card-template');
        const slider = document.querySelector('#main-slider .blaze-track');
        let slidesCounter = 0;

        data.projects.forEach((project, index) => {
            if (project.isDisplayedInSlider) {
                //? Creating new node
                const newSlide = template.content.cloneNode(true);
    
                //? Filling new node

                // Picture
                newSlide.querySelector('img').src = 'image/' + project.pictures[0];
    
                // Title
                newSlide.querySelector('.desktop-title h3[lang=fr]').textContent = project.name.fr ?? project.name;
                newSlide.querySelector('.desktop-title h3[lang=en]').textContent = project.name.en ?? project.name;
                newSlide.querySelector('h3.mobile-title[lang=fr]').textContent   = project.name.fr ?? project.name;
                newSlide.querySelector('h3.mobile-title[lang=en]').textContent   = project.name.en ?? project.name;
    
                // Engine
                newSlide.querySelector('.title-wrapper .engine').textContent = project.gameEngine;
                newSlide.querySelector('.role-wrapper .engine').textContent  = project.gameEngine;

                if (data.images[project.gameEngine] === undefined || data.images[project.gameEngine] !== null) {
                    const imgElm = document.createElement('img');
    
                    imgElm.src = './image/icon/' + (data.images[project.gameEngine] === undefined ? project.gameEngine+'.svg' : data.images[project.gameEngine]);
                    imgElm.alt = `${project.gameEngine} icon`
                    newSlide.querySelector('.title-wrapper .engine').prepend(imgElm);
                    newSlide.querySelector('.role-wrapper .engine').prepend(imgElm.cloneNode());
                }
    
                // Language
                newSlide.querySelector('.title-wrapper .language').textContent = project.language;
                newSlide.querySelector('.role-wrapper .language').textContent  = project.language;

                if (data.images[project.language] === undefined || data.images[project.language] !== null) {
                    const imgElm = document.createElement('img');
    
                    imgElm.src = './image/icon/' + (data.images[project.language] === undefined ? project.language+'.svg' : data.images[project.language]);
                    imgElm.alt = `${project.language} icon`
                    newSlide.querySelector('.title-wrapper .language').prepend(imgElm);
                    newSlide.querySelector('.role-wrapper .language').prepend(imgElm.cloneNode());
                }
    
                // Platform
                project.platforms.forEach(platform => {
                    const pElm = document.createElement('p');
                    const imgElm = document.createElement('img');
                    
                    pElm.classList.add('tag', 'platform')
                    pElm.textContent = platform;

                    imgElm.src = './image/icon/' + (data.images[platform] === undefined ? platform+'.svg' : data.images[platform]);
                    imgElm.alt = `${platform} icon`
    
                    pElm.prepend(imgElm);
                    
                    newSlide.querySelector('.title-wrapper .language').after(pElm);
                    newSlide.querySelector('.role-wrapper .language').after(pElm.cloneNode(true));
                });
                
                // Role
                newSlide.querySelector('.role[lang=fr]').textContent = project.role.fr;
                newSlide.querySelector('.role[lang=en]').textContent = project.role.en;

                // Description
                newSlide.querySelector('.description-wrapper p[lang=fr]').textContent = project.description.fr;
                newSlide.querySelector('.description-wrapper p[lang=en]').textContent = project.description.en;
                
                //? Inserting item
                slider.appendChild(newSlide);

                // Dataset
                slider.querySelector('article:last-child .picture-wrapper').dataset.index = index;

                // Theme
                themeManager.addTheme(slider.querySelector('article:last-child .picture-wrapper'));

                slidesCounter++;
            }
        });

        if (slidesCounter === 1) {
            document.querySelector('#main-slider .controls').style.display = 'none';
        }
    },
    startSlider: function () {
        // @see https://blaze-slider.dev/docs/demos/
        const el = document.querySelector('section#main-slider')
        this.blazeSlider = new BlazeSlider(el, {
            all: {
                slidesToShow: 1,
                loop: true,
                draggable: false,

                // autoplay
                enableAutoplay: true,
                stopAutoplayOnInteraction: true,
                autoplayInterval: 30000,
                autoplayDirection: 'to left',

                // pagination
                enablePagination: true,

                // transition
                transitionDuration: 500,
                transitionTimingFunction: 'ease',
            },
        });

        this.blazeSlider.onSlide(themeManager.updateTheme);
        themeManager.updateTheme();
    },
    pauseSlider: function () {
        this.blazeSlider.stopAutoplay();
    },
    refresh: function () {
        this.blazeSlider.refresh();
    },
    refreshLanguage: function () {
        document.querySelectorAll('.slider-card .picture-wrapper').forEach(slideElm => {
            slideElm.setAttribute('aria-label', document.querySelector('html').getAttribute('lang') === 'fr' ? 'Ouvrir le projet' : 'Open project');
            slideElm.setAttribute('title',      document.querySelector('html').getAttribute('lang') === 'fr' ? 'Ouvrir le projet' : 'Open project');
        });
    },
}

export default mainSlider;