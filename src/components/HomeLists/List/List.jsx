import React, { useRef, useState, useEffect } from "react";
import {
  ListSec,
  ListTitle,
  ListWrapper,
  ActionBtns,
  LeftBtns,
  RightBtns,
} from "./StyleList";
import { Movie } from "./Movie/Movie";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { useHomeContext } from "../../../context/HomeContext/HomeContext";

export const List = ({ allMovies, genre, type }) => {
  const { path } = useHomeContext();
  const sliderRef = useRef(null);

  // SLIDE NUMBER
  const [slideNumber, setSlideNumber] = useState(0);
  // console.log(slideNumber);

  // SLIDELIST
  const [slideList, setSlideList] = useState(true);
  useEffect(() => {
    if (path !== `/${type}`) {
      sliderRef.current.style.transform = "translateX(0px)";
      setSlideList(false);
    } else {
      setSlideList(true);
    }
    sliderRef.current.style.transform = "translateX(0px)";
  }, [path, type]);

  // FILTER MOVIES
  const moviesFiltByType = allMovies.filter((movie) => {
    if (type === "movies" || type === "series") {
      return movie.type === type;
    } else {
      return movie;
    }
  });
  let filtMovies = moviesFiltByType.filter((movie) => {
    let singleGenre = movie.genre;
    singleGenre = singleGenre.replace(" ", "");
    singleGenre = singleGenre.split(",");
    return singleGenre.includes(genre.toLowerCase());
  });
  // console.log(filtMovies.length - 1);

  // SLIDER FUNCTIONs
  const handleSlide = (direction) => {
    let distance = sliderRef.current.getBoundingClientRect().x - 60;
    // console.log(distance);
    console.log(
      sliderRef.current.children[filtMovies.length - 1].getBoundingClientRect()
        .right
    );

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);

      sliderRef.current.style.transform = `translateX(${
        264 + distance + 20
      }px)`;
    }
    if (direction === "right" && slideNumber < filtMovies.length - 1 - 4) {
      setSlideNumber(slideNumber + 1);

      sliderRef.current.style.transform = `translateX(${
        -264 + distance - 20
      }px)`;
    }
  };

  return (
    <>
      <ListSec>
        <ListTitle>
          <h3>{genre}</h3>
        </ListTitle>
        <ListWrapper
          style={{ display: `${slideList ? "flex" : "grid"}` }}
          ref={sliderRef}
        >
          {filtMovies &&
            filtMovies.map((movie, index) => (
              <Movie type={type} ListGenre={genre} movie={movie} key={index} />
            ))}
        </ListWrapper>
        {slideList && (
          <ActionBtns>
            {slideNumber > 0 && (
              <LeftBtns onClick={() => handleSlide("left")}>
                <KeyboardArrowLeft />
              </LeftBtns>
            )}
            {slideNumber < filtMovies.length - 1 - 4 && (
              <RightBtns onClick={() => handleSlide("right")}>
                <KeyboardArrowRight />
              </RightBtns>
            )}
          </ActionBtns>
        )}
      </ListSec>
    </>
  );
};
