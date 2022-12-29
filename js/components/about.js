import data from '../../data.js';

const about = {
    init: function () {
        this.fillBiography();

        console.log('About OK')
    },
    fillBiography: function () {
        document.querySelector('.biography p').textContent = data.biography;
    }
}

export default about;