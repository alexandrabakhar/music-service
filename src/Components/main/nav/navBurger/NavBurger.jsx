import styles from '../MainNav.module.scss';

export const NavBurger = ({ onClick }) => {
    const changeVisibility = () => {
        onClick();
    };

    return (
        <div onClick={changeVisibility} className={`${styles.burger} burger`}>
            <span className={styles["burger__line"]}></span>
            <span className={styles["burger__line"]}></span>
            <span className={styles["burger__line"]}></span>
        </div>
    );
};
