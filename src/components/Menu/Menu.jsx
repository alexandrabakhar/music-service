import S from './Menu.module.scss';
import { useState } from 'react';

import { Logo } from '../Logo/Logo';
import { MenuList } from '../MenuList/MenuList';

export const Menu = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <nav className={S.menu}>
            <Logo type="main" />
            <div
                onClick={toggleVisibility}
                className={S.burger}
                data-testid="menu-burger"
            >
                <span className={S.line}></span>
                <span className={S.line}></span>
                <span className={S.line}></span>
            </div>
            {visible && <MenuList />}
        </nav>
    );
};
