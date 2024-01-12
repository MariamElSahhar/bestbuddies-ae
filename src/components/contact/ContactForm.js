import {React , useState} from 'react'
import InputField from './InputField'

const ContactForm = ({updateSubmission}) => {
    const [firstnameRequired, setFirstnameRequired] = useState(false);
    const [lastnameRequired, setLastnameRequired] = useState(false);
    const [emailRequired, setEmailRequired] = useState(false);
    const [messageRequired, setMessageRequired] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        if (!formData.get('first_name'))
            setFirstnameRequired(true);            
        if (!formData.get('last_name')) 
            setLastnameRequired(true);            
        if (!formData.get('email'))
            setEmailRequired(true);            
        if (!formData.get('message'))
            setMessageRequired(true);            
        if (formData.get('first_name') && formData.get('last_name') && formData.get('email') && formData.get('message')) {
            updateSubmission(true);         
            await fetch('https://bestbuddies.ae/backend/inquiry.php', {
                method: 'POST',
                body: formData,
            });
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} id="contact-form">
                <div>
                    <InputField name="first_name" label='First Name' type="text" required={firstnameRequired}/>
                    <InputField name="last_name" label='Last Name' type="text" required={lastnameRequired}/>
                    <InputField name="email" label='Email Address' type="email" required={emailRequired}/>
                    <InputField name="number" label='Phone Number' type="tel" optional={true}/>
                </div>
                <div id='message-col'>
                    <div className='input-field'>
                        <label htmlFor='message'>
                            Your Message
                            {
                                messageRequired ?
                                <span className='empty-field'>*     Message cannot be empty</span>
                                : ''
                            }
                        </label>
                        <textarea name="message" id="message"></textarea>
                        
                    </div>
                    <button type="submit" name='submit'>Send Message</button>
                </div>
            </form>
        </>
  )
}

export default ContactForm
