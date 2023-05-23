import { PlayerControls } from './playerControls/PlayerControls';
import { PlayerTrackPlay } from './playerTrackPlay/PlayerTrackPlay';
import styles from '../../Player.module.scss';

export const Player = ({ audioRef }) => {
    return (
        <div className={`${styles.player} player`}>
            <PlayerControls audioRef={audioRef} />
            <PlayerTrackPlay />
        </div>
    );
};
