import { MainNav } from './nav/MainNav';
// import { MainCenterblock } from './centerblock/MainCenterblock';
import { MainSidebar } from './sidebar/MainSidebar';
import React, { useState, useEffect } from 'react';
import styles from './Main.module.scss';
import { CenterblockSearch } from './centerblockSearch/CenterblockSearch';
import { CenterblockFilter } from './centerblockFilter/CenterblockFilter';
import { CenterblockContent } from './centerblockContent/CenterblockContent';
import { useSelector } from 'react-redux';
import {
    selectAuthor,
    selectGenre,
    selectYear,
} from '../../store/slices/filter';

export const Main = ({ pageType, tracksData, isLoading, heading }) => {
    const byAuthor = useSelector(selectAuthor);
    const byGenre = useSelector(selectGenre);
    const byYear = useSelector(selectYear);

    let filteredData = [...tracksData];

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
                    <CenterblockFilter tracksData={filteredData} />
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
                        tracksData={tracksData}
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
                        tracksData={tracksData}
                    />
                </div>
                <MainSidebar pageType={pageType} />
            </main>
        );
    }
    // изначальный вариант
    // return (
    //     <main className={styles.main}>
    //         <MainNav />
    //         <MainCenterblock pageType={pageType} tracksData={tracksData} />
    //         <MainSidebar pageType={pageType} />
    //     </main>
    // );
};
