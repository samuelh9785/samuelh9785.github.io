import data from '../../data.json' assert {type: 'json'};

const projectList = {
    init: function () {
        this.fillProjectList();

        console.log('Project list OK')
    },
    fillProjectList: function () {
        const template = document.querySelector('#project-card-template');
        const projectList = document.querySelector('.project-list');

        data.projects.forEach(project => {
            //? Creating new node
            const newProject = template.content.cloneNode(true);

            //? Filling new node

            // Picture
            newProject.querySelector('img').src = 'image/' + project.pictures[0];

            // Engine
            newProject.querySelector('.engine').textContent = project.gameEngine;

            // Language
            newProject.querySelector('.language').textContent = project.language;

            // Platform
            newProject.querySelector('.platform').textContent = project.platform;

            // Title
            newProject.querySelector('h3').textContent = project.name;
            
            //? Inserting item
            projectList.appendChild(newProject);
        });
    }
}

export default projectList;