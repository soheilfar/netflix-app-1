import React from "react";
import { Info } from "@material-ui/icons";
import {
  BgImg,
  Overlay,
  TitleBox,
  Title,
  Desc,
  Btns,
  InfoBtn,
  WatchBtn,
  AllMovies,
  PlayIcon,
  SingleSec,
  RelatedBox,
  RelatedWrapp,
  RelatedImg,
  TrailerBox,
  TrailerTitle,
  // TrailerImg,
  TrailerVideo,
} from "./StyleSingle";
import { ImgFit, VideoFit } from "../../Variables";
import { useParams } from "react-router-dom";
import { useHomeContext } from "../../context/HomeContext/HomeContext";
import { Link } from "react-router-dom";
// FOR SLICK SLIDER
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const SingleComp = () => {
  let { title } = useParams();
  const { allMovies } = useHomeContext();
  // SINGLE MOVIE
  const singleMovie = allMovies.filter((move) => move.title === title);
  // SINGLE GENRE
  let singleGenre = singleMovie[0].genre.split(",");
  // console.log(singleGenre);

  // RELATED MOVIES
  const relatedMovies = allMovies.filter((move) => {
    let genre = move.genre.split(",");
    // genre = [...new Set(genre)];
    // console.log(genre);
    if (
      (genre.includes(singleGenre[0]) || genre.includes(singleGenre[1])) &&
      move.title !== singleMovie[0].title
    ) {
      return move;
    } else {
      return "";
    }
  });
  // console.log(relatedMovies);

  // SLIDER SETTINGS
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // prevArrow: <ArrowBackIos />,
    // nextArrow: <ArrowForwardIos />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <SingleSec>
        <BgImg>
          <ImgFit src={singleMovie[0].hover} />
          <Overlay />
        </BgImg>
        <TitleBox>
          <Title>{singleMovie[0].title}</Title>
          <Desc>{singleMovie[0].desc}</Desc>
          <Btns>
            <Link
              to={{
                pathname: `/single/${singleMovie[0].title}/video`,
                singleMovie: { singleMovie },
              }}
            >
              <WatchBtn>
                Watch movie <PlayIcon />
              </WatchBtn>
            </Link>

            <Link
              to={{
                pathname: `/single/${singleMovie[0].title}/info`,
              }}
            >
              <InfoBtn>
                More Info <Info />
              </InfoBtn>
            </Link>
          </Btns>
          <Link to={`/${singleMovie[0].type}`}>
            <AllMovies>See All List</AllMovies>
          </Link>
        </TitleBox>
        <RelatedBox>
          {relatedMovies.length > 0 && <h4>Related</h4>}
          <RelatedWrapp>
            <Slider {...settings}>
              {relatedMovies.map((related, indx) => {
                return (
                  <RelatedImg key={indx}>
                    <Link to={`/single/${related.title}`}>
                      <ImgFit src={related.hover} />
                    </Link>
                  </RelatedImg>
                );
              })}
            </Slider>
          </RelatedWrapp>
        </RelatedBox>
        <TrailerBox>
          <TrailerTitle>Trailers</TrailerTitle>
          {/* <TrailerImg>
            <Link to="/">
              <ImgFit src={singleMovie[0].hover} />
            </Link>
          </TrailerImg> */}
          <TrailerVideo>
            <Link to="/">
              <VideoFit src={singleMovie[0].video} autoPlay muted loop />
            </Link>
          </TrailerVideo>
        </TrailerBox>
      </SingleSec>
    </>
  );
};
