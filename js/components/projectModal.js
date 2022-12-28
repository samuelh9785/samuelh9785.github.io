import BlazeSlider from "../modules/blaze-slider.min.js"
import data from '../../data.json' assert {type: 'json'};

const projectModal = {
    init: function () {
        document.querySelectorAll('.project').forEach(projectElm => {
            projectElm.addEventListener('click', this.openModal);
        });

        console.log('Project modal OK')
    },
    openModal: function (event) {
        projectModal.createModal(event.currentTarget.dataset.index);
        projectModal.startSlider();
    },
    closeModal: function () {
        
    },
    createModal: function (projetKey) {
        const template = document.querySelector('#project-modal-template');
        const project = data.projects[projetKey];

        //? Creating new node
        const modalElm = template.content.cloneNode(true);
        const sliderElm = modalElm.querySelector('.blaze-track');
    
        //? Filling new node
        // Common elements
        modalElm.querySelector('h3')                    .textContent = project.name;
        modalElm.querySelector('.engine')               .textContent = project.gameEngine;
        modalElm.querySelector('.language')             .textContent = project.language;
        modalElm.querySelector('.platform')             .textContent = project.platform;
        modalElm.querySelector('.description-wrapper p').innerHTML += project.description;
        modalElm.querySelector('.role-wrapper p')       .innerHTML += project.role;
        modalElm.querySelector('.team-wrapper p')       .innerHTML += project.team;
        modalElm.querySelector('.link-wrapper a')       .textContent += project.link;
        modalElm.querySelector('.link-wrapper a')       .href        += project.link;
        modalElm.querySelector('.date-wrapper p')       .textContent += project.date + ' - ' + project.duration;

        // Video
        if (null !== project.video) {
            modalElm.querySelector('.video-wrapper iframe').src += /watch\?v=(.+)/.exec(project.video)[1];
        } else {
            modalElm.querySelector('.video-wrapper').remove();
        }

        // Picture slider
        project.pictures.forEach(picture => {
            const newSlide = document.createElement('img');
            newSlide.src = 'image/' + picture;
            newSlide.alt = 'Game picture';

            sliderElm.appendChild(newSlide);
        });

        if (project.pictures.length === 1)
            modalElm.querySelector('.picture-slider .controls').style.display = 'none';

        //? Inserting item
        document.body.prepend(modalElm);
    },
    startSlider: function () {
        // @see https://blaze-slider.dev/docs/demos/
        const el = document.querySelector('.picture-slider')
        new BlazeSlider(el, {
            all: {
                slidesToShow: 1,
                loop: true,

                // autoplay
                enableAutoplay: true,
                stopAutoplayOnInteraction: true,
                autoplayInterval: 3000,
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

export default projectModal;