import logo from '../../../../assets/img/logo.png';
import styles from '../MainNav.module.scss';
import { NavLink } from 'react-router-dom';


export const NavLogo = () => {
    return (
        <NavLink to='/' className={`${styles.logo} logo`}>
            <img className={styles["logo__image"]} src={logo} alt="logo"></img>
        </NavLink>
    );
};
