import { CenterblockContent } from './renderCenterblockContent';

export const MainCenterblock = () => {
    return (
        <div className="main__centerblock centerblock">
            <CenterblockSearch />
            <h2 className="centerblock__h2">Треки</h2>
            <CenterblockFilter />
            <CenterblockContent />
        </div>
    );
};

function CenterblockSearch() {
    return (
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </svg>
            <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
            ></input>
        </div>
    );
}

function CenterblockFilter() {
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className="filter__button button-author _btn-text">
                исполнителю
            </div>
            <div className="filter__button button-year _btn-text">
                году выпуска
            </div>
            <div className="filter__button button-genre _btn-text">жанру</div>
        </div>
    );
}
