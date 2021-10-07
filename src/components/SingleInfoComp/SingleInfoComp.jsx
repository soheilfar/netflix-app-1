import React from "react";
import {
  BgImg,
  Overlay,
  SingleInfoSec,
  InfoWrapper,
  ImgBox,
  ImgCover,
  Backbtn,
  InfoBox,
  Title,
  Desc,
  InfoItems,
  Item,
  InfoBox2,
  InfoItems2,
  Item2,
  Related2,
  RelImg,
} from "./StyleInfoSingle";
import { Link } from "react-router-dom";
import { ImgFit } from "../../Variables";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { useHomeContext } from "../../context/HomeContext/HomeContext";

export const SingleInfoComp = () => {
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
    if (
      (genre.includes(singleGenre[0]) || genre.includes(singleGenre[1])) &&
      move.title !== singleMovie[0].title
    ) {
      return move;
    } else {
      return "";
    }
  });

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
      <SingleInfoSec>
        <BgImg>
          <ImgFit src={singleMovie[0].hover} />
          <Overlay />
        </BgImg>
        <InfoWrapper>
          <ImgBox>
            <ImgCover>
              <Link to={`/single/${singleMovie[0].title}`}>
                <ImgFit src={singleMovie[0].background} />
              </Link>
            </ImgCover>
            <Link to={`/single/${singleMovie[0].title}`}>
              <Backbtn>Go back</Backbtn>
            </Link>
          </ImgBox>
          <InfoBox>
            <Title>{singleMovie[0].title}</Title>
            <Desc>{singleMovie[0].desc}</Desc>
            <InfoItems>
              <Item>
                <p>
                  Release Date | <span>{singleMovie[0].releaseDate}</span>
                </p>
              </Item>
              <Item>
                <p>
                  director | <span>{singleMovie[0].director}</span>
                </p>
              </Item>
              <Item>
                <p>
                  music | <span>{singleMovie[0].music}</span>
                </p>
              </Item>
              <Item>
                <p>
                  cast |{" "}
                  <span>
                    {singleMovie[0].cast.length > 30
                      ? singleMovie[0].cast.slice(0, 30) + " .."
                      : singleMovie[0].cast || ""}
                  </span>
                </p>
              </Item>
            </InfoItems>
          </InfoBox>
          <InfoBox2>
            <InfoItems2>
              <Item2>
                <p>
                  type | <span>{singleMovie[0].type}</span>
                </p>
              </Item2>
              <Item2>
                <p>
                  year | <span>{singleMovie[0].year}</span>
                </p>
              </Item2>
              <Item2>
                <p>
                  genre | <span>{singleMovie[0].genre}</span>
                </p>
              </Item2>
              <Item2 className="imdb">
                <p>
                  imdb | <span>{singleMovie[0].imdb}</span>
                </p>
              </Item2>
              <Item2 className="rotten">
                <p>
                  rotten | <span>{singleMovie[0].rotten}</span>
                </p>
              </Item2>
            </InfoItems2>
            <Related2>
              <Slider {...settings}>
                {relatedMovies.map((related, indx) => {
                  return (
                    <RelImg key={indx}>
                      <Link to={`/single/${related.title}`}>
                        <ImgFit src={related.background} />
                      </Link>
                    </RelImg>
                  );
                })}
              </Slider>
            </Related2>
          </InfoBox2>
        </InfoWrapper>
      </SingleInfoSec>
    </>
  );
};
