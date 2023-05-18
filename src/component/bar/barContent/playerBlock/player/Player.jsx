import { PlayerControls } from './playerControls/PlayerControls';
import { PlayerTrackPlay } from './playerTrackPlay/PlayerTrackPlay';
import styles from '../../Player.module.scss';

export const Player = () => {
    return (
        <div className={`${styles.player} player`}>
            <PlayerControls />
            <PlayerTrackPlay />
        </div>
    );
};
