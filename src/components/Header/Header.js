import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/header__logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="место" />
      </Link>
      <nav className="header__data">
        <button
          className="header__register"
          type="button"
          onClick={() => navigate("/signup")}
        >
          Регистрация
        </button>
        <button
          className="header__in"
          type="button"
          onClick={() => navigate("/signin")}
        >
          Войти
        </button>
      </nav>
    </header>
  );
}

export default Header;
