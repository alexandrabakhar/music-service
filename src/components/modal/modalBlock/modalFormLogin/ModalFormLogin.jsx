import { ModalLogo } from './modalLogo/ModalLogo';
import { ModalLoginInput } from './modalLoginInput/ModalLoginInput';
import { ModalPasswordInput } from './modalPasswordInput/ModalPasswordInput';
import { ModalBtnEnter } from './modalButtons/ModalBtnEnter';
import { ModalBtnSignup } from './modalButtons/ModalBtnSignup';
import { ModalBtnSignupEnt } from './modalButtons/ModalBtnSignupEnt';

import styles from '../../Modal.module.scss';

export const ModalFormLogin = (props) => {
    if (props.modalType === 'signin') {
        return (
            <form className={styles['form-login']} id="formLogIn" action="#">
                <ModalLogo />
                <ModalLoginInput type="login" />
                <ModalPasswordInput type="current" />
                <ModalBtnEnter />
                <ModalBtnSignup />
            </form>
        );
    }

    if (props.modalType === 'signup') {
        return (
            <form className={styles['form-login']} id="formLogIn" action="#">
                <ModalLogo />
                <ModalLoginInput type="reg" />
                <ModalPasswordInput type="first" />
                <ModalPasswordInput type="double" />
                <ModalBtnSignupEnt />
            </form>
        );
    }
};
