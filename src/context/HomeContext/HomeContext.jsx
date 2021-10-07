import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import { movies } from "../../datas";

export const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
  const [allMovies, setAllmovies] = useState(movies);

  const [isScrolled, setIsScrolled] = useState(false);

  // TOGGLE NAVBAR FROM NORMAL POSITION TO FIXEd
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // FITER MOVIES BY TYPE
  const filtHandler = (givenType) => {
    const filtered = movies.filter((movie) => movie.type === givenType);
    if (!givenType) {
      setAllmovies(movies);
    }
    if (givenType === "movies" || givenType === "series") {
      setAllmovies(filtered);
    }
  };
  // LOCATION
  let location = useLocation();
  const path = location.pathname.toLowerCase().replace(`/result/`, "");
  // console.log(path);

  // GET RANDOM NUMBER
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let singleMovie = allMovies[getRandomInt(0, allMovies.length - 1)];

  // get all genres by filtered movies
  // MOVIE GENRES
  let movieGenre = [...new Set(allMovies.map((movie) => movie.genre))];
  movieGenre = movieGenre.toString();
  movieGenre = movieGenre.toLowerCase();
  movieGenre = movieGenre.replace(" ", "");
  movieGenre = movieGenre.split(",");
  movieGenre = [...new Set(movieGenre)];
  // console.log(movieGenre);

  // FILTER GENRES
  let filtLists;
  // FILTERED LISTS BY PATH OR LOCATION
  filtLists = movieGenre.filter((listGnr, type) => {
    if (path === "/" || path === "/movies" || path === "/series") {
      return movieGenre;
    }
    if (listGnr.toLowerCase().includes(path)) {
      return listGnr;
    } else {
      return "";
    }
  });
  return (
    <HomeContext.Provider
      value={{
        isScrolled,
        movieGenre,
        filtLists,
        allMovies,
        singleMovie,
        filtHandler,
        path,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};
