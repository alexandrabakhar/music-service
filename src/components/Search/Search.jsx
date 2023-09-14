import S from './Search.module.scss';
import spriteSVG from '../../assets/icon/sprite.svg';
import { setSearch } from '../../redux/slices/filter';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export const Search = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        dispatch(setSearch(searchText));
    }, [searchText]);

    return (
        <div className={S.search}>
            <svg className={S.svg}>
                <use xlinkHref={`${spriteSVG}#icon-search`}></use>
            </svg>
            <input
                className={S.text}
                type="search"
                placeholder="Поиск"
                name="search"
                onChange={(e) => setSearchText(e.target.value.trim())}
            ></input>
        </div>
    );
};
