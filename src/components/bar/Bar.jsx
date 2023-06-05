import styles from './Bar.module.scss';
import { useRef, useState } from 'react';
import track from '../../assets/music/track.mp3';
import { PlayerProgress } from './player/PlayerProgress';
import { PlayerBlock } from './player/PlayerBlock';


export const Bar = () => {
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    const [duration, setDuration] = useState(0);

    const onLoadedMetadata = () => {
        const duration_in_seconds = audioRef.current.duration;
        setDuration(duration_in_seconds);
        progressBarRef.current.max = duration_in_seconds;
    };

    console.dir(audioRef.current);
    return (
        <div className={styles.bar}>
            {/* <BarContent /> */}
            <div className={styles.content}>
            <audio
                ref={audioRef}
                src={track}
                onLoadedMetadata={onLoadedMetadata}
            ></audio>
            <PlayerProgress
                audioRef={audioRef}
                progressBarRef={progressBarRef}
                duration={duration}
            />
            <PlayerBlock audioRef={audioRef} />
        </div>
        </div>
    );
};
