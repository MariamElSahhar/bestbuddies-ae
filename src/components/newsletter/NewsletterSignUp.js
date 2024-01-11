import { React , useState } from 'react'
import InputField from '../contact/InputField';

const NewsletterSignUp = ({toggle}) => {
    const [submit, setSubmit] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const contactData = new FormData(e.target);
        
        await fetch('https://bestbuddies.ae/backend/contact.php', {
            method: 'POST',
            body: contactData,
        })

        setSubmit(true);
    };


    return (
        <div id='newsletter-signup-div'>
            <button onClick={(e) => toggle(false)}>X</button>
            {
                submit ?
                <h1> Thanks for your submission!</h1> :
                <form onSubmit={handleSubmit}>
                    <InputField name="first_name" label='First Name' type="text"/>
                    <InputField name="last_name" label='Last Name' type="text"/>
                    <InputField name="email" label='Email Address' type="text"/>
                    <InputField name="number" label='Phone Number' type="text"/>
                    <button type='submit'>Sign Up!</button>
                </form>
            }
        </div>
    )
}

export default NewsletterSignUp
