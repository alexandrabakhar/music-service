import React from 'react';
const { useState } = React;

import { NavLogo } from './NavLogo';
import { NavBurger } from './NavBurger';
import { NavMenu } from './NavMenu';

export const MainNav = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <nav className="main__nav nav">
            <NavLogo />
            <NavBurger onClick={toggleVisibility} />
            {visible && <NavMenu />}
        </nav>
    );
};

