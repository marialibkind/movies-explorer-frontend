function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {props.moviesCards.length > 0 ? (
        <ul className="movies-card-list__cards">{props.moviesCards}</ul>
      ) : (
        <p className={"movies__list-notfound"}>Ничего не найдено</p>
      )}
      <button
        className={
          props.moviesCards.length < props.movies && !props.isSaved
            ? "movies-card-list__button"
            : "movies-card-list__button movies-card-list__button_hidden"
        }
        type="button"
        onClick={() => props.addMovies()}
      >
        Ещё
      </button>
    </section>
  );
}
export default MoviesCardList;
