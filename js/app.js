import about from "./components/about";
import contactForm from "./components/contactForm";
import mainSlider from "./components/mainSlider";

const app = {
    init: function () {
        mainSlider.init();
        about.init();
        contactForm.init();

        console.log('App OK')
    }
}

document.addEventListener('DOMContentLoaded', app.init);