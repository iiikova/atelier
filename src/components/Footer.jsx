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
  FooterFooterStyled,
} from "../styles/Footer.styled";

function Footer() {
  return (
    <FooterContainerStyled>
      <FooterInnerStyled>
        <FooterLineStyled></FooterLineStyled>

        <FooterFooterStyled>
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
        </FooterFooterStyled>
      </FooterInnerStyled>
    </FooterContainerStyled>
  );
}

export default Footer;
