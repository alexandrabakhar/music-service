import { Player } from './Player';
import { VolumeBlock } from '../VolumeBlock';

export const PlayerBlock = () => {
    return (
        <div className="bar__player-block">
            <Player />
            <VolumeBlock />
        </div>
    );
};
