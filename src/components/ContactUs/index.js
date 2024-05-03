import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'

import './index.css'

const ContactUs = () => (
  <div className="contact-container">
    <h3 style={{'text-align': 'center'}}>Contact Us</h3>
    <div className="icons-container">
      <FaFacebook className="icons" />
      <FaTwitter className="icons" />
      <FaLinkedin className="icons" />
    </div>
    <p style={{'text-align': 'center'}}>
      Enjoy! Now to see your channels and recommendations{' '}
    </p>
  </div>
)

export default ContactUs
