import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    return (
        <section id="contact">
            <h2>Get In Touch</h2>
        </section>
    );
}

export default Contact;