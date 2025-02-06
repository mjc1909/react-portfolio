import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headertextboxrow}>
                <div className={styles.headertext}>
                    <h1 className={styles.h1}>
                        <span>Marcus Johan Carlsen</span>
                    </h1>
                    <p>Kreativ og detaljeorienteret webudvikler <br /> med en nyuddannet baggrund inden for webudvikling.</p>
                    
                    <a href="#contact" className={styles.btncontact}>Kontakt &rarr;</a>
                    

                    

                </div>

             <div className={styles.imagecontainer}>
             <img className={styles.pfp} src="public\IMG_20241118_214752.jpg" alt="" />
             </div>


            </div>


        </header>
    );
 }

 export default Header;