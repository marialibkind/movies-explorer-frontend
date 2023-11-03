
import { NavLink, useNavigate } from "react-router-dom";
import Popup from "../Popup/Popup";

function MenuBurger({ isOpen, onClose }) {

    const navigate = useNavigate();

    function handleNavigateToProfile(){
        navigate("/profile");
        onClose();
    }
    return (

        <Popup isOpen={isOpen}>
            <nav className={`burger-menu ${isOpen ? "burger-menu_opened" : ""}`}>

                <button className="burger-menu__close-button" type="button"
                    onClick={onClose}></button>

                <ul className="burger-menu__list">
                    <li className="burger-menu__list-item">
                        <NavLink to="/" className={({ isActive }) => `burger-menu__list-link 
                        ${isActive ? "burger-menu__list-link_active" : ""} `}
                            onClick={onClose}
                        >Главная</NavLink>
                    </li>
                    <li className="burger-menu__list-item">
                        <NavLink to="/movies" className={({ isActive }) => `burger-menu__list-link 
                        ${isActive ? "burger-menu__list-link_active" : ""}`}
                            onClick={onClose}
                        >Фильмы</NavLink>
                    </li>
                    <li className="burger-menu__list-item">
                        <NavLink to="/saved-movies" className={({ isActive }) => `burger-menu__list-link 
                        ${isActive ? "burger-menu__list-link_active" : ""}`}
                            onClick={onClose}
                        >Сохранённые фильмы</NavLink>
                    </li>
                </ul>

                <button className="burger-menu__acc-button" type="button"
                    onClick={handleNavigateToProfile}></button>

            </nav>
        </Popup>
    );
}

export default MenuBurger;