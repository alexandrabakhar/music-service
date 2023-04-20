import { MainNav } from './MainNav';
import { MainCenterblock } from './MainCenterblock';
import { MainSidebar } from './MainSidebar';

export const Main = () => {
    return (
        <main className="main">
            <MainNav />
            <MainCenterblock />
            <MainSidebar />
        </main>
    );
};
