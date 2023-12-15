import React from 'react'
import InputField from './InputField'

const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    await fetch('https://bestbuddies.ae/contact.php', {
        method: 'POST',
        body: formData,
  });
}

const ContactForm = () => {
  return (
        <form onSubmit={handleSubmit} id="contact-form">
            <div>
                <InputField name="name" label='Full Name' type="text"/>
                <InputField name="email" label='Email Address' type="text"/>
                <InputField name="number" label='Phone Number' type="text"/>
            </div>
            <div id='message-col'>
                <div className='input-field'>
                    <label htmlFor='message'>Your Message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit" name='submit'>Send Message</button>
            </div>
        </form>
  )
}

export default ContactForm
