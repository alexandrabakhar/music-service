import { CenterblockDropdown } from './CenterblockDropdown/CenterblockDropdown';
import React, { useState, useEffect, useRef } from 'react';

import styles from './CenterblockFilter.module.scss';

export const CenterblockFilter = () => {
    const [open, setOpen] = useState(false);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [dropdownContent, setDropdownContent] = useState('');

    const menuRef = useRef();

    useEffect(() => {
        const closeDropdown = (event) => {
            const target = event.target;

            if (!menuRef.current.contains(target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', closeDropdown);

        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    });

    const openDropdown = (event) => {
        const target = event.target;

        if (!target.classList.contains('filter__button')) {
            return;
        }

        const targetTop = target.getBoundingClientRect().top;
        setTop(targetTop);
        const targetLeft = target.getBoundingClientRect().left;
        setLeft(targetLeft);

        const targetClass = target.classList[2];
        setDropdownContent(targetClass);
        console.log(targetClass);

        setOpen(true);
    };
    const coords = {
        left: left,
        top: top + 47,
    };

    return (
        <div
            className={`${styles.filter} filter`}
            onClick={openDropdown}
            ref={menuRef}
        >
            <div
                style={coords}
                className={`${styles['dropdown-menu']} ${open ? styles.active : styles.inactive}`}
            >
                <CenterblockDropdown content={dropdownContent} />
            </div>
            <div className={styles.title}>Искать по:</div>

            <div
                tabIndex={0}
                className={`filter__button ${styles.button} button-author ${styles['_btn-text']}`}
            >
                исполнителю
            </div>
            <div
                tabIndex={0}
                className={`filter__button ${styles.button} button-year ${styles['_btn-text']}`}
            >
                году выпуска
            </div>
            <div
                tabIndex={0}
                className={`filter__button ${styles.button} button-genre ${styles['_btn-text']}`}
            >
                жанру
            </div>
        </div>
    );
};
