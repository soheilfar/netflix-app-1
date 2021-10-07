import React from "react";
import { SingleVideoSec, GobackBtn } from "./StyleSingleVideo";
import { Link, useParams } from "react-router-dom";
import { VideoFit } from "../../Variables";
import { useHomeContext } from "../../context/HomeContext/HomeContext";
import { ArrowBack } from "@material-ui/icons";

export const SingleVideoComp = () => {
  let { title } = useParams();
  const { allMovies } = useHomeContext();
  // SINGLE MOVIE
  const singleMovie = allMovies.filter((move) => move.title === title);
  console.log(singleMovie);

  return (
    <>
      <SingleVideoSec>
        <Link to={`/single/${singleMovie[0].title}`}>
          <GobackBtn>
            <ArrowBack />
            Go back
          </GobackBtn>
        </Link>
        <VideoFit src={singleMovie[0].video} autoPlay muted loop controls />
      </SingleVideoSec>
    </>
  );
};
