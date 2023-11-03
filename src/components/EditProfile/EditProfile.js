import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { checkError, Validation } from "../Validation/validation";
import { Link } from "react-router-dom";

function EditProfile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { register, handleSubmit, setValue, watch, errors, isValid } =
    Validation();
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setValue("name", currentUser.name);
      setValue("email", currentUser.email);
    }
  }, [currentUser, setValue]);

  useEffect(() => {
    const isNameChanged = currentUser.name !== watch("name");
    const isEmailChanged = currentUser.email !== watch("email");
    setIsFormChanged(isNameChanged || isEmailChanged);
  }, [watch("name"), watch("email")]);

  function handleSubmitProfile(data) {
    props.handleProfileSubmit(data);
  }

  return (
    <div className="page__container page__container_no-footer">
      <main className="main">
        <section className="edit-profile">
          <h2 className="edit-profile__title">{`Привет, ${currentUser.name}!`}</h2>
          <form
            className="edit-profile__form"
            onSubmit={handleSubmit(handleSubmitProfile)}
          >
            <label className="edit-profile__field">
              Имя
              <input
                className={
                  errors.name
                    ? "edit-profile__input edit-profile__input_type_error"
                    : "edit-profile__input"
                }
                id="name-input"
                name="name"
                type="text"
                placeholder="Ваше имя"
                {...register("name", checkError("name"))}
                required
              />
              <span className="edit-profile-form__input-error">
                {errors.name ? errors.name.message : ""}
              </span>
            </label>
            <div className="edit-profile__line"></div>
            <label className="edit-profile__field">
              E-mail
              <input
                className={
                  errors.email
                    ? "edit-profile__input edit-profile__input_type_error"
                    : "edit-profile__input"
                }
                id="email-input"
                name="email"
                type="text"
                placeholder="Ваш email"
                {...register("email", checkError("email"))}
                required
              />
              <span className="edit-profile-form__input-error">
                {errors.email ? errors.email.message : ""}
              </span>
            </label>
            <button
              className="edit-profile__edit-button"
              type="submit"
              disabled={!isFormChanged || !isValid}
            >
              Сохранить
            </button>
            <Link
              className="edit-profile__back"
              type={"button"}
              to={"/profile"}
            >
              Назад
            </Link>
          </form>
        </section>
      </main>
    </div>
  );
}

export default EditProfile;
