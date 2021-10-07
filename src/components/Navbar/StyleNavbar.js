import styled from "styled-components";
import { colors, gradients, shadows } from "../../Variables";
import { device } from "../../responsive";
import { BiLogIn } from "react-icons/bi";

// COMPONENTS
export const Logo = styled.div``;
export const Menu = styled.div``;
export const Welcome = styled.div``;
export const ProfileImg = styled.div``;
export const SignBtn = styled.button``;
export const SignIcon = styled(BiLogIn)``;

export const NavSec = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  min-height: 150px;
  padding: 0 60px;
  z-index: 999;
  transition: 0.3s ease;

  /* DYNAMIC CLASS  */
  &.navbar-normal {
    background: ${gradients.g1};
    min-height: 150px;
  }
  &.navbara-fix {
    background-color: black;
    min-height: 90px;
    ${Logo} {
      width: 120px;
    }
  }

  /* LOGO  */
  ${Logo} {
    max-width: 200px;
    height: 100%;
    transition: 0.3s ease;
  }
  /* MENU  */
  ${Menu} {
    height: 100%;
    display: flex;
    gap: 10px;
    a {
      color: ${colors.white};
      font-weight: 400;
      letter-spacing: 1px;
      &:hover {
        color: ${colors.hover};
      }
    }
  }
  /* WLCOME  */
  ${Welcome} {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    letter-spacing: 1px;
    p {
      color: ${colors.white};
      span {
        font-weight: 500;
      }
    }
    ${ProfileImg} {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      overflow: hidden;
    }
    ${SignBtn} {
      background-color: ${colors.primary};
      color: ${colors.white};
      box-shadow: ${shadows.btnShadow};
      display: flex;
      align-items: center;
      gap: 5px;
      svg {
        font-size: 1.8rem;
      }
      &:hover {
        background-color: ${colors.hover};
      }
    }
    ${SignIcon} {
      padding: 5px;
      font-size: 1.2rem;
      width: 30px;
      height: 30px;
      border-radius: 4px;
      cursor: pointer;
      background-color: ${colors.primary};
      color: ${colors.white};
      box-shadow: ${shadows.btnShadow};
      &:hover {
        background-color: ${colors.hover};
      }
      display: none;
    }
  }
  @media ${device.laptop} {
    padding: 0 40px;
    /* LOGO  */
    ${Logo} {
      max-width: 150px;
      height: 100%;
    }
    ${Welcome} {
      p {
        display: none;
      }
    }
  }
  @media ${device.tablet} {
    padding: 0 20px;
    /* LOGO  */
    ${Logo} {
      max-width: 100px;
      height: 100%;
    }
    /* MENU  */
    ${Menu} {
      display: none;
    }
    /* WLCOME  */
    ${Welcome} {
      p {
        font-size: 1.2rem;
        span {
          font-size: 1.3rem;
          font-weight: 500;
        }
      }
      ${ProfileImg} {
        display: none;
      }
      ${SignBtn} {
        display: none;
      }
      ${SignIcon} {
        display: block;
      }
    }
  }
  @media ${device.mobileL} {
    padding: 0 10px;
  }
  @media ${device.mobileM} {
    /* WLCOME  */
    ${Welcome} {
      p {
        font-size: 1.2rem;
        span {
          font-size: 1.3rem;
          font-weight: 400;
        }
      }
    }
  }

  @media ${device.mobileS} {
    /* WLCOME  */
    ${Welcome} {
      p {
        display: none;
      }
    }
  }
`;
