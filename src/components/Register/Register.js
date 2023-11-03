import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register(props) {
  return (
    <div className="page__container page__container_only-content">
      <AuthForm
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы? "
        linkText="Войти"
        link="/signin"
        handleUserSubmit={props.onRegister}
        message={props.message}
      ></AuthForm>
    </div>
  );
}

export default Register;
