import styles from '../CenterblockFilter.module.scss';
import {
    setFilterAuthor,
    setFilterGenre,
    setFilterYear,
} from '../../../../store/slices/filter';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
    selectAuthor,
    selectGenre,
    selectYear,
    deleteAuthor,
    deleteGenre,
    deleteYear,
} from '../../../../store/slices/filter';

export const CenterblockDropdown = ({ content, type, storeFilter }) => {
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
                    return (
                        <li
                            key={i}
                            className={styles.dropdownItem}
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
                    return (
                        <li
                            key={i}
                            className={styles.dropdownItem}
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
            <div className={styles['dropdown__radio-div']}>
                <input
                    type="radio"
                    id="new"
                    name="years"
                    value="Более новые"
                    onClick={() => handleSetFilter('new')}
                ></input>
                <label htmlFor="new">Более новые</label>

                <input
                    type="radio"
                    id="old"
                    name="years"
                    value="Более старые"
                    onClick={() => handleSetFilter('old')}
                ></input>
                <label htmlFor="old">Более старые</label>
            </div>
        );
    }
};

// const handleSetFilter = (item, target) => {
//     if (selectedArr.includes(item)) {
//         switch (type) {
//             case 'genre':
//                 // setSelected(false);

//                 dispatch(
//                     deleteGenre({
//                         genre: item,
//                     })
//                 );
//                 break;

//             case 'author':
//                 dispatch(
//                     setFilterAuthor({
//                         author: item,
//                     })
//                 );
//                 break;

//             case 'year':
//                 dispatch(
//                     setFilterYear({
//                         year: item,
//                     })
//                 );
//                 break;

//             default:
//                 break;
//         }
//     } else {
//         switch (type) {
//             case 'genre':

//                 dispatch(
//                     setFilterGenre({
//                         genre: item,
//                     })
//                 );
//                 break;

//             case 'author':

//                 dispatch(
//                     setFilterAuthor({
//                         author: item,
//                     })
//                 );
//                 break;

//             case 'year':
//                 dispatch(
//                     setFilterYear({
//                         year: item,
//                     })
//                 );
//                 break;

//             default:
//                 break;
//         }
//     }
// };
