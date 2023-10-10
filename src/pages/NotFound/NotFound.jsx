import { useNavigate } from 'react-router-dom';
import S from './NotFound.module.scss';

export const NotFound = () => {
    const navigate = useNavigate();

    const handleMainButtonClick = () => {
        navigate('/');
    };
    return (
        <div className={S.container}>
            <h1 className={S.title}>404</h1>
            <h2 className={S.heading}>Страница не найдена</h2>
            <p className={S.description}>
                Возможно, она была удалена или перенесена на другой адрес
            </p>
            <button
                type="button"
                onClick={handleMainButtonClick}
                className={S.btn}
            >
                Вернуться на главную
            </button>
        </div>
    );
};
