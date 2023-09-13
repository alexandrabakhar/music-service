import { MainNav } from './nav/MainNav';
import { MainSidebar } from './sidebar/MainSidebar';
import React from 'react';
import styles from './Main.module.scss';
import { CenterblockSearch } from './centerblockSearch/CenterblockSearch';
import { CenterblockFilter } from './centerblockFilter/CenterblockFilter';
import { CenterblockContent } from './centerblockContent/CenterblockContent';
import { useSelector } from 'react-redux';
import {
    selectAuthor,
    selectGenre,
    selectSearch,
    selectYear,
} from '../../redux/slices/filter';

export const Main = ({ pageType, tracksData, isLoading, heading }) => {
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
            <main className={styles.main}>
                <MainNav />
                <div className={`${styles.centerblock} centerblock`}>
                    <CenterblockSearch />
                    <h2 className="centerblock__h2">Треки</h2>
                    <CenterblockFilter tracksData={tracksData} />
                    <CenterblockContent
                        isLoading={isLoading}
                        tracksData={filteredData}
                    />
                </div>
                <MainSidebar pageType={pageType} />
            </main>
        );
    }

    if (pageType === 'playlist') {
        return (
            <main className={styles.main}>
                <MainNav />
                <div className={`${styles.centerblock} centerblock`}>
                    <CenterblockSearch />
                    <h2 className="centerblock__h2">Мои треки</h2>
                    <CenterblockContent
                        isLoading={isLoading}
                        tracksData={filteredDataBySearch}
                    />
                </div>
                <MainSidebar pageType={pageType} />
            </main>
        );
    }

    if (pageType === 'collection') {
        return (
            <main className={styles.main}>
                <MainNav />
                <div className={`${styles.centerblock} centerblock`}>
                    <CenterblockSearch />
                    <h2 className="centerblock__h2">{heading}</h2>
                    <CenterblockContent
                        isLoading={isLoading}
                        tracksData={filteredDataBySearch}
                    />
                </div>
                <MainSidebar pageType={pageType} />
            </main>
        );
    }
};
