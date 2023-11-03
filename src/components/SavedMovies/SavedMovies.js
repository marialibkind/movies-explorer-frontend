import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState } from "react";
import { filterMovies } from "../../helpers/FilterMovies";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies(props) {
  const [query, setQuery] = useState("");
  const [shortFilmsOnly, setShortFilmsOnly] = useState(false);

  const movies = filterMovies(props.savedMovies, query, shortFilmsOnly, 0);

  const userMoviesCards = movies.filteredMovies.map((el) => {
    return (
      <MoviesCard
        key={el.movieId}
        id={el.movieId}
        class={el.class}
        movie={el}
        onRemove={props.handleRemoveMovie}
      />
    );
  });

  function handleSearch(query) {
    setQuery(query);
  }

  function handleToggleShortFilms(checked) {
    setShortFilmsOnly(checked);
  }

  return (
    <main className="saved-movies">
      <SearchForm
        onSearch={handleSearch}
        onToggle={handleToggleShortFilms}
        checked={shortFilmsOnly}
      />
      <MoviesCardList isSaved={true} moviesCards={userMoviesCards} />
    </main>
  );
}
export default SavedMovies;
