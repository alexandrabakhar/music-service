import logo from '../../../assets/img/logo.png';

export const NavLogo = () => {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src={logo} alt="logo"></img>
        </div>
    );
}