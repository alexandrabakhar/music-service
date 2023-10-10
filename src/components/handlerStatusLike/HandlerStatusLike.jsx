import spriteSVG from '../../assets/icon/sprite.svg';
import {
    useSetLikeMutation,
    useSetUnlikeMutation,
} from '../../redux/services/catalogApi';

import { useEffect, useState } from 'react';
import styles from './HandlerStatusLike.module.scss';
import { useSelector } from 'react-redux';
import { selectUserID } from '../../redux/slices/user';

export const HandlerStatusLike = ({ track }) => {
    const [setLike] = useSetLikeMutation();
    const [setUnlike] = useSetUnlikeMutation();

    const userID = useSelector(selectUserID);

    const staredUsers = track['stared_user'];

    const [isFavorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(staredUsers.some((user) => user.id === userID));
    }, [track]);

    const handleSetLike = (e) => {
        e.stopPropagation();

        isFavorite ? setUnlike(track.id) : setLike(track.id);
    };

    return (
        <svg
            className={`${styles['track__like-svg']} ${
                isFavorite ? styles['track__like-active'] : ''
            }`}
            alt="like"
            onClick={handleSetLike}
            data-testid="handler-status-like"
        >
            <use xlinkHref={`${spriteSVG}#icon-like`}></use>
        </svg>
    );
};
