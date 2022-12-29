import BlazeSlider from "../modules/blaze-slider.min.js"
import data from '../../data.json' assert {type: 'json'};

const mainSlider = {
    init: function () {
        this.fillSlider();
        this.startSlider();

        console.log('Main slider OK')
    },
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
                newSlide.querySelector('.desktop-title h3').textContent = project.name;
                newSlide.querySelector('h3.mobile-title').textContent   = project.name;
    
                // Engine
                newSlide.querySelector('.title-wrapper .engine').textContent = project.gameEngine;
                newSlide.querySelector('.role-wrapper .engine').textContent  = project.gameEngine;
    
                // Language
                newSlide.querySelector('.title-wrapper .language').textContent = project.language;
                newSlide.querySelector('.role-wrapper .language').textContent  = project.language;
    
                // Platform
                newSlide.querySelector('.title-wrapper .platform').textContent = project.platform;
                newSlide.querySelector('.role-wrapper .platform').textContent  = project.platform;
                
                // Role
                newSlide.querySelector('.role').innerHTML = project.role;

                // Description
                newSlide.querySelector('.description-wrapper p').innerHTML = project.description;
                
                //? Inserting item
                slider.appendChild(newSlide);

                // Dataset
                slider.querySelector('article:last-child .picture-wrapper').dataset.index = index;

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
        new BlazeSlider(el, {
            all: {
                slidesToShow: 1,
                loop: true,
                draggable: false,

                // autoplay
                enableAutoplay: true,
                stopAutoplayOnInteraction: true,
                autoplayInterval: 8000,
                autoplayDirection: 'to left',

                // pagination
                enablePagination: true,

                // transition
                transitionDuration: 500,
                transitionTimingFunction: 'ease',
            },
        })
    }
}

export default mainSlider;