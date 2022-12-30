import data from '../../data.js';

const metadata = {
    init: function () {
        this.fillOpenGraph();
        this.fillStandardMetadata();

        console.log('Metadatas OK')
    },
    fillStandardMetadata: function () {
        document.querySelector('meta[name="description"]').content = data.biography.replace('<br>', ' ');
    },
    fillOpenGraph: function () {
        document.querySelector('meta[property="og:description"]').content = data.biography.replace('<br>', ' ');
    }
}

export default metadata;