import React from "react";
import {
  SocialContainerStyled,
  SocialInnerStyled,
  SocialImgStyled,
  SocialItemsStyled,
  SocialBlockStyled,
  SocialTextStyled,
  SocialButtonStyled,
} from "../styles/Social.styled";

function Social() {
  return (
    <SocialContainerStyled>
      <SocialInnerStyled>
        <SocialItemsStyled>
          <SocialImgStyled
            src={require("../assets/images/SOCIALIMAGE1.png")}
          ></SocialImgStyled>
          <SocialImgStyled
            src={require("../assets/images/SOCIALIMAGE2.png")}
          ></SocialImgStyled>
          <SocialBlockStyled>
            <SocialTextStyled>Follow me on</SocialTextStyled>
            <SocialButtonStyled>Instagram</SocialButtonStyled>
          </SocialBlockStyled>
          <SocialImgStyled
            src={require("../assets/images/SOCIALIMAGE3.png")}
          ></SocialImgStyled>
          <SocialImgStyled
            src={require("../assets/images/SOCIALIMAGE4.png")}
          ></SocialImgStyled>
        </SocialItemsStyled>
      </SocialInnerStyled>
    </SocialContainerStyled>
  );
}

export default Social;
