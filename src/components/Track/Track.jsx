import 'react-loading-skeleton/dist/skeleton.css';
import S from './Track.module.scss';
import spriteSVG from '../../assets/icon/sprite.svg';

import { SwitcherStatusLike } from '../SwitcherStatusLike/SwitcherStatusLike';
import { useDispatch } from 'react-redux';
import { setCurrentTrackId } from '../../redux/slices/user';

export const Track = ({ track }) => {
    const durationOnMinutes = (track['duration_in_seconds'] / 60).toFixed(2);

    const dispatch = useDispatch();

    //есть проблема с авторизацией после какого-то количества времени

    const handleChooseTrack = () => {
        dispatch(setCurrentTrackId({ currentTrackId: track.id }));
    };
    return (
        <div className={S.track} onClick={handleChooseTrack}>
            <div className={S['title']}>
                <div className={S['title__image']}>
                    <svg className={S['title__image-svg']} alt="music">
                        <use xlinkHref={`${spriteSVG}#icon-note`}></use>
                    </svg>
                </div>

                <span className={S['title-text']}>{track.name}</span>
            </div>

            <div className={S['author']}>
                <span className={S['author-text']}>{track.author}</span>
            </div>

            <div className={S['album']}>
                <span className={S['album-text']}>{track.album}</span>
            </div>

            <div className={S['time']}>
                <SwitcherStatusLike track={track} />

                <span className={S['time-text']}>{durationOnMinutes}</span>
            </div>
        </div>
    );
};
