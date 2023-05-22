import styles from '../Player.module.scss';

import { useState } from 'react';
import { useEffect } from 'react';

export const PlayerProgress = ({ audioRef, progressBarRef, duration }) => {
    const [timeProgress, setTimeProgress] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            updateWidth();
        }, 50);
        return () => {
            clearInterval(t);
        };
    });

    function updateWidth() {
        setTimeProgress(audioRef.current.currentTime);
        progressBarRef.current.value = timeProgress || 0;

        progressBarRef.current.style.backgroundSize = `${
            ((timeProgress / duration) * 100)
        }% 100%`;
    }

    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
        updateWidth();
    };
    return (
        <input
            type="range"
            className={styles.progress}
            defaultValue={timeProgress}
            ref={progressBarRef}
            onChange={handleProgressChange}
        ></input>
    );
};
