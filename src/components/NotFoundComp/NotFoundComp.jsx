import React from "react";
import {
  NotFoundSec,
  Background,
  Overlay,
  NotFoundBox,
  NotFoundBtn,
} from "./StyleNotFound";
import backImg from "../../images/register/background.jpg";
import { ImgFit } from "../../Variables";
import { Link } from "react-router-dom";

export const NotFoundComp = () => {
  return (
    <>
      <NotFoundSec>
        <Background>
          <ImgFit src={backImg} />
        </Background>
        <NotFoundBox>
          <h1>sorry the page not found!</h1>
          <Link to="/">
            <NotFoundBtn>Go back</NotFoundBtn>
          </Link>
        </NotFoundBox>
        <Overlay />
      </NotFoundSec>
    </>
  );
};
