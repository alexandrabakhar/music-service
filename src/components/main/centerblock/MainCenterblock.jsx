import { CenterblockSearch } from './centerblockSearch/CenterblockSearch';
import { CenterblockFilter } from './centerblockFilter/CenterblockFilter';
import { CenterblockContent } from './centerblockContent/CenterblockContent';

import styles from './MainCenterblock.module.scss';

export const MainCenterblock = (props) => {
    return (
        <div className={`${styles.centerblock} centerblock`}>
            <CenterblockSearch />
            <h2 className="centerblock__h2">Треки</h2>
            <CenterblockFilter />
            <CenterblockContent isLoading={props.pageLoading} />
        </div>
    );
};
