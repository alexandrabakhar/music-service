import styles from '../Bar.module.scss';

import { useRef, useState } from 'react';
import { useEffect } from 'react';

export const PlayerProgress = ({ state: { time, duration }, controls }) => {
    const progressRef = useRef(null);

    useEffect(() => {
        progressRef.current.value = time || 0;
        progressRef.current.style.setProperty(
            '--range-progress',
            `${(time / duration) * 100}%`
        );
    }, [time, duration]);

    const handleProgressChange = () => {
        controls.seek(Number(progressRef.current.value));
    };

    return (
        <input
            type="range"
            min="0"
            max={duration}
            ref={progressRef}
            className={styles.progress}
            onChange={handleProgressChange}
        />
    );
};
