import styled from "styled-components";
import { colors, gradients, shadows } from "../../Variables";
import { device } from "../../responsive";
import { AiFillPlayCircle } from "react-icons/ai";

// COMPONENTS
export const BgImg = styled.div``;
export const Overlay = styled.div``;

export const TitleBox = styled.div``;
export const Title = styled.h1``;
export const Desc = styled.p``;
export const Btns = styled.div``;
export const InfoBtn = styled.button``;
export const WatchBtn = styled.button``;
export const PlayIcon = styled(AiFillPlayCircle)``;
export const AllMovies = styled.button``;

export const RelatedBox = styled.div``;
export const RelatedWrapp = styled.div``;
export const RelatedImg = styled.div``;
// Trailer Box
export const TrailerBox = styled.div``;
export const TrailerTitle = styled.h4``;
export const TrailerImg = styled.div``;
export const TrailerVideo = styled.div``;

export const SingleSec = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 720px;
  overflow: hidden;
  ${BgImg} {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    img {
    }
    ${Overlay} {
      width: 100%;
      height: 100%;
      background: ${gradients.g2};
      z-index: 1;
      position: absolute;
      top: 0;
    }
  }
  ${TitleBox} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    left: 60px;
    /* right: 60px; */
    padding: 20px;
    max-width: 500px;
    background-color: ${colors.bgLight};
    backdrop-filter: blur(4px);
    border-radius: 4px;
    z-index: 2;
    ${Title} {
      color: ${colors.white};
      text-shadow: ${shadows.txtShadow};
    }
    ${Desc} {
      color: ${colors.white};
    }
    ${Btns} {
      display: flex;
      align-items: center;
      gap: 20px;
      ${InfoBtn} {
        display: flex;
        align-items: center;
        gap: 5px;
        box-shadow: ${shadows.btnShadow};
        background-color: ${colors.secondaryOp30};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.hover2};
        }
        ${PlayIcon} {
          font-size: 1.5rem;
          color: ${colors.white};
        }
      }
      ${WatchBtn} {
        display: flex;
        align-items: center;
        gap: 5px;

        box-shadow: ${shadows.btnShadow};
        background-color: ${colors.primary};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.hover};
        }
        ${PlayIcon} {
          font-size: 1.5rem;
          color: ${colors.white};
        }
      }
    }
    ${AllMovies} {
      background-color: ${colors.primary};
      color: ${colors.white};
      &:hover {
        background-color: ${colors.hover};
      }
    }
  }
  ${RelatedBox} {
    position: absolute;
    width: 100%;
    /* max-width: 900px; */
    /* overflow: hidden; */
    left: 0px;
    padding: 0px 60px;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 3;
    color: ${colors.white};
    h4 {
      font-size: 1.5rem;
    }
    ${RelatedWrapp} {
      width: 100%;
      height: 200px;
      .slick-slider {
        width: 100%;
        height: 100%;
        /* left: -20px; */
        .slick-arrow {
          z-index: 5;
          &:hover {
          }
          &::before {
            height: 100%;
            border-radius: 0px;
            font-size: 3rem;
          }
        }
        .slick-list {
          overflow: visible;
          height: 100%;
          .slick-track {
            padding: 10px 0px;
            margin: 0;
            display: flex;
            gap: 2rem;
            height: 100%;
            width: 100%;
            .slick-slide {
              height: 100%;

              div {
                height: 100%;
                ${RelatedImg} {
                  overflow: hidden;
                  border-radius: 4px;
                  height: 100%;
                  transition: 0.3s ease;
                  cursor: pointer;
                  img {
                    transition: 0.3s ease;
                  }
                  &:hover {
                    box-shadow: ${shadows.boxShadow};
                    img {
                      transform: scale(1.08);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${TrailerBox} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    right: 60px;
    /* min-width: 500px; */
    max-width: 500px;
    z-index: 2;
    ${TrailerTitle} {
      font-size: 1.5rem;
      font-weight: 400;
      color: ${colors.white};
    }
    ${TrailerImg} {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 4px;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        box-shadow: ${shadows.boxShadow};
      }
    }
    ${TrailerVideo} {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 4px;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        box-shadow: ${shadows.boxShadow};
      }
    }
  }
  @media ${device.laptopL} {
    ${TrailerBox} {
      width: 300px;
    }
  }

  @media ${device.laptop} {
    padding: 0px 40px;

    ${TitleBox} {
      max-width: 100%;
      left: 40px;
      right: 40px;
    }
    ${TrailerBox} {
      display: none;
    }
  }
  @media ${device.tablet} {
    padding: 0px 20px;
    ${TitleBox} {
      left: 20px;
      right: 20px;
    }
  }
  @media ${device.mobileL} {
    padding: 0px 10px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
