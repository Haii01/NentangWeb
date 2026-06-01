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
const [errors, setErrors] = useState({});
const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
        newErrors.name =
            'Name must be at least 2 characters';
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
        newErrors.email = 'Email is required';
    } else if (
        !emailRegex.test(formData.email)
    ) {
        newErrors.email =
            'Invalid email format';
    }

    if (!formData.message.trim()) {
        newErrors.message =
            'Message is required';
    } else if (
        formData.message.length < 10
    ) {
        newErrors.message =
            'Message must be at least 10 characters';
    }

    return newErrors;
};
{errors.name && (
    <span className="error">
        {errors.name}
    </span>
)}

{errors.email && (
    <span className="error">
        {errors.email}
    </span>
)}

{errors.message && (
    <span className="error">
        {errors.message}
    </span>
)}
const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
        validateForm();

    if (
        Object.keys(validationErrors).length > 0
    ) {
        setErrors(validationErrors);
        return;
    }

    console.log(
        'Form submitted:',
        formData
    );

    setFormData({
        name: '',
        email: '',
        message: ''
    });

    alert('Message sent successfully!');
};
<form onSubmit={handleSubmit}></form>
if (errors[name]) {
    setErrors(prev => ({
        ...prev,
        [name]: ''
    }));
}
