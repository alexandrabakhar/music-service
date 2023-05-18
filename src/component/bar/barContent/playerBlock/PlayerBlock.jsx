import { Player } from './player/Player';
import { VolumeBlock } from './volumeBlock/VolumeBlock';
import styles from '../Player.module.scss';

export const PlayerBlock = () => {
    return (
        <div className={styles.block}>
            <Player />
            <VolumeBlock />
        </div>
    );
};
