import { Main } from "./main/renderMain";
import { Bar } from "./bar/renderBar";
import { Footer } from "./footer/renderFooter";

export const Container = () => {
    return (
        <div className="container">
            <Main />
            <Bar />
            <Footer />
        </div>
    )
}