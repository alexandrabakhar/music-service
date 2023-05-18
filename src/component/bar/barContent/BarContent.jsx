import { PlayerProgress } from './playerProgress/PlayerProgress';
import { PlayerBlock } from './playerBlock/PlayerBlock';
import styles from './BarContent.module.scss';

export const BarContent = () => {
    return (
        <div className={styles.content}>
            <PlayerProgress />
            <PlayerBlock />
        </div>
    );
};
