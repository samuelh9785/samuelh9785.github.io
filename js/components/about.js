import data from '../../data.js';

const about = {
    init: function () {
        this.fillBiography();

        console.log('About OK')
    },
    fillBiography: function () {
        document.querySelector('.biography p[lang=fr]').textContent = data.biography.fr;
        document.querySelector('.biography p[lang=en]').textContent = data.biography.en;
    }
}

export default about;