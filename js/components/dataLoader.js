import data from '../../data.js';

const dataLoader = {
    init: function () {
        this.sortData();

        console.log('Data OK')
    },
    sortData: function () {
        // Sort projects by date from newest to oldest
        data.projects.sort((a, b) => {
            // a is newer than b
            if (a.date > b.date) return -1;
            // a is older than b
            if (a.date < b.date) return 1;
            // a & b are equals
            return 0;
        });
    }
}

export default dataLoader;