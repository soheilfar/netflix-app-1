import styled from "styled-components";
import { colors } from "../../Variables";
import { device } from "../../responsive";

export const HomeListsSec = styled.section`
  padding: 40px 60px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  overflow: hidden;
  background-color: ${colors.black};
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
