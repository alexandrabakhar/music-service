import styles from '../../../Modal.module.scss';
import logoImg from '../../../../../assets/img/logo_modal.png';
export const ModalLogo = () => {
    return (
        <div className={styles.logo}>
            <img src={logoImg} alt="logo"></img>
        </div>
    );
};
