import { Main } from './main/Main';
import { Bar } from './bar/Bar';
import { Footer } from './footer/Footer';
import { ModalBlock } from './modal/modalBlock/ModalBlock';

import styles from './Container.module.scss';

export const Container = (props) => {
    if (props.modalType) {
        return (
            <div className={styles.container}>
                <ModalBlock modalType={props.modalType} />
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
