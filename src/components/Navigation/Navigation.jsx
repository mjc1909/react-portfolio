import { Link, NavLink } from "react-router-dom";
import styles from './navigation.module.css'
import { useState } from "react";
import { icons } from "../../services/icons";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)


    const toggleNavigation = () => {

      
        setIsOpen(!isOpen)
        
    }
  
    return (
        <div className={styles.navigation}>
            

            <div className={styles.actions}>

                <div className={`${styles.nav} ${isOpen ? styles.open : ''}` }>
                    <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.active : "")}>Hjem</NavLink>
                    <NavLink to={"/projects"} className={({ isActive }) => (isActive ? styles.active : "")}>Projekter</NavLink>
                    <NavLink to={"/about"} className={({ isActive }) => (isActive ? styles.active : "")}>Om</NavLink>
                    <NavLink to={"/contact"} className={({ isActive }) => (isActive ? styles.active : "")}>Kontakt</NavLink>
                    
                </div>
                
                <div onClick={toggleNavigation}>
                    {icons["FaBars"]}
                </div>

            
         

            </div>
         

        </div>
    );
};
export default Navigation;