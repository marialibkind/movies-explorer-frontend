export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

function getResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export const getMovies = () =>
  fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(getResponse);
