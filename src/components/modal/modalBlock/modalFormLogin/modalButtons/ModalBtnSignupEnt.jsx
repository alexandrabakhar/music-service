import styles from '../../../Modal.module.scss';
import { NavLink } from 'react-router-dom';

export const ModalBtnSignupEnt = () => {
    const takeToken = () => {
        const token = 'user1';
        document.cookie = `token=${token}`;
    };
    return (
        <button
            className={styles['btn-signup-ent']}
            id="SignUpEnter"
            onClick={takeToken}
        >
            <NavLink to="/">Зарегистрироваться</NavLink>
        </button>
    );
};
