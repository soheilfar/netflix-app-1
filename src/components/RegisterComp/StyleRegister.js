import styled from "styled-components";
import { colors } from "../../Variables";
import { device } from "../../responsive";

export const Background = styled.div``;
export const Overlay = styled.div``;

export const RegisterSec = styled.section`
  padding: 40px 60px;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: ${colors.black};
  ${Background} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  ${Overlay} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: ${colors.overlay};
  }
  @media ${device.laptop} {
    padding: 40px 40px;
  }
  @media ${device.tablet} {
    padding: 40px 20px;
  }
  @media ${device.mobileL} {
    padding: 40px 10px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
