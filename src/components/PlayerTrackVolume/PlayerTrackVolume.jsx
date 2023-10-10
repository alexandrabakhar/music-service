import { useEffect, useRef } from 'react';
import { PlayerControl } from '../PlayerControl/PlayerControl';
import S from './PlayerTrackVolume.module.scss';

export const PlayerTrackVolume = ({ state: { volume, muted }, controls }) => {
    const volumeRef = useRef(null);
    useEffect(() => {
        volumeRef.current.value = volume;
        volumeRef.current.style.setProperty(
            '--range-progress',
            `${volume * 100}%`
        );
    }, [volume]);
    const handleProgressChange = () => {
        controls.volume(Number(volumeRef.current.value));
    };

    return (
        <div className={S.content}>
            {muted ? (
                <PlayerControl
                    type="volume-off"
                    onClick={() => controls.unmute()}
                />
            ) : (
                <PlayerControl type="volume" onClick={() => controls.mute()} />
            )}

            <input
                className={S.progress}
                type="range"
                name="volume"
                min="0"
                step="0.05"
                max="1"
                ref={volumeRef}
                onChange={handleProgressChange}
            ></input>
        </div>
    );
};
