import { MainNav } from './nav/MainNav';
import { MainCenterblock } from './centerblock/MainCenterblock';
import { MainSidebar } from './sidebar/MainSidebar';
import React, { useState, useEffect } from 'react';
import styles from './Main.module.scss';

export const Main = (props) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const showSkeletonTimer = setTimeout(() => {
            console.log('1');
            console.log(isLoading);
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(showSkeletonTimer);
        };
    }, []);
    return (
        <main className={styles.main}>
            <MainNav />
            <MainCenterblock pageType={props.pageType} pageLoading={isLoading} />
            <MainSidebar pageType={props.pageType} pageLoading={isLoading} />
        </main>
    );
};
