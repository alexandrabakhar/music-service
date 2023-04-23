export const NavBurger = ({ onClick }) => {
    const changeVisibility = () => {
        onClick();
    };

    return (
        <div onClick={changeVisibility} className="nav__burger burger">
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
    );
}