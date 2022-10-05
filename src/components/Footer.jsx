import React from "react";
import {
  FooterContainerStyled,
  FooterInnerStyled,
  FooterLeftStyled,
  FooterRightStyled,
  FooterDevStyled,
  FooterDevSpanStyled,
  FooterLinksStyled,
  FooterLinkStyled,
  FooterLineStyled,
} from "../styles/Footer.styled";

function Footer() {
  return (
    <FooterContainerStyled>
      <FooterLineStyled></FooterLineStyled>

      <FooterInnerStyled>
        <FooterLeftStyled>
          <FooterDevStyled>
            Powered by
            <FooterDevSpanStyled>Webflow</FooterDevSpanStyled>
          </FooterDevStyled>
        </FooterLeftStyled>
        <FooterRightStyled>
          <FooterLinksStyled>
            <FooterLinkStyled>Licenses</FooterLinkStyled>
            <FooterLinkStyled>Style Guide</FooterLinkStyled>
            <FooterLinkStyled>Instruction</FooterLinkStyled>
          </FooterLinksStyled>
        </FooterRightStyled>
      </FooterInnerStyled>
    </FooterContainerStyled>
  );
}

export default Footer;
