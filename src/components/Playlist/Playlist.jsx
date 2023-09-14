import S from './Playlist.module.scss';
import { Track } from '../Track/Track';

export const Playlist = ({ tracksData, isLoading }) => {
    return (
        <div className={S.playlist}>
            {tracksData.map((track) => (
                <Track key={track.id} track={track} isLoading={isLoading} />
            ))}
        </div>
    );
};
