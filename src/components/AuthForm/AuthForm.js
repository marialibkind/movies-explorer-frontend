import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/header__logo.png";
import { Validation, checkError } from "../Validation/validation";

function AuthForm({
  title,
  buttonText,
  question,
  linkText,
  link,
  handleUserSubmit,
  message,
}) {
  const { register, handleSubmit, errors, isValid } = Validation();
  console.log(message);

  function handleSubmitAuth(data) {
    handleUserSubmit(data);
  }

  const location = useLocation();
  const login = location.pathname === "/signin";

  return (
    <div className="page__container page__container_only-content">
      <section className="auth-form">
        <Link className="auth-form__logo" to="/">
          <img className="auth-form__img" src={logo} alt="Логотип" />
        </Link>
        <h2 className="auth-form__title">{title}</h2>
        <form
          className="auth-form__container"
          onSubmit={handleSubmit(handleSubmitAuth)}
        >
          {!login ? (
            <label className="auth-form__field">
              Имя
              <input
                className={
                  errors.name
                    ? "auth-form__input auth-form__input_type_error"
                    : "auth-form__input"
                }
                id="name-input"
                type="text"
                placeholder="Ваше имя"
                name={"name"}
                {...register("name", checkError("name"))}
                required
              />
              <span className="auth-form__input-error">
                {errors.name ? errors.name.message : ""}
              </span>
            </label>
          ) : (
            ""
          )}

          <label className="auth-form__field">
            E-mail
            <input
              className={
                errors.email
                  ? "auth-form__input auth-form__input_type_error"
                  : "auth-form__input"
              }
              id="email-input"
              name="email"
              type="text"
              {...register("email", checkError("email"))}
              placeholder="Ваш email"
              required
            />
            <span className="auth-form__input-error">
              {errors.email ? errors.email.message : ""}
            </span>
          </label>
          <label className="auth-form__field">
            Пароль
            <input
              className={
                errors.password
                  ? "auth-form__input auth-form__input_type_error"
                  : "auth-form__input"
              }
              id="password-input"
              name="password"
              type="password"
              {...register("password", checkError("password"))}
              placeholder="Ваш пароль"
            />
            <span className="auth-form__input-error">
              {errors.password ? errors.password.message : ""}
            </span>
          </label>
          <span className="auth-form__error">{message}</span>
          <button
            className="auth-form__submit-button"
            type="submit"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>
        <p className="auth-form__text">
          {question}
          <Link className="auth-form__link" to={link}>
            {linkText}
          </Link>
        </p>
      </section>
    </div>
  );
}

export default AuthForm;
