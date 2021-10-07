import React from "react";
import { Form } from "./Form/Form";
import { RegisterSec, Background, Overlay } from "./StyleRegister";
import backImg from "../../images/register/background.jpg";
import { ImgFit } from "../../Variables";

export const RegisterComp = () => {
  return (
    <>
      <RegisterSec>
        <Background>
          <ImgFit src={backImg} />
        </Background>
        <Overlay />
        <Form />
      </RegisterSec>
    </>
  );
};
