import { ResizeHandlerComponent } from "./HandleResize";
import { SHORTMOVIESDURATION } from "./Constants";

export function filterMovies(movies, query, isShortFilm, count) {
  const defaultCount = ResizeHandlerComponent();

  if (!movies) {
    return [];
  }

  let filteredMovies = movies;

  if (query) {
    const lowercaseQuery = query.toLowerCase();
    filteredMovies = filteredMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(lowercaseQuery) ||
        movie.nameEN.toLowerCase().includes(lowercaseQuery),
    );
  }

  if (isShortFilm) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.duration <= SHORTMOVIESDURATION,
    );
  }

  const countMovies = filteredMovies.length;

  filteredMovies = filteredMovies.slice(0, count ? count : defaultCount.count);

  return { filteredMovies, countMovies };
}
