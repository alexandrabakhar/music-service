import S from './Dropdown.module.scss';
import {
    setFilterAuthor,
    setFilterGenre,
    setFilterYear,
} from '../../redux/slices/filter';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
    selectAuthor,
    selectGenre,
    selectYear,
    deleteAuthor,
    deleteGenre,
    deleteYear,
} from '../../redux/slices/filter';

export const Dropdown = ({ content, type }) => {
    const dispatch = useDispatch();
    const selectedGenres = useSelector(selectGenre);
    const selectedAuthors = useSelector(selectAuthor);
    const selectedYears = useSelector(selectYear);

    const handleSetFilter = (item) => {
        switch (type) {
            case 'genre':
                selectedGenres.includes(item)
                    ? dispatch(
                          deleteGenre({
                              genre: item,
                          })
                      )
                    : dispatch(
                          setFilterGenre({
                              genre: item,
                          })
                      );
                break;

            case 'author':
                selectedAuthors.includes(item)
                    ? dispatch(
                          deleteAuthor({
                              author: item,
                          })
                      )
                    : dispatch(
                          setFilterAuthor({
                              author: item,
                          })
                      );
                break;

            case 'year':
                selectedYears.includes(item)
                    ? dispatch(
                          deleteYear({
                              year: item,
                          })
                      )
                    : dispatch(
                          setFilterYear({
                              year: item,
                          })
                      );
                break;

            default:
                break;
        }
    };

    if (type === 'genre') {
        return (
            <ul>
                {content.map((item, i) => {
                    const itemClass = selectedGenres.includes(item)
                        ? `${S.dropdownItem} ${S.selected}`
                        : S.dropdownItem;

                    return (
                        <li
                            key={i}
                            className={itemClass}
                            onClick={() => handleSetFilter(item)}
                        >
                            <span> {item} </span>
                        </li>
                    );
                })}
            </ul>
        );
    }

    if (type === 'author') {
        return (
            <ul>
                {content.map((item, i) => {
                    const itemClass = selectedAuthors.includes(item)
                        ? `${S.dropdownItem} ${S.selected}`
                        : S.dropdownItem;

                    return (
                        <li
                            key={i}
                            className={itemClass}
                            onClick={(e) => {
                                handleSetFilter(item);
                            }}
                        >
                            <span> {item} </span>
                        </li>
                    );
                })}
            </ul>
        );
    }

    if (type === 'year') {
        return (
            <div className={S['dropdown__radio-div']}>
                <input
                    type="radio"
                    id="new"
                    name="years"
                    value="Более новые"
                    onClick={(e) => {
                        selectedYears.includes('new')
                            ? (e.target.checked = false)
                            : (e.target.checked = true);

                        handleSetFilter('new');
                    }}
                ></input>
                <label
                    className={
                        selectedYears.includes('new') ? `${S.selected}` : ''
                    }
                    htmlFor="new"
                >
                    Более новые
                </label>

                <input
                    type="radio"
                    id="old"
                    name="years"
                    value="Более старые"
                    onClick={(e) => {
                        selectedYears.includes('old')
                            ? (e.target.checked = false)
                            : (e.target.checked = true);

                        handleSetFilter('old');
                    }}
                ></input>
                <label htmlFor="old">Более старые</label>
            </div>
        );
    }
};
