import { PlayerControls } from './PlayerControls';
import { PlayerTrackPlay } from './PlayerTrackPlay';

export const Player = () => {
    return (
        <div className="bar__player player">
            <PlayerControls />
            <PlayerTrackPlay />
        </div>
    );
};
