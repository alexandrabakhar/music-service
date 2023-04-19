import logo  from "../../assets/img/logo.png";
export const MainNav = () => {
    return (
        <nav className="main__nav nav">
            <NavLogo />
            <NavBurger />
            <NavMenu />
        </nav>
    );
};

function NavLogo() {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src={logo} alt="logo"></img>
        </div>
    );
}

function NavBurger() {
    return (
        <div className="nav__burger burger">
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
    );
}

function NavMenu() {
    return (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Главное
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Мой плейлист
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Войти
                    </a>
                </li>
            </ul>
        </div>
    );
}
