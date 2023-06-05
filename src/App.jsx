import { Main } from './main/Main';
import { Bar } from './bar/Bar';
import { Footer } from './footer/Footer';
import { ModalBlock } from './modal/modalBlock/ModalBlock';

import styles from './app.module.scss';
import { ModalRegistration } from './modal/modalBlock/modalRegistration';

export const App = (props) => {
    if (props.modalType === 'registration') {
        return (
            <div className={styles.container}>
                <ModalRegistration />
            </div>
        );
    }
    if (props.modalType === 'login') {
        return (
            <div className={styles.container}>
                <ModalRegistration />
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <Main pageType={props.pageType} />
            <Bar />
            <Footer />
        </div>
    );
};
