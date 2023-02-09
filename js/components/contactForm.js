import "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";

const contactForm = {
    init: function () {
        emailjs.init('VVf6B_GVrE2HwCcqT')
        
        document.querySelector('.contact-form form').addEventListener('submit', this.handleSubmit);
        
        console.log('Contact form OK')
    },
    handleSubmit: function (event) {
        event.preventDefault();
        
        // generate a five digit number for the contact_number variable
        document.querySelector('input[name=contact_number]').value = Math.random() * 100000 | 0;
        
        // these IDs from the previous steps
        emailjs.sendForm('service_rucf7hm', 'template_nfkw2om', event.currentTarget);
        event.currentTarget.reset();

    }
}

export default contactForm;