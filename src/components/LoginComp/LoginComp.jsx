import React from "react";

import { LoginForm } from "./LoginForm/LoginForm";
import { LoginSec, Background, Overlay } from "./StyleLogin";
import backImg from "../../images/register/background.jpg";
import { ImgFit } from "../../Variables";

export const LoginComp = () => {
  return (
    <>
      <LoginSec>
        <Background>
          <ImgFit src={backImg} />
        </Background>
        <Overlay />
        <LoginForm />
      </LoginSec>
    </>
  );
};
