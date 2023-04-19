import { MainNav } from './renderMainNav';
import { MainCenterblock } from './renderMainCenterblock';
import { MainSidebar } from './renderMainSidebar';

export const Main = () => {
    return (
        <main className="main">
            <MainNav />
            <MainCenterblock />
            <MainSidebar />
        </main>
    );
};
