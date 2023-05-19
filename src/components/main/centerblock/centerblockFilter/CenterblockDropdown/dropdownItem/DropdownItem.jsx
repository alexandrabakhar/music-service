import styles from '../../CenterblockFilter.module.scss';

export const DropdownItem = (props) => {
    return (
        <li className={styles.dropdownItem}>
            <span> {props.text} </span>
        </li>
    );
};
