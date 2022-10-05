import styled from "styled-components";

export const FooterContainerStyled = styled.div`
  background-color: var(--bg-main);
  height: 100%;
  padding: 1rem 0;
`;
export const FooterInnerStyled = styled.div`
  padding: 0 1rem;
  max-width: 1058px;
  margin: 0 auto;
  color: var(--clr-secondary);
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 11px;
  line-height: 30px;
`;

export const FooterLineStyled = styled.div`
  max-width: 1058px;
  height: 1px;
  background-color: #4b4136;
  margin: 0 1rem;
`;

export const FooterLeftStyled = styled.div`
  color: var(--clr-secondary);
`;
export const FooterRightStyled = styled.div``;
export const FooterDevStyled = styled.p`
  display: flex;
  gap: 5px;

  color: var(--clr-primary);
`;
export const FooterDevSpanStyled = styled.p`
  color: var(--clr-secondary);
`;
export const FooterLinksStyled = styled.div`
  display: flex;
  gap: 10px;
`;
export const FooterLinkStyled = styled.p``;
