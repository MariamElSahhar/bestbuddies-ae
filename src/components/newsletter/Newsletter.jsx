import { React , useState } from 'react'
import '../../styles/common.css'
import NewsletterSignUp from './NewsletterSignUp';

const Newsletter = () => {
  const [show, setShow] = useState(false);

  const toggleNewsletter = (bool) => {
    setShow(bool);
  };

  return (
    <div>
        <button id="newsletter" className="cta" onClick={(e) => toggleNewsletter(true)}>Sign up for our emails</button>
    {
      show ?
      <NewsletterSignUp toggle={toggleNewsletter}/> 
      : ""
    }   
    </div>
  )
}

export default Newsletter
