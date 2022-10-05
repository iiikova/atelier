import styled from "styled-components";

export const SubscribeContainerStyled = styled.div`
  background-color: var(--bg-main);
  height: 100%;
  padding: 1rem 0;
`;

export const SubscribeInnerStyled = styled.div`
  padding: 0 1rem;
  max-width: 1058px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  /* border-bottom: 1px solid #4b4136; */

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const SubscribeTitleStyled = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  color: var(--clr-secondary);

  &:nth-child(1) {
    margin-top: 100px;
  }
`;

export const SubscribeSubTitleStyled = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  color: var(--clr-primary);
  &:nth-child(6) {
    padding-left: 100px;
  }
`;

export const SubscribeBlocksStyled = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const SubscribeBlockStyled = styled.div`
  background: ${(props) => props.orange};
  width: 420px;
  height: 59px;
  border: 1px solid #4b4136;

  @media (max-width: 425px) {
    width: auto;
    display: block;
  }

  @media (min-width: 768px) {
    width: 420px;
    display: block;
  }
`;

export const SubscribeSocialStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  color: #fff;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const SubscribeSocialItemStyled = styled.div`
  border: 1px solid #4b4136;
  padding: 10px;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubscribeBehindItemStyled = styled.span`
  &:nth-child(1) {
    &:before {
      content: "“Subscribe”";
      position: absolute;
      font-size: 20px;
      color: var(--clr-secondary);
      opacity: 0.4;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
  &:nth-child(2) {
    display: flex;
    justify-content: end;
    align-items: end;
    align-self: end;
    text-align: right;
    &:before {
      content: "Data Use Policy.";
      position: absolute;
      font-size: 20px;
      color: var(--clr-secondary);
      opacity: 0.4;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
