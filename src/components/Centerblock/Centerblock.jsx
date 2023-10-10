import React from 'react';
import S from './Centerblock.module.scss';
import { Search } from '../Search/Search';
import { FilterMenu } from '../FilterMenu/FilterMenu';

import { PlaylistTitles } from '../PlaylistTitles/PlaylistTitles';
import { Playlist } from '../Playlist/Playlist';

import { PlaylistSkeleton } from '../PlaylistSkeleton/PlaylistSkeleton';

export const Centerblock = ({ tracksData, isLoading, heading }) => {
    return (
        <main className={S.centerblock}>
            <Search />
            {isLoading ? (
                <div className={S.heading__skeleton}></div>
            ) : (
                <h2 className={S.heading}>{heading.name || heading}</h2>
            )}

            <FilterMenu tracksData={tracksData} isLoading={isLoading} />

            <PlaylistTitles />

            {isLoading ? (
                <PlaylistSkeleton />
            ) : tracksData.length === 0 ? (
                <h2 className={S.heading}>Пока нет добавленных треков</h2>
            ) : (
                <Playlist isLoading={isLoading} tracksData={tracksData} />
            )}
        </main>
    );
};
