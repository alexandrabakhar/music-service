import S from './Playlist.module.scss';
import { Track } from '../Track/Track';
import { useSelector } from 'react-redux';
import {
    selectAuthor,
    selectGenre,
    selectSearch,
    selectYear,
} from '../../redux/slices/filter';

export const Playlist = ({ isLoading, tracksData }) => {
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
    return (
        <div className={S.playlist}>
            {filteredData.map((track) => (
                <Track key={track.id} track={track} isLoading={isLoading} />
            ))}
        </div>
    );
};
