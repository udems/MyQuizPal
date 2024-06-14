import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/MYQUIZA-removebg-preview.png';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-together">
        <div className="footer-logo">
        <img src={logo} alt="" />
        </div>
        <div className="footer-about">
            <h3>About Us</h3>
            <p>
                <a href="">About  MyQuizPal</a> <br />
                <a href="">How MyQuizPal work</a> <br />
                <a href="">Get the App</a>
            </p>
        </div>
        <div className="footer-teacher">
        <h3>
            For Teachers
            </h3>
            <p>
            <a href="">Create quiz test</a> <br />
            <a href="">Grade</a> <br />
            <a href="">Track Progress</a>
            </p>
        </div>
        <div className="footer-student">
        <h3>For Students</h3>
            <p>
            <a href="">Test</a> <br />
            <a href="">Learn</a> <br />
            <a href="">Solution</a> <br />
            <a href="">Real time feedback</a>
            </p>
        </div>
        <div className="footer-resource">
        <h3>Resources</h3>
            <p> <a href="">FAQs</a> <br />
                <a href="">Sign Up</a> <br />
                <a href="">Privacy</a><br />
                <a href="">Terms</a></p>
        </div>
        </div>
        <div className="footer-content">
          <p>&copy; MyQuizPal {new Date().getFullYear()}</p>
          <div style={styles.icons}>
          <a href="https://www.facebook.com" style={styles.icon} aria-label="Facebook">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com" style={styles.icon} aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.twitter.com" style={styles.icon} aria-label="Twitter">
                    <FaTwitter />
                </a>
                <a href="https://www.youtube.com" style={styles.icon} aria-label="YouTube">
                    <FaYoutube />
                </a>

            </div>
        </div>
      </footer>
    );
  };
  const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    icons: {
        display: 'flex',
        gap: '10px',
    },
    icon: {
        color: '#fff',
        fontSize: '20px',
        textDecoration: 'none',
    }
};
  export default Footer;