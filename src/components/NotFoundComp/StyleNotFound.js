import styled from "styled-components";
import { colors } from "../../Variables";
import { device } from "../../responsive";

export const Background = styled.div``;
export const Overlay = styled.div``;

export const NotFoundBox = styled.div``;
export const NotFoundBtn = styled.button``;

export const NotFoundSec = styled.section`
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
  ${NotFoundBox} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colors.bgLight};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
    color: ${colors.white};
    padding: 2rem;
    border-radius: 4px;
    gap: 2rem;
    h1 {
      font-size: 3rem;
    }
    a {
      width: 100%;
      ${NotFoundBtn} {
        background-color: ${colors.primary};
        color: ${colors.white};
        display: block;
        width: 100%;
        padding: 10px;
        &:hover {
          background-color: ${colors.hover};
        }
      }
    }
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
