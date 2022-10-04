import React, { useState } from "react";
import Hamburger from "hamburger-react";
import {
  NavbarContainerStyled,
  NavbarInnerStyled,
  NavbarHeaderStyled,
  NavbarLogoStyled,
  NavbarNavStyled,
  NavbarButtonStyled,
  NavbarUlStyled,
  NavbarBrgButtonStyled,
  NavbarLiStyled,
  NavbarButtonsStyled,
  NavbarBrgMenuStyled,
  NavbarBrgNavStyled,
  NavbarBrgUlStyled,
  NavbarBrgLiStyled,
} from "../../styles/Navbar.styled";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavbarContainerStyled>
        <NavbarInnerStyled>
          <NavbarHeaderStyled>
            <NavbarLogoStyled>
              <p>Atelier.</p>
            </NavbarLogoStyled>
            <NavbarNavStyled>
              <NavbarUlStyled>
                <NavbarLiStyled href="#">Overview</NavbarLiStyled>
                <NavbarLiStyled href="#">Pages</NavbarLiStyled>
                <NavbarLiStyled href="#">Portfolio</NavbarLiStyled>
                <NavbarLiStyled href="#">Template</NavbarLiStyled>
                <NavbarLiStyled href="#">Contact</NavbarLiStyled>
              </NavbarUlStyled>
            </NavbarNavStyled>
          </NavbarHeaderStyled>

          <NavbarButtonsStyled>
            <NavbarButtonStyled>Buy Template</NavbarButtonStyled>
            <NavbarBrgButtonStyled onClick={() => setIsOpen((t) => !t)}>
              <Hamburger />
            </NavbarBrgButtonStyled>
          </NavbarButtonsStyled>
        </NavbarInnerStyled>
      </NavbarContainerStyled>

      {isOpen ? (
        <NavbarBrgMenuStyled isOpen>
          <NavbarBrgNavStyled>
            <NavbarBrgUlStyled>
              <NavbarBrgLiStyled href="#">Overview</NavbarBrgLiStyled>
              <NavbarBrgLiStyled href="#">Pages</NavbarBrgLiStyled>
              <NavbarBrgLiStyled href="#">Portfolio</NavbarBrgLiStyled>
              <NavbarBrgLiStyled href="#">Template</NavbarBrgLiStyled>
              <NavbarBrgLiStyled href="#">Contact</NavbarBrgLiStyled>
            </NavbarBrgUlStyled>
            <NavbarButtonStyled isOpen>Buy Template</NavbarButtonStyled>
          </NavbarBrgNavStyled>
        </NavbarBrgMenuStyled>
      ) : null}
    </>
  );
}

export default Navbar;
