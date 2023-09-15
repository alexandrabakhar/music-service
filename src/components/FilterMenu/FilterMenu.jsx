import { Dropdown } from '../Dropdown/Dropdown';
import React, { useState, useEffect, useRef } from 'react';

import S from './FilterMenu.module.scss';

export const FilterMenu = ({ tracksData }) => {
    const [open, setOpen] = useState(false);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [dropdownContent, setDropdownContent] = useState('');
    const [dropdownType, setDropdownType] = useState('');

    const menuRef = useRef();
    const closeDropdown = (event) => {
        const target = event.target;

        if (!menuRef.current.contains(target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
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

        setOpen(true);

        if (target.id === 'button-author') {
            const authorsArray = [
                ...new Set(tracksData.map((track) => track.author)),
            ];
            setDropdownContent(authorsArray);
            setDropdownType('author');
        }

        if (target.id === 'button-genre') {
            const genresArray = [
                ...new Set(tracksData.map((track) => track.genre)),
            ];
            setDropdownContent(genresArray);
            setDropdownType('genre');
        }

        if (target.id === 'button-year') {
            setDropdownType('year');
        }
    };
    const coords = {
        left: left,
        top: top + 47,
    };

    return (
        <div
            className={`${S.filter} filter`}
            onClick={openDropdown}
            ref={menuRef}
        >
            <div
                style={coords}
                className={`${S['dropdown-menu']} ${
                    open ? S.active : S.inactive
                }`}
            >
                <Dropdown content={dropdownContent} type={dropdownType} />
            </div>
            <div className={S.title}>Искать по:</div>

            <div
                tabIndex={0}
                className={`filter__button ${S.button} button-author ${S['_btn-text']}`}
                id="button-author"
            >
                исполнителю
            </div>
            <div
                tabIndex={0}
                className={`filter__button ${S.button} button-year ${S['_btn-text']}`}
                id="button-year"
            >
                году выпуска
            </div>
            <div
                tabIndex={0}
                className={`filter__button ${S.button} button-genre ${S['_btn-text']}`}
                id="button-genre"
            >
                жанру
            </div>
        </div>
    );
};
