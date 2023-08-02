import styles from '../MainNav.module.scss';
import { NavLink } from 'react-router-dom';

export const NavLogo = () => {
    return (
        <NavLink to="/" className={`${styles.logo} logo`}>
            <div className={styles['logo__image']}></div>
        </NavLink>
    );
};
