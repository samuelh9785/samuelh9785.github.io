import mainSlider from "./components/mainSlider";

const app = {
    init: function () {
        mainSlider.init();
    }
}

document.addEventListener('DOMContentLoaded', app.init);