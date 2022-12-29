const modalScrollbar = {
    init: function () {
        this.guessHeight();
        document.querySelector('.project-modal').addEventListener('scroll', this.handleModalScroll);
        window.addEventListener('resize', this.guessHeight);

        console.log('Modal scrollbar OK')
    },
    guessHeight: function () {
        const offsetHeight = document.querySelector('.project-modal').offsetHeight;
        const scrollHeight = document.querySelector('.project-modal').scrollHeight;

        // We don't show scrollbar if it is not needed
        if (offsetHeight === scrollHeight) {
            document.querySelector('.modal-wrapper .scrollbar').style.display = 'none';
            return;
        }
        
        document.querySelector('.modal-wrapper .scrollbar').style.display = 'block';
        document.querySelector('.modal-wrapper .scrollbar-thumb').style.height = offsetHeight/scrollHeight*100 + '%';
    },
    handleModalScroll: function () {
        const scrollTop = document.querySelector('.project-modal').scrollTop;
        const scrollHeight = document.querySelector('.project-modal').scrollHeight;

        document.querySelector('.modal-wrapper .scrollbar-thumb').style.top = scrollTop/scrollHeight*100 + '%';
    }
}

export default modalScrollbar;