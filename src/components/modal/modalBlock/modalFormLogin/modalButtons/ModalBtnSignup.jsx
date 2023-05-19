import styles from '../../../Modal.module.scss';
import { NavLink } from 'react-router-dom';

export const ModalBtnSignup = () => {

    return (
        <button className={styles['btn-signup']} id="btnSignUp">
            <NavLink to="/registration">Зарегистрироваться</NavLink>
        </button>
    );
};
