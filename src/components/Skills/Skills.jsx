import styles from './skills.module.css';
import { icons } from "../../services/icons";


const Skills = () => {
    return (
       <div className={styles.skillscontainer}>
       <div className={styles.skills}>
            <div className={styles.skillscontainer}>
                <div className={styles.skill}>
                    <h3 className={styles.h3}>HTML</h3>
                    <p className={styles.p}>
                    {icons["FaHtml5"]}
                    </p>
                </div>
                <div className={styles.skill}>
                    <h3 className={styles.h3}>CSS</h3>
                    <p className={styles.p}>
                    {icons["FaCss3"]}
                    </p>
                </div>
                <div className={styles.skill}>
                    <h3 className={styles.h3} >JavaScript</h3>
                    <p className={styles.p}>
                    {icons["FaJs"]}
                    </p>
                </div>
                <div className={styles.skill}>
                    <h3 className={styles.h3}>React</h3>
                    <p className={styles.p}>
                    {icons["FaReact"]}
                    </p>
                </div>
                <div className={styles.skill}>
                    <h3 className={styles.h3}>Design</h3>
                    <p className={styles.p}>
                    {icons["FaFigma"]}
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
 }


export default Skills;