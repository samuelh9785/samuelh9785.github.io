const upButton = {
    init: function () {
        document.querySelector('button.up').addEventListener('click', this.handleClick);
        document.querySelector('.scroll-wrapper').addEventListener('scroll', this.handleScroll);

        console.log('Up button OK')
    },
    handleClick: function () {
        document.querySelector('.scroll-wrapper').scrollTo(0, 0);
    },
    handleScroll: function () {
        document.querySelector('button.up').classList.add('active');
        
        if (document.querySelector('.scroll-wrapper').scrollTop === 0) document.querySelector('button.up').classList.remove('active');
    }
}

export default upButton;