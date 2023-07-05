import data from "../../data.js";
import ColorThief from "../modules/color-thief.mjs"
// @see https://lokeshdhakar.com/projects/color-thief/

const themeManager = {
    init: function () {
        this.colorThief = new ColorThief();

        console.log('Theme manager OK')
    },
    colorThief: null,
    themes: {},
    addTheme: function (pictureWrapper) {
        const index = pictureWrapper.dataset.index;
        const pictureElm = pictureWrapper.querySelector('img');

        if (!pictureElm.complete) {
            pictureElm.addEventListener('load', function () {
                themeManager.addTheme(pictureWrapper);
            })
            return;
        }
        
        themeManager.themes[index] = themeManager.colorThief.getPalette(pictureElm, 5).map(([r, g, b]) => {return `rgb(${r}, ${g}, ${b})`});
    },
    updateTheme: function () {
        const currentSlideIndex = document.querySelector('#main-slider .blaze-track>.slider-card:first-child .picture-wrapper').dataset.index;
        const pictureElm = document.querySelector('#main-slider .blaze-track>.slider-card:first-child .picture-wrapper img');
        const htmlElm = document.querySelector('html');

        if (!pictureElm.complete) {
            pictureElm.addEventListener('load', function () {
                themeManager.updateTheme();
            })
            return;
        }

        if (data.projects[currentSlideIndex].theme !== undefined) { // If theme is overridden
            htmlElm.style.setProperty('--c1', data.projects[currentSlideIndex].theme[0]);
            htmlElm.style.setProperty('--c2', data.projects[currentSlideIndex].theme[1]);
            htmlElm.style.setProperty('--c3', data.projects[currentSlideIndex].theme[2]);
            htmlElm.style.setProperty('--c4', data.projects[currentSlideIndex].theme[3]);
            htmlElm.style.setProperty('--c5', data.projects[currentSlideIndex].theme[4]);
        } else {
            htmlElm.style.setProperty('--c1', themeManager.themes[currentSlideIndex][0]);
            htmlElm.style.setProperty('--c2', themeManager.themes[currentSlideIndex][1]);
            htmlElm.style.setProperty('--c3', themeManager.themes[currentSlideIndex][2]);
            htmlElm.style.setProperty('--c4', themeManager.themes[currentSlideIndex][3]);
            htmlElm.style.setProperty('--c5', themeManager.themes[currentSlideIndex][4]);
        }
        

        document.body.style.backgroundImage = `url(${pictureElm.src})`
    },
}

export default themeManager;