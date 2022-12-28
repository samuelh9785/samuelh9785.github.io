import about from "./components/about";
import contactForm from "./components/contactForm";
import filterSystem from "./components/filterSystem";
import mainSlider from "./components/mainSlider";
import projectList from "./components/projectList";
import projectModal from "./components/projectModal";
import scrollSnapFixer from "./components/scrollSnapFixer";

const app = {
    init: function () {
        scrollSnapFixer.init();
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