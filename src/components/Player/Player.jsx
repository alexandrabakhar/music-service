import S from './Player.module.scss';
import { useState } from 'react';
import { PlayerTrackProgress } from '../PlayerTrackProgress/PlayerTrackProgress';
import { PlayerTrackInfo } from '../PlayerTrackInfo/PlayerTrackInfo';
import { useEffect } from 'react';
import { useAudio } from 'react-use';
import { useDispatch } from 'react-redux';

import { setCurrentTrackId } from '../../redux/slices/user';
import { PlayerControl } from '../PlayerControl/PlayerControl';
import { PlayerTrackVolume } from '../PlayerTrackVolume/PlayerTrackVolume';

export const Player = ({ tracks, currentTrackId }) => {
    const dispatch = useDispatch();
    const [isShuffle, setShuffle] = useState(false);
    const [isRepeat, setRepeat] = useState(false);

    if (!currentTrackId) return;
    let ind = tracks.findIndex((track) => track.id === currentTrackId);

    if (currentTrackId !== null && ind < 0) {
        ind = 0;
    }

    useEffect(() => {
        if (currentTrackId !== null) {
            dispatch(setCurrentTrackId({ currentId: tracks[ind].id }));
        }
    }, [currentTrackId, ind, tracks]);

    const playingTrack = tracks[ind];

    const [audio, state, controls] = useAudio({
        src: playingTrack.track_file,
        autoPlay: true,
        onEnded: () => {
            if (!isRepeat) {
                handleNext();
            } else {
                controls.seek(0);
                controls.play();
            }
        },
    });

    const getRandom = () => Math.floor(Math.random() * tracks.length);

    const handleNext = () => {
        if (isShuffle) {
            ind = getRandom();
        } else ind++;
        ind = ind > tracks.length - 1 ? null : tracks[ind].id;
        dispatch(setCurrentTrackId({ currentId: ind }));
    };

    const handlePrev = () => {
        if (isShuffle) {
            ind = getRandom();
        } else ind--;

        ind = ind < 0 ? null : tracks[ind].id;
        dispatch(setCurrentTrackId({ currentId: ind }));
    };

    return (
        currentTrackId !== null && (
            <div className={S.player}>
                {audio}
                <PlayerTrackProgress state={state} controls={controls} />
                <div className={S.controls}>
                    <PlayerControl type="prev" onClick={handlePrev} />
                    {state.playing ? (
                        <PlayerControl type={'stop'} onClick={controls.pause} />
                    ) : (
                        <PlayerControl type={'play'} onClick={controls.play} />
                    )}
                    <PlayerControl type="next" onClick={handleNext} />

                    <PlayerControl
                        type="repeat"
                        onClick={() => setRepeat(!isRepeat)}
                        isActive={isRepeat}
                    />

                    <PlayerControl
                        type="shuffle"
                        onClick={() => setShuffle(!isShuffle)}
                        isActive={isShuffle}
                    />
                </div>
                <PlayerTrackInfo track={playingTrack} />
                <PlayerTrackVolume state={state} controls={controls} />
            </div>
        )
    );
};
