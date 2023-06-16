import spriteSVG from '../assets/icon/sprite.svg';
import { useSetLikeMutation, useSetUnlikeMutation } from '../services/catalog';
import { useSelector } from 'react-redux';
import { selectUserID } from '../store/slices/user';

import { useEffect, useState } from 'react';
import styles from './main/centerblockContent/CenterblockContent.module.scss';

import { useGetTrackByTrackIDQuery } from '../services/catalog';

export const HandlerStatusLike = ({ track }) => {
    const [setLike] = useSetLikeMutation();
    const [setUnlike] = useSetUnlikeMutation();
    const userID = useSelector(selectUserID);
    const staredUsers = track['stared_user'];

    const [isFavorite, setFavorite] = useState(false);
    // const { data, isLoading } = useGetTrackByTrackIDQuery(track.id);
    // console.log(data);
    //есть проблема с авторизацией после какого-то количества времени
    useEffect(() => {
        setFavorite(staredUsers.some((user) => user.id === userID));
    }, [track]);

    const handleSetLike = () => {
        isFavorite ? setUnlike(track.id) : setLike(track.id);
    };

    return (
        <svg
            className={`${styles['track__like-svg']} ${
                isFavorite ? styles['track__like-active'] : ''
            }`}
            alt="like"
            onClick={handleSetLike}
        >
            <use xlinkHref={`${spriteSVG}#icon-like`}></use>
        </svg>
    );
};
