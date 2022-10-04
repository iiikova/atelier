import styled from "styled-components";
import img from "../assets/images/main.png";

export const MainContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${img});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 602px;
`;

export const MainInnerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
`;

export const MainPStyled = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--clr-secondary);
`;

export const MainTitleStyled = styled.h1`
  font-weight: 400;
  font-size: 70px;
  line-height: 80px;
  text-align: center;
  letter-spacing: 1px;
  left: calc(50% - 869px / 2 + 0.5px);
  top: calc(50% - 160px / 2 - 34px);
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 80px;
  text-align: center;
  letter-spacing: 1px;
  max-width: 869px;

  color: #ffffff;
`;

export const MainButtonPStyled = styled.button`
  width: 143px;
  height: 50px;
  color: var(--mainColor);
  background-color: var(--clr-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
`;
