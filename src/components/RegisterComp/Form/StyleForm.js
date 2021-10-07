import styled from "styled-components";
import { colors } from "../../../Variables";
import { device } from "../../../responsive";

export const FormTitle = styled.div``;
export const GotoSignUp = styled.div``;
export const FormDesc1 = styled.div``;
export const FormDesc2 = styled.div``;

export const FormSec = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 700px;
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
  /* overflow: hidden; */
  background-color: ${colors.bgLight};
  z-index: 2;
  /* FORM TITLE  */
  ${FormTitle} {
    h1 {
      font-size: 5rem;
      font-weight: 700;
    }
  }
  /* FORM DESC  */
  ${FormDesc1} {
    p {
      font-size: 3rem;
      font-weight: 500;
    }
  }
  /* FORM DESC 2 */
  ${FormDesc2} {
    p {
      font-size: 1.8rem;
      font-weight: 500;
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
  form,
  .starter {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    .form-item {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      height: 70px;
      overflow: hidden;
      label {
        position: absolute;
        top: 22%;
        left: 20px;
        transform: translateY(-50%);
        text-transform: capitalize;
        pointer-events: none;
        z-index: 2;
        font-size: 1.2rem;
        color: ${colors.secondary};
      }
      input:focus-visible ~ label {
        color: red;
      }
      input {
        flex: 2;
        height: 100%;
        border: none;
        font-size: 1.8rem;
        padding-left: 20px;
        border-radius: 4px 0px 0px 4px;

        &:focus-visible {
          border: 2px solid ${colors.primary};
          outline: none;
        }
      }
      button {
        display: flex;
        justify-content: center;
        flex: 1;
        height: 100%;
        border-radius: 0px 4px 4px 0px;
        font-size: 2rem;
        background-color: ${colors.primary};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.hover};
        }
      }
    }
  }
  form {
    .form-item {
      height: 50px;
      width: 80%;
      margin: 0 auto;
      input {
        font-size: 1.5rem;
      }
      button {
        font-size: 1.5rem;
      }
    }
  }
  @media ${device.laptop} {
    /* FORM TITLE  */
    ${FormTitle} {
      text-align: center;
      h1 {
        font-size: 4.5rem;
        font-weight: 700;
      }
    }
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 2.8rem;
        font-weight: 600;
      }
    }
    /* FORM DESC 2 */
    ${FormDesc2} {
      p {
        font-size: 1.6rem;
      }
    }
  }
  @media ${device.tablet} {
    /* FORM TITLE  */
    ${FormTitle} {
      text-align: center;
      h1 {
        font-size: 4rem;
        font-weight: 700;
      }
    }
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 2.6rem;
      }
    }
    /* FORM DESC 2 */
    ${FormDesc2} {
      p {
        font-size: 1.4rem;
      }
    }
  }
  @media ${device.mobileL} {
    /* FORM TITLE  */
    ${FormTitle} {
      text-align: center;
      h1 {
        font-size: 3.5rem;
        font-weight: 600;
      }
    }
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 2.4rem;
      }
    }
    /* FORM DESC 2 */
    ${FormDesc2} {
      p {
        font-size: 1.4rem;
      }
    }
  }
  @media ${device.mobileM} {
    /* FORM TITLE  */
    ${FormTitle} {
      text-align: center;
      h1 {
        font-size: 3rem;
        font-weight: 600;
      }
    }
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 2.2rem;
      }
    }
    /* FORM DESC 2 */
    ${FormDesc2} {
      p {
        font-size: 1.2rem;
      }
    }
  }
  @media ${device.mobileS} {
    /* FORM TITLE  */
    ${FormTitle} {
      text-align: center;
      h1 {
        font-size: 2.5rem;
        font-weight: 600;
      }
    }
    /* FORM DESC  */
    ${FormDesc1} {
      p {
        font-size: 2.1rem;
      }
    }
  }
`;
