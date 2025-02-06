import styles from './footer.module.css';
import {icons} from '../../services/icons';

const Footer = () => { 
    return (
        <footer role="contentinfo" className={styles.footer}>
            <div className={styles.footercontainer}>
                <ul className="footer-social-links">
                    <li className={styles.footersociallinkitem}>
                        <a className={styles.icons} href="https://github.com/mjc1909" title="Link to Github Profile">
                            
                                {icons["FaGithub"]}
                            
                            </a>
                        <a href="https://github.com/mjc1909" title="Link to Github Profile">
                            
                        </a>
                    </li>

                    
                   
                </ul>
                <p>
                    &copy; 2025 - Marcus Johan Carlsen
                </p>
            </div>
        </footer>
    );
}

export default Footer;