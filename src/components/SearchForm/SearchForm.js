import search from "../../images/icon.png";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { Validation } from "../Validation/validation";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchForm(props) {
  const { register, handleSubmit, setValue } = Validation();
  const [filmValue, setFilmValue] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      const savedQuery = sessionStorage.getItem("queryMovies");
      if (savedQuery) {
        setValue("film", savedQuery);
        setFilmValue(savedQuery);
      }
    }
  }, [location.pathname]);

  const onSubmit = (data) => {
    props.onSearch(data.film);
  };

  return (
    <section className="search">
      <form className="search__container" onSubmit={handleSubmit(onSubmit)}>
        <div className="search__part">
          <div className="search__part-container">
            <img src={search} className="search__part-icon" alt="" />

            <label className="search__part-film">
              <input
                className="search__input"
                type="text"
                placeholder="Фильм"
                name="film"
                {...register("film")}
                value={filmValue}
                onChange={(e) => setFilmValue(e.target.value)}
              />
            </label>
          </div>
          <div className="search-button">
            <button className="search__text search__text_small" type="submit">
              Найти
            </button>
          </div>
        </div>

        <span className="search__error"></span>
        <FilterCheckbox
          onToggle={props.onToggle}
          checked={props.checked}
          onSubmit={onSubmit}
          filmValue={filmValue}
        />
      </form>
    </section>
  );
}

export default SearchForm;
