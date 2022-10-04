import styled from "styled-components";
import img1 from "../assets/images/IMAGE1.png";

export const PortfolioContainerStyled = styled.div`
  background-color: var(--bg-main);
  height: 100%;
  padding: 2rem 0;
`;

export const PortfolioInnerStyled = styled.div`
  padding: 0 1rem;
`;

export const PortfolioTextStyled = styled.p`
  color: var(--clr-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
export const PortfolioTitleStyled = styled.h1`
  color: var(--clr-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  margin-top: 1rem;
`;

export const PortfolioCollectionStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  color: #fff;
  padding: 2rem 0;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PortfolioItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 315px;
  border: 1px solid #4b4136;
`;
export const PortfolioImgStyled = styled.img`
  height: 190px;
  width: 305px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PortfolioNameStyled = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
