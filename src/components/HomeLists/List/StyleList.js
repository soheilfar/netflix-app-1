import styled from "styled-components";
import { colors } from "../../../Variables";
import { device } from "../../../responsive";

export const ListTitle = styled.div``;
export const ListWrapper = styled.div``;
// ARROWS
export const ActionBtns = styled.div``;
export const LeftBtns = styled.button``;
export const RightBtns = styled.button``;

export const ListSec = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  /* overflow: hidden; */
  position: relative;

  ${ListTitle} {
    color: ${colors.white};
  }
  ${ListWrapper} {
    min-height: 200px;
    display: flex;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    /* flex: 1; */
    gap: 2rem;
    transition: 0.3s ease-in-out;
    transform: translateX(0px);
  }
  ${ActionBtns} {
    position: absolute;
    width: 100%;
    height: calc(100% - 55px);
    top: 56px;
    left: 0;
    pointer-events: none;
    /* ARROWS  */
    button {
      position: absolute;
      top: 0;
      pointer-events: auto;
      z-index: 5;
      background-color: ${colors.bgLight};
      /* transform: translateY(-50%); */
      color: ${colors.white};
      padding: 0;
      height: 100%;
      border-radius: 0px;
      width: 41px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.bgLight};
      &:hover {
        background-color: #c6030d91;
      }
      svg {
        font-size: 4rem;
      }
    }
    /* LEFT ARROW  */
    ${LeftBtns} {
      left: -60px;
    }
    ${RightBtns} {
      right: -60px;
    }
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
