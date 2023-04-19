export const CenterblockContent = () => {
    return (
        <div className="centerblock__content">
            <ContentTitle />
            <ContentPlaylist />
        </div>
    );
};

function ContentTitle() {
    return (
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    );
}

function ContentPlaylist() {
    return (
        <div className="content__playlist playlist">
            <PlaylistItem
                title="Guilt"
                author="Nero"
                album="Welcome Reality"
                time="4:44"
            />
            <PlaylistItem
                title="Elektro"
                author="Dynoro, Outwork, Mr. Gee"
                album="Elektro"
                time="2:22"
            />
            <PlaylistItem
                title="I’m Fire"
                author="Ali Bakgor"
                album="I’m Fire"
                time="2:22<"
            />
            <PlaylistItem
                title="Non Stop"
                author="Стоункат, Psychopath"
                album="Non Stop"
                time="4:12"
            />
            <PlaylistItem
                title="Run Run"
                author="Jaded, Will Clarke, AR/CO"
                album="Run Run"
                time="2:54"
            />
            <PlaylistItem
                title="Eyes on Fire"
                author="Blue Foundation, Zeds Dead"
                album="Eyes on Fire"
                time="5:20<"
            />
            <PlaylistItem
                title="Mucho Bien"
                author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
                album="Mucho Bien"
                time="3:41"
            />
            <PlaylistItem
                title="Knives n Cherries"
                author="minthaze"
                album="Captivating"
                time="1:48"
            />
            <PlaylistItem
                title="How Deep Is Your Love"
                author="Calvin Harris, Disciples"
                album="How Deep Is Your Love"
                time="3:32"
            />
            <PlaylistItem
                title="Morena"
                author="Tom Boxer"
                album="Soundz Made in Romania"
                time="3:36"
            />
        </div>
    );
}

function PlaylistItem(props) {
    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="http://">
                            {props.title}
                            <span className="track__title-span"></span>
                        </a>
                    </div>
                </div>
                <div className="track__author">
                    <a className="track__author-link" href="http://">
                        {props.author}
                    </a>
                </div>
                <div className="track__album">
                    <a className="track__album-link" href="http://">
                        {props.album}
                    </a>
                </div>
                <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">{props.time}</span>
                </div>
            </div>
        </div>
    );
}

// function PlaylistTrack(props) {
//     return (
//         <div className="playlist__track track">
//             <div className="track__title">
//                 <div className="track__title-image">
//                     <svg className="track__title-svg" alt="music">
//                         <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
//                     </svg>
//                 </div>
//                 <div className="track__title-text">
//                     <a className="track__title-link" href="http://">
//                         {props.title}
//                         <span className="track__title-span"></span>
//                     </a>
//                 </div>
//             </div>
//             <div className="track__author">
//                 <a className="track__author-link" href="http://">
//                     {props.author}
//                 </a>
//             </div>
//             <div className="track__album">
//                 <a className="track__album-link" href="http://">
//                     {props.album}
//                 </a>
//             </div>
//             <div className="track__time">
//                 <svg className="track__time-svg" alt="time">
//                     <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
//                 </svg>
//                 <span className="track__time-text">{props.time}</span>
//             </div>
//         </div>
//     );
// }
