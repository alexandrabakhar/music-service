import { PlayerProgress } from './player/PlayerProgress';
import { PlayerBlock } from './player/PlayerBlock';

export const BarContent = () => {
    return (
        <div className="bar__content">
            <PlayerProgress />
            <PlayerBlock />
        </div>
    );
};
