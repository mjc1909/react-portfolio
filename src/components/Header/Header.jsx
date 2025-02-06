import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headertextboxrow}>
                <div className={styles.headertext}>
                    <h1 className={styles.h1}>
                        <span>Marcus Johan Carlsen</span>
                    </h1>
                    <p>Nyuddannet Webudvikler i Viborg</p>
                    <a href="#contact" className={styles.btncontact}>Kontakt mig &rarr;</a>
                </div>
            </div>
        </header>
    );
 }

 export default Header;