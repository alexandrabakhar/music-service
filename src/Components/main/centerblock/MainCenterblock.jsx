import { CenterblockSearch } from './CenterblockSearch';
import { CenterblockFilter } from './CenterblockFilter';
import { CenterblockContent } from './content/CenterblockContent';


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
