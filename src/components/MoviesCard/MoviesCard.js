function MoviesCard(props) {
  function time(duration) {
    const number = parseInt(duration);
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return `${hours}ч ${minutes}м`;
  }

  function like() {
    props.onLike(props.movie);
  }

  function remove() {
    props.onRemove(props.id);
  }

  return (
    <li>
      <div className="card">
        <button
          className={
            props.class === "like"
              ? "card__button card__button_clicked"
              : props.class === "default"
              ? "card__button"
              : "card__button card__button_delete"
          }
          onClick={props.class === "default" ? like : remove}
        ></button>
        <div>
          <a href={props.movie.trailerLink} target="_blank" rel="noreferrer">
            <img
              className="card__image"
              src={
                props.class !== "remove"
                  ? `https://api.nomoreparties.co/${props.movie.image.url}`
                  : props.movie.image
              }
              alt={props.movie.nameRU}
            />
          </a>
        </div>
        <div className="card__data">
          <h1 className="card__title">{props.movie.nameRU}</h1>
          <p className="card__duration">{time(props.movie.duration)}</p>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
