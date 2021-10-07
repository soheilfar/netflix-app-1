import styled from "styled-components";
import { colors } from "../../../Variables";
import { device } from "../../../responsive";

export const GotoSignUp = styled.div``;
export const FormDesc1 = styled.div``;

export const FormSec = styled.div`
  text-align: center;
  padding: 30px 60px;
  max-width: 500px;
  width: 90%;
  position: absolute;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.black};
  z-index: 2;
  /* FORM DESC  */
  ${FormDesc1} {
    p {
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 2.5rem;
    }
  }

  ${GotoSignUp} {
    p {
      a {
        &:hover {
          color: ${colors.primary};
        }
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* margin: 0 auto; */
    gap: 2rem;
    .form-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      /* gap: 2rem; */

      label {
        transform: translateY(-50%);
        text-transform: capitalize;
        pointer-events: none;
        z-index: 2;
        font-size: 1.2rem;
        line-height: 1.2rem;
        color: ${colors.white};
      }
      input:focus-visible ~ label {
        color: red;
      }
      input {
        border: none;
        font-size: 1.8rem;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        background-color: ${colors.secondary};
        color: ${colors.white};

        &::placeholder {
          color: ${colors.white};
        }
        &:focus-visible {
          outline: 2px solid ${colors.primary};
        }
      }
    }
    button {
      background-color: ${colors.primary};
      color: ${colors.white};
      display: block;
      padding: 10px;
      &:hover {
        background-color: ${colors.hover};
      }
    }
  }

  @media ${device.laptop} {
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 2.4rem;
      }
    }
  }
  @media ${device.tablet} {
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 2.2rem;
      }
    }
  }
  @media ${device.mobileL} {
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 2rem;
      }
    }
  }
  @media ${device.mobileM} {
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 2rem;
      }
    }
  }
  @media ${device.mobileS} {
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 1.8rem;
      }
    }
  }
`;
