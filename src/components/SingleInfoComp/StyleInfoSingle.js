import styled from "styled-components";
import { colors, gradients, shadows } from "../../Variables";
import { device } from "../../responsive";

// COMPONENTS
export const BgImg = styled.div``;
export const Overlay = styled.div``;

export const InfoWrapper = styled.div``;
export const ImgBox = styled.div``;
export const ImgCover = styled.div``;
export const Backbtn = styled.button``;

export const InfoBox = styled.div``;
export const Title = styled.h1``;
export const Desc = styled.p``;

export const InfoItems = styled.div``;
export const Item = styled.div``;

export const InfoBox2 = styled.div``;
export const InfoItems2 = styled.div``;
export const Item2 = styled.div``;
export const Related2 = styled.div``;
export const RelImg = styled.div``;

export const SingleInfoSec = styled.section`
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
  ${InfoWrapper} {
    position: absolute;
    display: flex;
    /* justify-content: space-between; */
    gap: 2rem;
    align-items: flex-start;
    margin-top: 190px;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0px 60px;
    z-index: 3;
    ${ImgBox} {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      flex: 1;
      ${ImgCover} {
        /* height: 500px; */
        overflow: hidden;
        min-height: 200px;
        border-radius: 4px;
        background-color: ${colors.black};
        transition: 0.3s ease;
        cursor: pointer;
        &:hover {
          box-shadow: ${shadows.boxShadow};
        }
      }
      a {
        ${Backbtn} {
          background-color: ${colors.primary};
          color: ${colors.white};
          width: 100%;
          display: block;
          &:hover {
            background-color: ${colors.hover};
          }
        }
      }
    }
    ${InfoBox} {
      width: 30%;
      flex: 2;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      background-color: ${colors.bgLight};
      color: ${colors.white};
      border-radius: 4px;
      ${Title} {
      }
      ${InfoItems} {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;
        ${Item} {
          color: ${colors.white};
          background-color: ${colors.secondaryOp30};
          padding: 1rem 2rem;
          border-radius: 4px;
          p {
            font-weight: 400;
            letter-spacing: 0.5px;
            text-transform: capitalize;
            span {
              font-weight: 300;
            }
          }
        }
      }
    }
    ${InfoBox2} {
      width: 30%;
      flex: 2;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      background-color: ${colors.bgLight};
      color: ${colors.white};
      border-radius: 4px;
      ${InfoItems2} {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;
        ${Item2} {
          color: ${colors.white};
          background-color: #e509146b;
          padding: 1rem 2rem;
          border-radius: 4px;
          &.imdb {
            background-color: rgba(238, 192, 23, 0.62);
          }
          &.rotten {
            background-color: ${colors.primary};
          }
          p {
            font-weight: 400;
            letter-spacing: 0.5px;
            text-transform: capitalize;
            span {
              font-weight: 300;
            }
          }
        }
      }
      ${Related2} {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .slick-slider {
          width: 100%;
          height: 100%;
          /* left: -20px; */
          .slick-arrow {
            z-index: 5;
            &.slick-next {
              right: 0;
            }
            &.slick-prev {
              left: 0;
            }
            &::before {
              height: 100%;
              border-radius: 0px;
              font-size: 3rem;
            }
          }
          .slick-list {
            overflow: hidden;
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
                  ${RelImg} {
                    width: 22%;
                    border-radius: 4px;
                    overflow: hidden;
                    transition: 0.3s ease;
                    cursor: pointer;
                    height: 150px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media ${device.laptopL} {
  }

  @media ${device.laptop} {
    padding: 0px 40px;
  }
  @media ${device.tablet} {
    padding: 0px 20px;
  }
  @media ${device.mobileL} {
    padding: 0px 10px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
