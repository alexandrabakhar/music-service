import { MainNav } from './nav/MainNav';
import { MainCenterblock } from './centerblock/MainCenterblock';
import { MainSidebar } from './sidebar/MainSidebar';
import React, { useState, useEffect } from 'react';


export const Main = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const showSkeletonTimer = setTimeout(() => {
            console.log('1');
            console.log(isLoading);
            setLoading(false);
        }, 50000);

        return () => {
            clearTimeout(showSkeletonTimer);
        }
    }, [])
    return (
        <main className="main">
            <MainNav />
            <MainCenterblock pageLoading={isLoading}/>
            <MainSidebar pageLoading={isLoading}/>
        </main>
    );
};
