import logo from '../../../../assets/img/logo.png';
import styles from '../MainNav.module.scss';

export const NavLogo = () => {
    return (
        <div className={`${styles.logo} logo`}>
            <img className={styles["logo__image"]} src={logo} alt="logo"></img>
        </div>
    );
};
