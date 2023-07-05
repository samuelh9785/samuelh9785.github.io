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
        
        themeManager.themes[index] = themeManager.colorThief.getPalette(pictureElm, 5);
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
        
        htmlElm.style.setProperty('--c1', `rgb(${themeManager.themes[currentSlideIndex][0][0]}, ${themeManager.themes[currentSlideIndex][0][1]}, ${themeManager.themes[currentSlideIndex][0][2]})`);
        htmlElm.style.setProperty('--c2', `rgb(${themeManager.themes[currentSlideIndex][1][0]}, ${themeManager.themes[currentSlideIndex][1][1]}, ${themeManager.themes[currentSlideIndex][1][2]})`);
        htmlElm.style.setProperty('--c3', `rgb(${themeManager.themes[currentSlideIndex][2][0]}, ${themeManager.themes[currentSlideIndex][2][1]}, ${themeManager.themes[currentSlideIndex][2][2]})`);
        htmlElm.style.setProperty('--c4', `rgb(${themeManager.themes[currentSlideIndex][3][0]}, ${themeManager.themes[currentSlideIndex][3][1]}, ${themeManager.themes[currentSlideIndex][3][2]})`);
        htmlElm.style.setProperty('--c5', `rgb(${themeManager.themes[currentSlideIndex][4][0]}, ${themeManager.themes[currentSlideIndex][4][1]}, ${themeManager.themes[currentSlideIndex][4][2]})`);

        document.body.style.backgroundImage = `url(${pictureElm.src})`
    },
}

export default themeManager;