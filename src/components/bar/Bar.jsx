import { BarContent } from './barContent/BarContent';
import styles from './Bar.module.scss';

export const Bar = () => {
    return (
        <div className={styles.bar}>
            <BarContent />
        </div>
    );
};
