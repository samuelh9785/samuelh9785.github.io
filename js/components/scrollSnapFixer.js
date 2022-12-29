//! Due to the scroll snap set to mandatory on sections, the bottom of the page is unreachable
//! This module deactivates scroll snap once user enters last section
const scrollSnapFixer = {
    init: function () {
        const scrollWrapperElm = document.querySelector('.scroll-wrapper');
        scrollWrapperElm.addEventListener('scroll', this.handleScroll);

        console.log('Scroll snap fixer OK')
    },
    handleScroll: function () {
        const scrollWrapperElm = document.querySelector('.scroll-wrapper');
        const lastSectionElm = document.querySelector('.scroll-wrapper section:last-child');
    
        // If scroll level is below last section, we do remove the scroll snap
        if (scrollWrapperElm.scrollTop > lastSectionElm.offsetTop) {
            scrollWrapperElm.style.scrollSnapType = 'unset';
        } else {
            scrollWrapperElm.style.scrollSnapType = 'y mandatory';
        }
    }
}

export default scrollSnapFixer;