import React, { useState } from "react";
import {
  BgImg,
  Overlay,
  TitleBox,
  Title,
  Desc,
  Btns,
  InfoBtn,
  WatchBtn,
  PlayIcon,
  GenresBox,
  ChooseBtn,
  ChooseIcon,
  GenresGroup,
  AnouncedWrapper,
  AnouncedBox,
  AnouncedBg,
  AnouncedOverlay,
  AnouncedTitle,
  HeroSec,
} from "./StyleHomeHero";
import { Info } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ImgFit } from "../../Variables";
import { useHomeContext } from "../../context/HomeContext/HomeContext";

// test img
import image1 from "../../images/movies/Shawshank redemption/shawshank.jpg";
import image2 from "../../images/serial/breaking bad/1.jpg";

export const HomeHero = () => {
  const { movieGenre, singleMovie, path, filtLists } = useHomeContext();
  const [gnrOpen, setGnrOpen] = useState(false);
  const [chooseGnre, setChooseGnre] = useState("All genres");
  // console.log(path);

  //   OPEN OR CLOSE GNRES BOX
  const openGnrBox = () => {
    setGnrOpen(!gnrOpen);
  };

  //   SET CHOOSE TITLE BTN NAME TO GNRE INDEX
  const setChooseBtn = (gnre) => {
    openGnrBox(true);
    setChooseGnre(gnre);
  };

  let newGenres = ["all", ...new Set(movieGenre)];

  // console.log(filtLists);
  // console.log(newGenres);
  return (
    <>
      <HeroSec>
        <BgImg>
          <ImgFit src={singleMovie.hover} />
          <Overlay />
        </BgImg>
        <TitleBox>
          <Title>{singleMovie.title}</Title>
          <Desc>{singleMovie.desc}</Desc>
          <Btns>
            <Link
              to={{
                pathname: `/single/${singleMovie.title}/video`,
                singleMovie: { singleMovie },
              }}
            >
              <WatchBtn>
                Watch movie <PlayIcon />
              </WatchBtn>
            </Link>
            <Link to={{ pathname: `/single/${singleMovie.title}` }}>
              <InfoBtn>
                More Info <Info />
              </InfoBtn>
            </Link>
          </Btns>
        </TitleBox>
        <GenresBox>
          <p>choose genre :</p>
          <ChooseBtn onClick={openGnrBox}>
            <p>
              {path === "/" ? (
                <>all</>
              ) : (
                <>{filtLists.length ? path.replace("/", "") : chooseGnre}</>
              )}
              <ChooseIcon
                style={{
                  transform: `${gnrOpen ? "rotate(-180deg)" : "rotate(0deg)"}`,
                }}
              />
            </p>
          </ChooseBtn>
          {gnrOpen && (
            <GenresGroup>
              {newGenres.map((gnre, indx) => (
                <div key={indx} onClick={() => setChooseBtn(gnre)}>
                  <Link to={gnre === "all" ? "/" : `/result/${gnre}`}>
                    {gnre}
                  </Link>
                </div>
              ))}
            </GenresGroup>
          )}
        </GenresBox>
        <AnouncedWrapper>
          <a href="https://www.imdb.com/search/title/?groups=top_250&sort=user_rating">
            <AnouncedBox>
              <AnouncedBg>
                <ImgFit src={image1} />
              </AnouncedBg>
              <AnouncedOverlay />
              <AnouncedTitle>
                <h4>top 250 imdb Movies</h4>
              </AnouncedTitle>
            </AnouncedBox>
          </a>
          <a href="https://www.imdb.com/chart/toptv/">
            <AnouncedBox>
              <AnouncedBg>
                <ImgFit src={image2} />
              </AnouncedBg>
              <AnouncedOverlay />
              <AnouncedTitle>
                <h4>top 250 imdb series</h4>
              </AnouncedTitle>
            </AnouncedBox>
          </a>
        </AnouncedWrapper>
      </HeroSec>
    </>
  );
};
