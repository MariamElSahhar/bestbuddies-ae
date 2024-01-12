import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/common.css';
import '../styles/contact.css';
import Page from '../components/Page';
import ContactForm from '../components/contact/ContactForm';

function Contact () {
    const [submission, setSubmission] = useState(false);

    const updateSubmission = (submissionStatus) => {
        setSubmission(submissionStatus);
    };

    const handleNewSubmission = () => {setSubmission(false)};

    return (
        <Page page="Contact Us" id="contact-page">
            <div id="contact-page-content">
                {
                    submission ?
                    <div id="thanks"> 
                        <h1>Thanks for your message! We'll get back to you soon.</h1>
                        <button onClick={handleNewSubmission}>Send another message</button>
                    </div>
                    :
                    <ContactForm updateSubmission={updateSubmission}/>
                }
            </div>
        </Page>
    );
}

export default Contact;