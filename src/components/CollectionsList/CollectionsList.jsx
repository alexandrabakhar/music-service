import playlist1 from '../../assets/img/playlist01.png';
import playlist2 from '../../assets/img/playlist02.png';
import playlist3 from '../../assets/img/playlist03.png';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import S from './CollectionsList.module.scss';

import { setCurrentTrackId } from '../../redux/slices/user';

export const CollectionsList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlerCollectionGo = (collectionNumber) => {
        dispatch(setCurrentTrackId({ currentTrackId: null }));
        navigate(`/collection/${collectionNumber}`);
    };

    return (
        <ul className={S.list}>
            <li className={S.item}>
                <img
                    className={S.img}
                    src={playlist1}
                    alt={1}
                    onClick={() => handlerCollectionGo(1)}
                ></img>
            </li>
            <li>
                <img
                    className={S.img}
                    src={playlist2}
                    alt={2}
                    onClick={() => handlerCollectionGo(2)}
                ></img>
            </li>
            <li>
                <img
                    className={S.img}
                    src={playlist3}
                    alt={3}
                    onClick={() => handlerCollectionGo(3)}
                ></img>
            </li>
        </ul>
    );
};
