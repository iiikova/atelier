import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  background-color: var(--bg-main);
  display: flex;
  align-items: center;
`;

export const NavbarInnerStyled = styled.header`
  width: 1058px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--clr-secondary);
`;

export const NavbarHeaderStyled = styled.header`
  display: flex;
`;

export const NavbarLogoStyled = styled.div`
  color: var(--clr-secondary);
  font-weight: 400;
  font-size: 22px;
  margin-right: 4rem;
`;

export const NavbarNavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarUlStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavbarLiStyled = styled.li`
  color: var(--clr-primary);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;

  &:hover {
    color: var(--clr-secondary);
  }
`;

export const NavbarButtonsStyled = styled.div`
  display: flex;
`;

export const NavbarButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 52px;
  width: 147px;
  background-color: var(--bg-main);
  color: var(--clr-secondary);
  border: 1px solid #ffae2b;
  border-radius: 0px;
  text-transform: uppercase;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    margin-top: 3rem;
  }
`;

// BURGER MENU
export const NavbarBrgButtonStyled = styled.div`
  z-index: 22;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--clr-white);

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavbarBrgMenuStyled = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "75%" : "0")};
  background-color: var(--bg-main);
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: 3s;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavbarBrgNavStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  color: white;
`;
export const NavbarBrgUlStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
export const NavbarBrgLiStyled = styled.div`
  color: var(--clr-primary);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;

  &:hover {
    color: var(--clr-secondary);
  }
`;
