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
const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};
<form>
    <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
    />

    <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
    />

    <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
    />
</form>