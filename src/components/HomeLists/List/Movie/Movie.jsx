import React, { useState } from "react";
import { ImgFit, VideoFit } from "../../../../Variables";
import {
  MovieBg,
  MovieOverlay,
  HoverLink,
  MovieBgHover,
  // PlayBtn,
  MovieContent,
  MovieTitle,
  DurationAndYear,
  MovieDesc,
  GenreAndSocials,
  MovieItemSec,
} from "./StyleMovie";
// THIS COMPONENT IS A LOOP
export const Movie = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  // HOVER FUNCTION
  const hoverHandler = (on) => {
    if (on === "hover") {
      setHovered(true);
    }
    if (on === "leave") {
      setHovered(false);
    }
  };

  return (
    <>
      <MovieItemSec
        onMouseEnter={() => hoverHandler("hover")}
        onMouseLeave={() => hoverHandler("leave")}
      >
        {hovered ? (
          <>
            <HoverLink
              to={{ pathname: `/single/${movie.title}`, movie: { movie } }}
            >
              {/* <MovieBgHover>
                <ImgFit src={movie.hover} />
              </MovieBgHover> */}
              <MovieBgHover>
                <VideoFit src={movie.video} autoPlay muted loop />
              </MovieBgHover>
              <MovieContent>
                <MovieTitle>
                  <h4>{movie.title}</h4>
                </MovieTitle>
                <DurationAndYear>
                  <span>Duration | {movie.duration}</span>
                  <span>Year | {movie.year}</span>
                </DurationAndYear>
                <MovieDesc>
                  <p>
                    {movie.desc.length > 120
                      ? movie.desc.slice(0, 120) + " . . ."
                      : movie.desc || "no description ..."}
                  </p>
                </MovieDesc>
                <GenreAndSocials>
                  <span>Genre | {movie.genre}</span>
                </GenreAndSocials>
              </MovieContent>
            </HoverLink>
          </>
        ) : (
          <>
            <HoverLink
              to={{ pathname: `/single/${movie.title}`, movie: { movie } }}
            >
              <MovieBg>
                <ImgFit src={movie.background} />
              </MovieBg>
              <MovieOverlay />
            </HoverLink>
          </>
        )}
      </MovieItemSec>
    </>
  );
};
