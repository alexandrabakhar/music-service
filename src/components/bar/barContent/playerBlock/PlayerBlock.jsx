import { Player } from './player/Player';
import { VolumeBlock } from './volumeBlock/VolumeBlock';
import styles from '../Player.module.scss';

export const PlayerBlock = ({ audioRef }) => {
    return (
        <div className={styles.block}>
            <Player audioRef={audioRef} />
            <VolumeBlock />
        </div>
    );
};
