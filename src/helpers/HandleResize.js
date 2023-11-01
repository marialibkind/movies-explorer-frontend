import { useEffect, useState } from "react";
import {
  ADDMOVIES1270,
  ADDMOVIES768,
  MAXADDMOVIES,
  MAXMOVIESONPAGE,
  MOVIESON1270,
  MOVIESON768,
} from "./Constants";

export function ResizeHandlerComponent() {
  const [moviesToShow, setMoviesToShow] = useState({
    moviesOnPage: MAXMOVIESONPAGE,
    addMoviesOnPage: MAXADDMOVIES,
  });

  useEffect(() => {
    function handleWindowResize() {
      const screenWidth = window.innerWidth;

      let moviesOnPage = MAXMOVIESONPAGE;
      let addMoviesOnPage = MAXADDMOVIES;

      if (screenWidth < 1270) {
        moviesOnPage = MOVIESON1270;
        addMoviesOnPage = ADDMOVIES1270;
      }

      if (screenWidth < 768) {
        moviesOnPage = MOVIESON768;
        addMoviesOnPage = ADDMOVIES768;
      }

      setMoviesToShow({ moviesOnPage, addMoviesOnPage });
    }

    handleWindowResize();

    let resizeTimeout;

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleWindowResize, 1000);
    });

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return moviesToShow;
}
