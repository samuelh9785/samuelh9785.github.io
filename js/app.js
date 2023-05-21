import about from "./components/about.js";
import contactForm from "./components/contactForm.js";
import dataLoader from "./components/dataLoader.js";
import filterSystem from "./components/filterSystem.js";
import mainSlider from "./components/mainSlider.js";
import metadata from "./components/metadata.js";
import projectList from "./components/projectList.js";
import projectModal from "./components/projectModal.js";

const app = {
    init: function () {
        dataLoader.init();

        metadata.init();
        
        mainSlider.init();
        about.init();
        contactForm.init();
        filterSystem.init();
        projectList.init();
        projectModal.init();

        console.log('App OK')
    }
}

document.addEventListener('DOMContentLoaded', app.init);
