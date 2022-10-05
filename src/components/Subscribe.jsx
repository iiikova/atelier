import React from "react";
import {
  SubscribeContainerStyled,
  SubscribeInnerStyled,
  SubscribeTitleStyled,
  SubscribeSubTitleStyled,
  SubscribeBlockStyled,
  SubscribeSocialStyled,
  SubscribeSocialItemStyled,
  SubscribeBehindItemStyled,
  SubscribeBlocksStyled,
} from "../styles/Subscribe";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Subscribe() {
  const orange = "#FFAE2B";
  return (
    <SubscribeContainerStyled>
      <SubscribeInnerStyled>
        <SubscribeTitleStyled>Subscribe to Atelier</SubscribeTitleStyled>
        <SubscribeTitleStyled>Newsletter</SubscribeTitleStyled>
        <SubscribeSubTitleStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </SubscribeSubTitleStyled>

        <SubscribeBlocksStyled>
          <SubscribeBlockStyled></SubscribeBlockStyled>
          <SubscribeBlockStyled orange={orange}></SubscribeBlockStyled>
        </SubscribeBlocksStyled>

        <SubscribeSubTitleStyled>
          * By clicking
          <SubscribeBehindItemStyled> button</SubscribeBehindItemStyled>, you
          agree to our Terms and that you have
        </SubscribeSubTitleStyled>
        <SubscribeSubTitleStyled>
          *<SubscribeBehindItemStyled> read our</SubscribeBehindItemStyled>
        </SubscribeSubTitleStyled>

        <SubscribeSocialStyled>
          <SubscribeSocialItemStyled>
            <FaFacebookF />
          </SubscribeSocialItemStyled>
          <SubscribeSocialItemStyled>
            <FaTwitter />
          </SubscribeSocialItemStyled>
          <SubscribeSocialItemStyled>
            <FaInstagram />
          </SubscribeSocialItemStyled>
          <SubscribeSocialItemStyled>
            <FaLinkedin />
          </SubscribeSocialItemStyled>
        </SubscribeSocialStyled>
      </SubscribeInnerStyled>
    </SubscribeContainerStyled>
  );
}

export default Subscribe;
