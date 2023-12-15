import '../styles/common.css';
import '../styles/contact.css';
import Page from '../components/Page';
import ContactForm from '../components/contact/ContactForm';

function Contact () {
    return (
        <Page page="Contact Us" id="contact-page">
            <div id="contact-page-content">

                <ContactForm/>

            </div>
        </Page>
    );
}

export default Contact;