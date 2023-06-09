import { MainNav } from './nav/MainNav';
// import { MainCenterblock } from './centerblock/MainCenterblock';
import { MainSidebar } from './sidebar/MainSidebar';
import React, { useState, useEffect } from 'react';
import styles from './Main.module.scss';
import { CenterblockSearch } from './centerblockSearch/CenterblockSearch';
import { CenterblockFilter } from './centerblockFilter/CenterblockFilter';
import { CenterblockContent } from './centerblockContent/CenterblockContent';

export const Main = ({ pageType, tracksData, isLoading, heading }) => {
    // const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //     const showSkeletonTimer = setTimeout(() => {
    //         console.log('1');
    //         console.log(isLoading);
    //         setLoading(false);
    //     }, 500);

    //     return () => {
    //         clearTimeout(showSkeletonTimer);
    //     };
    // }, []);

    if (pageType === 'mainPage') {
        return (
            <main className={styles.main}>
                <MainNav />
                <div className={`${styles.centerblock} centerblock`}>
                    <CenterblockSearch />
                    <h2 className="centerblock__h2">Треки</h2>
                    <CenterblockFilter />
                    <CenterblockContent isLoading={isLoading} tracksData={tracksData} />
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
                    <CenterblockContent isLoading={isLoading} tracksData={tracksData} />
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
                    <CenterblockContent isLoading={isLoading} tracksData={tracksData} />
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
