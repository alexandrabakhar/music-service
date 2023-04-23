import { Dropdown } from './dropdown/CenterblockDropDown';
import React, { useState, useEffect, useRef } from 'react';

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
        setTop(targetTop)
        const targetLeft = target.getBoundingClientRect().left;
        setLeft(targetLeft);

        const targetClass = target.classList[1];
        setDropdownContent(targetClass)
        console.log(targetClass);

        setOpen(true);
    };
    const coords = {
        left: left,
        top: top + 47,
    }

    return (
        <div
            className="centerblock__filter filter"
            onClick={openDropdown}
            ref={menuRef}
        >
            <div style={coords} className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <Dropdown content={dropdownContent}/>
            </div>
            <div className="filter__title">Искать по:</div>

            <div tabIndex={0} className="filter__button button-author _btn-text">
                исполнителю
            </div>
            <div tabIndex={0} className="filter__button button-year _btn-text">
                году выпуска
            </div>
            <div tabIndex={0} className="filter__button button-genre _btn-text">жанру</div>
        </div>
    );
};
