import S from './PlaylistTitles.module.scss';
import spriteSVG from '../../assets/icon/sprite.svg';

export const PlaylistTitles = () => {
    return (
        <div className={S.titles}>
            <div className={`${S.col} ${S.col01}`}>ТРЕК</div>
            <div className={`${S.col} ${S.col02}`}>ИСПОЛНИТЕЛЬ</div>
            <div className={`${S.col} ${S.col03}`}>АЛЬБОМ</div>
            <div className={`${S.col} ${S.col04}`}>
                <svg className={S.svg} alt="time">
                    <use xlinkHref={`${spriteSVG}#icon-watch`}></use>
                </svg>
            </div>
        </div>
    );
};
