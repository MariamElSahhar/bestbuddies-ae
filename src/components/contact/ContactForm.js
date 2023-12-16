import {React , useState} from 'react'
import InputField from './InputField'

const ContactForm = ({updateSubmission}) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        await fetch('https://bestbuddies.ae/inquiry.php', {
            method: 'POST',
            body: formData,
        });

        updateSubmission(true);
        console.log('updated');
    }

    return (
        <form onSubmit={handleSubmit} id="contact-form">
            <div>
                <InputField name="first_name" label='First Name' type="text"/>
                <InputField name="last_name" label='Last Name' type="text"/>
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
