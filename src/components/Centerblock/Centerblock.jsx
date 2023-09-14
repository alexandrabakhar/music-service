import React from 'react';
import S from './Centerblock.module.scss';
import { Search } from '../Search/Search';
import { FilterMenu } from '../FilterMenu/FilterMenu';
import { useSelector } from 'react-redux';
import {
    selectAuthor,
    selectGenre,
    selectSearch,
    selectYear,
} from '../../redux/slices/filter';
import { PlaylistTitles } from '../PlaylistTitles/PlaylistTitles';
import { Playlist } from '../Playlist/Playlist';

export const Centerblock = ({ pageType, tracksData, isLoading, heading }) => {
    const byAuthor = useSelector(selectAuthor);
    const byGenre = useSelector(selectGenre);
    const byYear = useSelector(selectYear);
    const searchText = useSelector(selectSearch).toLowerCase();

    let filteredData = [...tracksData];
    let filteredDataBySearch = [...tracksData];

    if (byAuthor.length > 0) {
        filteredData = filteredData.filter(({ author }) =>
            byAuthor.includes(author)
        );
    }

    if (byGenre.length > 0) {
        filteredData = filteredData.filter(({ genre }) =>
            byGenre.includes(genre)
        );
    }

    if (searchText.length > 0) {
        filteredDataBySearch = filteredData.filter((track) => {
            return (
                track.name.toLowerCase().includes(searchText) ||
                track.author.toLowerCase().includes(searchText) ||
                track.album.toLowerCase().includes(searchText)
            );
        });
        filteredData = filteredDataBySearch;
    }

    switch (byYear[0]) {
        case 'new':
            filteredData = filteredData
                .filter((el) => el)
                .sort(
                    ({ release_date: adate }, { release_date: bdate }) =>
                        new Date(bdate).valueOf() - new Date(adate).valueOf()
                );
            break;
        case 'old':
            filteredData = filteredData
                .filter((el) => el)
                .sort(
                    ({ release_date: adate }, { release_date: bdate }) =>
                        new Date(adate).valueOf() - new Date(bdate).valueOf()
                );
            break;
        default:
            break;
    }

    if (pageType === 'mainPage') {
        return (
            <main className={S.main}>
                <div className={`${S.centerblock} centerblock`}>
                    <Search />
                    <h2 className="centerblock__h2">ТРЕКИ</h2>
                    <FilterMenu tracksData={tracksData} />
                    <PlaylistTitles />

                    <Playlist
                        isLoading={isLoading}
                        tracksData={filteredDataBySearch}
                    />
                </div>
            </main>
        );
    }

    if (pageType === 'playlist') {
        return (
            <main className={S.main}>
                <div className={`${S.centerblock} centerblock`}>
                    <Search />
                    <h2 className="centerblock__h2">Мои треки</h2>
                    <PlaylistTitles />

                    <Playlist
                        isLoading={isLoading}
                        tracksData={filteredDataBySearch}
                    />
                </div>
            </main>
        );
    }

    if (pageType === 'collection') {
        return (
            <main className={S.main}>
                <div className={`${S.centerblock} centerblock`}>
                    <Search />
                    <h2 className="centerblock__h2">{heading}</h2>

                    <PlaylistTitles />
                    <Playlist
                        isLoading={isLoading}
                        tracksData={filteredDataBySearch}
                    />
                </div>
            </main>
        );
    }
};
