import styles from '../../../Modal.module.scss';
import { NavLink } from 'react-router-dom';

export const ModalBtnEnter = () => {
    return (
        <button className={styles['btn-enter']} id="btnEnter">
            <NavLink to="/">Войти</NavLink>
        </button>
    );
};
