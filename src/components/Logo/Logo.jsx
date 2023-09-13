import styles from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import logoSVG from '../../assets/img/logo.svg';

export const Logo = ({ type }) => {
    return (
        <NavLink
            to="/"
            className={type === 'main' ? styles['main'] : styles['auth']}
        >
            <svg alt="logo">
                <use xlinkHref={`${logoSVG}#logo`}></use>
            </svg>
        </NavLink>
    );
};
