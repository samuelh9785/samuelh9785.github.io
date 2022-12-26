import about from "./components/about";
import contactForm from "./components/contactForm";
import filterSystem from "./components/filterSystem";
import mainSlider from "./components/mainSlider";
import projectList from "./components/projectList";

const app = {
    init: function () {
        mainSlider.init();
        about.init();
        contactForm.init();
        filterSystem.init();
        projectList.init();

        console.log('App OK')
    }
}

document.addEventListener('DOMContentLoaded', app.init);