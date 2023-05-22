import { ModalFormLogin } from './modalFormLogin/ModalFormLogin';
import styles from '../Modal.module.scss';

export const ModalBlock = (props) => {
    return (
        <div className={styles.block}>
            <ModalFormLogin modalType={props.modalType} />
        </div>
    );
};
