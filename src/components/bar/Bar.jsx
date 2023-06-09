import styles from './Bar.module.scss';
import { useRef, useState } from 'react';
// import track from '../../assets/music/track.mp3';
import { PlayerProgress } from './player/PlayerProgress';
import { PlayerBlock } from './player/PlayerBlock';
import { useGetTrackByTrackIDQuery } from '../../services/catalog';

export const Bar = () => {
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    const [duration, setDuration] = useState(0);
    //пока id = 8
    const { data, isLoading } = useGetTrackByTrackIDQuery(8);

    if (!data) {
        return <div>Загрузка трека...</div>;
    }
    const { track_file } = data;
    const trackSrc = track_file;
    const trackData = data;

    

    const onLoadedMetadata = () => {
        const duration_in_seconds = audioRef.current.duration;
        setDuration(duration_in_seconds);
        // console.log(duration);
        progressBarRef.current.max = duration_in_seconds;
    };

    console.dir(audioRef.current);
    if (data ) return (
        <div className={styles.bar}>
            {/* <BarContent /> */}
            <div className={styles.content}>
                <audio
                    ref={audioRef}
                    src={trackSrc}
                    onLoadedMetadata={onLoadedMetadata}
                ></audio>
                <PlayerProgress
                    audioRef={audioRef}
                    progressBarRef={progressBarRef}
                    duration={duration}
                />
                <PlayerBlock audioRef={audioRef} trackData={trackData}/>
            </div>
        </div>
    );
};
