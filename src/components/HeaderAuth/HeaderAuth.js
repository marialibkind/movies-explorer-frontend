import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/header__logo.png";
import MenuBurger from "../MenuBurger/MenuBurger";
import { Link } from "react-router-dom";

function HeaderAuth({ isBurgerMenuOpen, onBurgerMenuOpen, onBurgerMenuClose }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header
      className={`header-auth ${
        pathname === "/" ? "header-auth_place_main" : ""
      }`}
    >
      <Link to="/" className="header-auth__link-logo">
        <img src={logo} className="header-auth__logo" alt="место"></img>
      </Link>
      <ul className="header-auth__data">
        <li>
          <NavLink to="/movies" className="header-auth__films">
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="header-auth__films header-auth__films_saved"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li>
          <button
            className={`header-auth__prof ${
              pathname === "/" ? "header-auth__prof_place_main" : ""
            }`}
            type="button"
            onClick={() => navigate("/profile")}
          />
        </li>
      </ul>
      <button
        type="button"
        className="header-auth__burger"
        onClick={onBurgerMenuOpen}
      ></button>
      <MenuBurger isOpen={isBurgerMenuOpen} onClose={onBurgerMenuClose} />
    </header>
  );
}

export default HeaderAuth;
