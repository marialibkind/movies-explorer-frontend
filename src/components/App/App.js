import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Preloader from "../Preloader/Preloader";
import Movies from "../Movies/Movies";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import {
  getSavedMovies,
  login,
  loginWithToken,
  logout,
  register,
  removeMovie,
  saveMovies,
  updateProfile,
} from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import EditProfile from "../EditProfile/EditProfile";
import { getMovies } from "../../utils/MoviesApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [usePreloader, setUsePreloader] = useState(true);
  const showHeader = [
    "/",
    "/movies",
    "/saved-movies",
    "/profile",
    "/edit",
  ].includes(pathname);
  const showFooter = ["/", "/movies", "/saved-movies"].includes(pathname);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [useMessage, setUseMessage] = useState("");

  const [beatfilmMovies, setBeatfilmMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setUseMessage("");
    }, 6000);
  }, [useMessage]);

  function getUser() {
    setUsePreloader(true);
    loginWithToken()
      .then((user) => {
        if (user && typeof user === "object") {
          setIsLoggedIn(true);
          setCurrentUser(user);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setUsePreloader(false);
        setIsTokenChecked(true);
      });
  }

  function handleLogin({ email, password }) {
    setUsePreloader(true);
    login({ email, password })
      .then((res) => {
        if (res !== false) {
          setIsLoggedIn(true);
          navigate("/movies", { replace: true });
          getUser();
        }
      })
      .catch((error) => {
        setUseMessage(error.message);
        console.log(error.status);
      })
      .finally(() => {
        setUsePreloader(false);
      });
  }

  function handleRegister({ name, email, password }) {
    setUsePreloader(true);
    register({ name, email, password })
      .then((res) => {
        if (res !== false) {
          navigate("/signin", { replace: true });
          handleLogin({ email, password });
        }
      })
      .catch((error) => {
        setUseMessage(error.message);
        console.log(error.status);
      })
      .finally(() => {
        setUsePreloader(false);
      });
  }

  function handleProfileUpdate({ name, email }) {
    setUsePreloader(true);
    updateProfile({ name, email })
      .then((res) => {
        if (res !== false) {
          navigate("/profile", { replace: true });
          setUseMessage("Профиль успешно обновлен");
          getUser();
        }
      })
      .catch((error) => {
        setUseMessage(error.message);
        console.log(error.status);
      })
      .finally(() => {
        setUsePreloader(false);
      });
  }

  function handleLogout() {
    setUsePreloader(true);
    logout()
      .then((res) => {
        if (res !== false) {
          setIsLoggedIn(false);
          navigate("/", { replace: true });
          sessionStorage.clear();
          setUseMessage("");
          setCurrentUser({});
        }
      })
      .catch((error) => {
        setUseMessage(error.message);
        console.log(error.status);
      })
      .finally(() => {
        setUsePreloader(false);
      });
  }

  useEffect(() => {
    if (isLoggedIn) {
      setUsePreloader(true);
      Promise.all([getMovies(), getSavedMovies()])
        .then((res) => {
          const movies = res[0];
          const savedMovies = res[1];

          const updatedMovies = movies.map((movie) => {
            const savedMovie = savedMovies.find(
              (item) => item.movieId === movie.id,
            );
            if (savedMovie) {
              return { ...movie, class: "like", key: movie.id };
            }
            return { ...movie, class: "default", key: movie.id };
          });

          const updatedSavedMovies = savedMovies.map((movie) => {
            return { ...movie, class: "remove", key: movie._id };
          });

          setBeatfilmMovies(updatedMovies);
          setSavedMovies(updatedSavedMovies);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setUsePreloader(false);
  }, [isLoggedIn]);

  function handleLikeMovie(movie) {
    setUsePreloader(true);
    saveMovies(movie)
      .then((res) => {
        setBeatfilmMovies((state) =>
          state.map((el) =>
            el.id === res.movieId ? { ...el, class: "like" } : el,
          ),
        );
        res.class = "remove";
        setSavedMovies((prevMovies) => [...prevMovies, res]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setUsePreloader(false));
  }

  function handleRemoveMovie(movieID) {
    setUsePreloader(true);
    const removedMovie = savedMovies.find((item) => {
      return item.movieId === movieID ? item : "";
    });
    removeMovie(removedMovie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((el) => el.movieId !== movieID));

        setBeatfilmMovies((state) =>
          state.map((el) =>
            el.id === movieID ? { ...el, class: "default" } : el,
          ),
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setUsePreloader(false));
  }

  function handleOpenBurgerMenu() {
    setIsBurgerMenuOpen(true);
  }
  function handleCloseBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  return (
    <>
      <Preloader openPreloader={usePreloader} />

      <div className="page">
        {showHeader &&
          (!isLoggedIn ? (
            <Header />
          ) : (
            <HeaderAuth
              isBurgerMenuOpen={isBurgerMenuOpen}
              onBurgerMenuOpen={handleOpenBurgerMenu}
              onBurgerMenuClose={handleCloseBurgerMenu}
            />
          ))}
        {isTokenChecked ? (
          <CurrentUserContext.Provider value={currentUser}>
            <Routes>
              <Route path="/" element={<Main />} />

              <Route
                path="/movies"
                element={
                  <ProtectedRouteElement
                    isLoggedIn={isLoggedIn}
                    element={Movies}
                    beatfilmMovies={beatfilmMovies}
                    handleLikeMovie={handleLikeMovie}
                    handleRemoveMovie={handleRemoveMovie}
                  />
                }
              />

              <Route
                path="/saved-movies"
                element={
                  <ProtectedRouteElement
                    element={SavedMovies}
                    isLoggedIn={isLoggedIn}
                    handleRemoveMovie={handleRemoveMovie}
                    savedMovies={savedMovies}
                  />
                }
              />

              {isLoggedIn ? (
                <Route path="*" element={<ErrorPopup />} />
              ) : (
                <Route
                  path="/signup"
                  element={
                    <Register
                      onRegister={handleRegister}
                      message={useMessage}
                    />
                  }
                />
              )}
              {isLoggedIn ? (
                <Route path="*" element={<ErrorPopup />} />
              ) : (
                <Route
                  path="/signin"
                  element={<Login onLogIn={handleLogin} message={useMessage} />}
                />
              )}
              <Route
                path="/profile"
                element={
                  <ProtectedRouteElement
                    isLoggedIn={isLoggedIn}
                    element={Profile}
                    onLogOut={handleLogout}
                    message={useMessage}
                  />
                }
              />
              <Route
                path="/edit"
                element={
                  <ProtectedRouteElement
                    isLoggedIn={isLoggedIn}
                    element={EditProfile}
                    handleProfileSubmit={handleProfileUpdate}
                  />
                }
              />
              <Route path="*" element={<ErrorPopup />} />
            </Routes>
          </CurrentUserContext.Provider>
        ) : (
          <Preloader openPreloader={usePreloader} />
        )}
        {showFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
