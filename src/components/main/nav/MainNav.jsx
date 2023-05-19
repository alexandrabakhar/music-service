import React from 'react';
const { useState } = React;

import { NavLogo } from './navLogo/NavLogo';
import { NavBurger } from './navBurger/NavBurger';
import { NavMenu } from './navMenu/NavMenu';

import styles from './MainNav.module.scss';

export const MainNav = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <nav className={`${styles.nav} nav`}>
            <NavLogo />
            <NavBurger onClick={toggleVisibility} />
            {visible && <NavMenu />}
        </nav>
    );
};
