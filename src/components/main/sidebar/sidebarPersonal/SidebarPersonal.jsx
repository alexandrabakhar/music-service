import styles from '../MainSidebar.module.scss'

export const SidebarPersonal = (props) => {
    return (
        <div className={styles.personal}>
            <p className={styles["personal-name"]}>{props.name}</p>
            <div className={styles.avatar}></div>
        </div>
    );
}