import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login(props) {
  return (
    <div className="page__container page__container_only-content">
      <AuthForm
        title="Рады видеть!"
        buttonText="Войти"
        question="Еще не зарегистрированы? "
        linkText="Регистрация"
        link="/signup"
        handleUserSubmit={props.onLogIn}
        message={props.message}
      >
        <label className="auth-form__field">
          E-mail
          <input
            className="auth-form__input"
            id="email-input"
            name="email"
            type="text"
            required
          />
          <p className="auth-form__input-error"></p>
        </label>
        <label className="auth-form__field">
          Пароль
          <input
            className="auth-form__input"
            id="password-input"
            name="password"
            type="password"
          />
          <p className="auth-form__input-error"></p>
        </label>
      </AuthForm>
    </div>
  );
}

export default Login;
