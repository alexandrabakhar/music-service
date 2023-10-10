import { useDispatch } from 'react-redux';
import spriteSVG from '../../assets/icon/sprite.svg';
import S from './HandlerLogout.module.scss';
import { setLogout } from '../../redux/slices/user';

export const HandlerLogout = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(setLogout());
        localStorage.clear();
    };
    return (
        <div className={S[`btn-logout`]}>
            <svg
                className={`${S[`btn-logout-svg`]}`}
                alt="exit"
                onClick={onLogout}
            >
                <use xlinkHref={`${spriteSVG}#icon-logout`}></use>
            </svg>
        </div>
    );
};
