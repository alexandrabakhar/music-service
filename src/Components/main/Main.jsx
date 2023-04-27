import { MainNav } from './nav/MainNav';
import { MainCenterblock } from './centerblock/MainCenterblock';
import { MainSidebar } from './sidebar/MainSidebar';

export const Main = () => {
    return (
        <main className="main">
            <MainNav />
            <MainCenterblock />
            <MainSidebar />
        </main>
    );
};
