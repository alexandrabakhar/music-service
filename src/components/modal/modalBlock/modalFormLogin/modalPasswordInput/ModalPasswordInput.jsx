import styles from '../../../Modal.module.scss';

export const ModalPasswordInput = (props) => {
    let inputId;

    if (props.type === 'current') {
        inputId = 'formpassword';
    }

    if (props.type === 'first') {
        inputId = 'firstPassword';
    }
    if (props.type === 'double') {
        inputId = 'doublePassword';
    }
    return (
        <input
            className={`${styles.input} password`}
            type="password"
            name="password"
            id={inputId}
            placeholder="Пароль"
        ></input>
    );
};
