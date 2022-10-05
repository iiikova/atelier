import styled from "styled-components";
import vector from "../assets/images/Vector.png";

export const SocialContainerStyled = styled.div`
  background-color: var(--bg-main);
  height: 100%;
  padding: 1rem 0;
`;

export const SocialInnerStyled = styled.div`
  padding: 0 1rem;
  max-width: 1058px;
  margin: 0 auto;
  border-top: 1px solid #4b4136;
  border-bottom: 1px solid #4b4136;
`;

export const SocialItemsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 250px 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 0.05rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SocialBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${vector});
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;

  @media (max-width: 768px) {
    &:nth-child(3) {
      grid-column: 1 / 4;
      margin: 1rem 0;
    }
  }
`;
export const SocialTextStyled = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  color: var(--clr-secondary);
`;
export const SocialButtonStyled = styled.button`
  background: #ffae2b;
  border-radius: 0px;
  width: 122px;
  height: 50px;
`;

export const SocialImgStyled = styled.img`
  z-index: 22;
  width: 100%;
`;
