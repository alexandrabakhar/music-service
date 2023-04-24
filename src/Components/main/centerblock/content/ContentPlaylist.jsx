import { PlaylistItem } from './PlaylistItem';

export const ContentPlaylist = (props) => {
    return (
        <div className="content__playlist playlist">
            <PlaylistItem
                title="Guilt"
                author="Nero"
                album="Welcome Reality"
                time="4:44"
                isLoading={props.isLoading}
            />
            <PlaylistItem
                title="Elektro"
                author="Dynoro, Outwork, Mr. Gee"
                album="Elektro"
                time="2:22"
                isLoading={props.isLoading}
            />
            <PlaylistItem
                title="I’m Fire"
                author="Ali Bakgor"
                album="I’m Fire"
                time="2:22<"
                isLoading={props.isLoading}
            />
            <PlaylistItem
                title="Non Stop"
                author="Стоункат, Psychopath"
                album="Non Stop"
                time="4:12"
                isLoading={props.isLoading}
            />
            <PlaylistItem
                title="Run Run"
                author="Jaded, Will Clarke, AR/CO"
                album="Run Run"
                time="2:54"
                isLoading={props.isLoading}
            />
            <PlaylistItem
                title="Eyes on Fire"
                author="Blue Foundation, Zeds Dead"
                album="Eyes on Fire"
                time="5:20<"
                isLoading={props.isLoading}
            />
            <PlaylistItem
                title="Mucho Bien"
                author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
                album="Mucho Bien"
                time="3:41"
                isLoading={props.isLoading}
            />
            <PlaylistItem
                title="Knives n Cherries"
                author="minthaze"
                album="Captivating"
                time="1:48"
                isLoading={props.isLoading}
            />
            <PlaylistItem
                title="How Deep Is Your Love"
                author="Calvin Harris, Disciples"
                album="How Deep Is Your Love"
                time="3:32"
                isLoading={props.isLoading}
            />
            <PlaylistItem
                title="Morena"
                author="Tom Boxer"
                album="Soundz Made in Romania"
                time="3:36"
                isLoading={props.isLoading}
            />
        </div>
    );
};
