import { Main } from './main/Main';
import { Bar } from './bar/Bar';
import { Footer } from './footer/Footer';

export const Container = () => {
    return (
        <div className="container">
            <Main />
            <Bar />
            <Footer />
        </div>
    );
};
