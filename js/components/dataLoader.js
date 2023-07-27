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

        // Sort project platforms by name from last to first since it is added from last in DOM
        data.projects.forEach(project => {
            project.platforms.sort((a, b) => {
                //? 'a'<'b' is true
                //? 'a'>'b' is false
                if (a.name > b.name) return -1;
                // a is older than b
                if (a.name < b.name) return 1;
                // a & b are equals
                return 0;
            });
        });
    }
}

export default dataLoader;