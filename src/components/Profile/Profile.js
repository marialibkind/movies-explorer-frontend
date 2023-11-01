import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="page__container page__container_no-footer">
      <main className="main">
        <section className="profile">
          <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
          <form className="profile__form">
            <label className="profile__field">
              Имя
              <p className="profile__input">{currentUser.name}</p>
            </label>
            <div className="profile__line"></div>
            <label className="profile__field">
              E-mail
              <p className="profile__input">{currentUser.email}</p>
            </label>
            <span className="profile__message">{props.message}</span>
            <Link className="profile__edit-button" type="button" to="/edit">
              Редактировать
            </Link>
            <button
              className="profile__logout"
              type="button"
              onClick={props.onLogOut}
            >
              Выйти из аккаунта
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Profile;
