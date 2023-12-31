import { useState } from 'react';
import '../styles/common.css';
import '../styles/contact.css';
import Page from '../components/Page';
import ContactForm from '../components/contact/ContactForm';

function Contact () {
    const [submission, setSubmission] = useState(false);

    const updateSubmission = (submissionStatus) => {
        console.log('set submission triggered');
        setSubmission(submissionStatus);
    };

    const handleNewSubmission = () => {setSubmission(false)};

    return (
        <Page page="Contact Us" id="contact-page">
            <div id="contact-page-content">
                {
                    submission ?
                    <div> 
                        <h1>Thanks, we'll get back to you soon!</h1>
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