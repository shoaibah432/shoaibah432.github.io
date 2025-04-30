import { Link } from 'react-router-dom';

import email from '../../assets/images/email.svg';
import phone from '../../assets/images/phone.svg';
import linkedin from '../../assets/images/in.svg';
import logo from '../../assets/images/Slogo2.png';

import './footer.component.scss';
// import ContactUs from '../contact/contact.component';

const Footer = () => {
    return (
        <footer>
            {/* <ContactUs /> */}
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">Want to work with me?</div>
                    <div className="footer-center">
                        <Link className="message-submit" to="mailto:shoaibah432@gmail.com">
                            <span>Let's Talk</span>
                            <img src={email} alt="email" />
                        </Link>
                    </div>
                    <div className="footer-right">
                        <div>
                            <Link className="message-submit phone" to="tel:+447587719782">
                                <img src={phone} alt="phone" />
                            </Link>
                            <Link className="message-submit in" to="https://www.linkedin.com/in/shoaib-ahmed-sa" target="_blank">
                                <img src={linkedin} alt="linkedin" />
                            </Link>
                            {/* <Link className="message-submit be" to="https://www.behance.net/shoaib-ahmed" target="_blank">
                                <img src={behance} alt="behance" />
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className="footer-brand none">
                    <div className="footer-brand-in">
                        <img src={logo} alt="Shoaib Ahmed" />

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;