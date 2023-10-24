import contactForm from "./contactForm.js";
import filterSystem from "./filterSystem.js";
import projectModal from "./projectModal.js";
import upButton from "./upButton.js";

const changeLanguageButton = {
    init: function () {
        document.querySelector('button#change-language').addEventListener('click', this.handleClick);
        document.querySelector('button#change-language').addEventListener('focus', this.handleHoverAndFocus);
        document.querySelector('button#change-language').addEventListener('mouseover', this.handleHoverAndFocus);
        document.querySelector('button#change-language').addEventListener('blur', this.handleMouseout);
        document.querySelector('button#change-language').addEventListener('mouseout', this.handleMouseout);

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
            document.querySelector('title').textContent = "Samuel Hoarau's portfolio";
        } else {
            event.currentTarget.classList.remove('english', 'to-english');
            event.currentTarget.classList.add('french');
            document.querySelector('html').setAttribute('lang', 'fr');
            document.querySelector('title').textContent = 'Portefolio de Samuel Hoarau';
        }

        changeLanguageButton.refreshLanguage();
        contactForm.refreshLanguage();
        filterSystem.refreshLanguage();
        upButton.refreshLanguage();
        projectModal.refreshLanguage();
    },
    refreshLanguage: function () {
        if (document.querySelector('html').getAttribute('lang') === 'en') {
            document.querySelector('button#change-language').setAttribute('aria-label', 'Change language');
            document.querySelector('button#change-language').setAttribute('title', 'Change language');
        } else {
            document.querySelector('button#change-language').setAttribute('aria-label', 'Changer de langue');
            document.querySelector('button#change-language').setAttribute('title', 'Changer de langue');
        }
    },
}

export default changeLanguageButton;