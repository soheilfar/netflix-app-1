import styled from "styled-components";
import { colors } from "../../Variables";
import { device } from "../../responsive";

// COMPONENTS
export const GobackBtn = styled.button``;

export const SingleVideoSec = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 720px;
  overflow: hidden;
  ${GobackBtn} {
    background-color: ${colors.primary};
    color: ${colors.white};
    position: absolute;
    top: 190px;
    right: 60px;
    font-size: 2rem;
    /* left: 60px; */
    padding: 10px 20px;
    min-width: 20px;
    min-height: 80px;
    display: flex;
    gap: 2rem;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    z-index: 2;
    transition: 1s ease;
    &:hover {
      background-color: ${colors.hover};
    }
    svg {
      font-size: 2rem;
    }
  }
  &:hover {
    ${GobackBtn} {
      pointer-events: visible;
      opacity: 1;
    }
  }

  @media ${device.laptopL} {
  }

  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileS} {
  }
`;
