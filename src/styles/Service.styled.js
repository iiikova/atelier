import styled from "styled-components";

export const ServiceContainerStyled = styled.div`
  background-color: var(--bg-main);
  height: 100%;
  padding: 4rem 0;
`;

export const ServiceInnerStyled = styled.div`
  padding: 0 1rem;
  width: 1058px;
  margin: 0 auto;
`;

export const ServiceTextStyled = styled.p`
  color: var(--clr-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
export const ServiceTitleStyled = styled.h1`
  color: var(--clr-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  margin-top: 1rem;
`;

export const ServiceItemsStyled = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  padding: 4rem 0;
`;

export const ServiceItemStyled = styled.div`
  color: #fff;
  height: 350px;
  width: 400px;
  border: 1px solid #4b4136;
  padding: 4rem 6rem 4rem 4rem;
  display: grid;
  justify-content: center;

  &:nth-child(2) {
    margin-top: 10px;
  }
  &:nth-child(3) {
    margin-top: 20px;
  }
`;

export const ServiceImgStyled = styled.img``;

export const ServiceH2Styled = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 40px;
  color: var(--clr-secondary);
`;

export const ServiceH3Styled = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: var(--clr-primary);
`;

export const ServicePStyled = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 26px;
  color: var(--clr-primary);
`;
