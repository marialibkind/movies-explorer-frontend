import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { ResizeHandlerComponent } from "../../helpers/HandleResize";
import { useEffect, useState } from "react";
import { filterMovies } from "../../helpers/FilterMovies";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies(props) {
  const moviesToShow = ResizeHandlerComponent();
  const [query, setQuery] = useState(
    sessionStorage.getItem("queryMovies") || "",
  );
  const [shortFilmsOnly, setShortFilmsOnly] = useState(() => {
    const savedShortFilmsOnly = sessionStorage.getItem("shortFilmsOnlyMovies");
    return savedShortFilmsOnly ? JSON.parse(savedShortFilmsOnly) : false;
  });
  const [movieCount, setMovieCount] = useState(0);

  useEffect(() => {
    setMovieCount(moviesToShow.moviesOnPage);
  }, [moviesToShow, query]);

  useEffect(() => {
    sessionStorage.setItem("queryMovies", query);
  }, [query]);

  useEffect(() => {
    sessionStorage.setItem(
      "shortFilmsOnlyMovies",
      JSON.stringify(shortFilmsOnly),
    );
  }, [shortFilmsOnly]);

  const movies = filterMovies(
    props.beatfilmMovies,
    query,
    shortFilmsOnly,
    movieCount,
  );

  const moviesCards = movies.filteredMovies.map((el) => {
    return (
      <MoviesCard
        key={el.id}
        id={el.id}
        class={el.class}
        movie={el}
        onRemove={props.handleRemoveMovie}
        onLike={props.handleLikeMovie}
      />
    );
  });

  function handleSearch(query) {
    setQuery(query);
  }

  function loadMoreMovies() {
    setMovieCount(movieCount + moviesToShow.addMoviesOnPage);
  }

  function handleToggleShortFilms(checked) {
    setShortFilmsOnly(checked);
  }

  return (
    <main className="movies">
      <SearchForm
        onSearch={handleSearch}
        onToggle={handleToggleShortFilms}
        checked={shortFilmsOnly}
      />

      <MoviesCardList
        moviesCards={moviesCards}
        addMovies={loadMoreMovies}
        maxMovies={movieCount}
        isSaved={false}
        movies={movies.countMovies}
      />
    </main>
  );
}
export default Movies;
