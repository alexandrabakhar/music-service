import styles from '../../../Modal.module.scss';

export const ModalLoginInput = (props) => {
    let inputId;
    props.type === 'login' ? (inputId = 'formlogin') : (inputId = 'loginReg');
    return (
        <input
            className={`${styles.input} login`}
            type="text"
            name="login"
            id={inputId}
            placeholder="Логин"
        ></input>
    );
};
