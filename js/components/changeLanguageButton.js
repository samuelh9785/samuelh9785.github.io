import contactForm from "./contactForm.js";
import filterSystem from "./filterSystem.js";
import mainSlider from "./mainSlider.js";
import projectList from "./projectList.js";
import projectModal from "./projectModal.js";
import upButton from "./upButton.js";

const changeLanguageButton = {
    init: function () {
        document.querySelector('button#change-language').addEventListener('click', this.handleClick);
        document.querySelector('button#change-language').addEventListener('focus', this.handleHoverAndFocus);
        document.querySelector('button#change-language').addEventListener('mouseenter', this.handleHoverAndFocus);
        document.querySelector('button#change-language').addEventListener('blur', this.handleMouseout);
        document.querySelector('button#change-language').addEventListener('mouseleave', this.handleMouseout);

        console.log('Change language button OK')
    },
    handleHoverAndFocus: function (event) {
        event.currentTarget.classList.add(event.currentTarget.classList.contains('french') ? 'to-english' : 'to-french');
    },
    handleMouseout: function (event) {
        event.currentTarget.classList.remove('to-english', 'to-french');
    },
    handleClick: function (event) {
        if (event.currentTarget.classList.contains('french')) {
            event.currentTarget.classList.remove('french', 'to-french');
            event.currentTarget.classList.add('english');
            document.querySelector('html').setAttribute('lang', 'en');
        } else {
            event.currentTarget.classList.remove('english', 'to-english');
            event.currentTarget.classList.add('french');
            document.querySelector('html').setAttribute('lang', 'fr');
        }
        
        changeLanguageButton.refreshLanguage();
        mainSlider.refreshLanguage();
        contactForm.refreshLanguage();
        filterSystem.refreshLanguage();
        projectList.refreshLanguage();
        upButton.refreshLanguage();
        projectModal.refreshLanguage();
    },
    refreshLanguage: function () {
        if (document.querySelector('html').getAttribute('lang') === 'en') {
            document.querySelector('button#change-language').setAttribute('aria-label', 'Change language');
            document.querySelector('button#change-language').setAttribute('title', 'Change language');
            document.querySelector('button#change-language img:first-child').setAttribute('alt', 'French flag');
            document.querySelector('button#change-language img:last-child').setAttribute('alt', 'English flag');
            document.querySelector('title').textContent = "Samuel Hoarau's portfolio";
        } else {
            document.querySelector('button#change-language').setAttribute('aria-label', 'Changer de langue');
            document.querySelector('button#change-language').setAttribute('title', 'Changer de langue');
            document.querySelector('button#change-language img:first-child').setAttribute('alt', 'Drapeau français');
            document.querySelector('button#change-language img:last-child').setAttribute('alt', 'Drapeau anglais');
            document.querySelector('title').textContent = 'Portefolio de Samuel Hoarau';
        }
    },
}

export default changeLanguageButton;