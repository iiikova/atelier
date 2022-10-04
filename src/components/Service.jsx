import React from "react";
import {
  ServiceContainerStyled,
  ServiceInnerStyled,
  ServiceTextStyled,
  ServiceTitleStyled,
  ServiceItemStyled,
  ServiceItemsStyled,
  ServiceImgStyled,
  ServicePStyled,
  ServiceH2Styled,
  ServiceH3Styled,
} from "../styles/Service.styled";

function Service() {
  return (
    <ServiceContainerStyled>
      <ServiceInnerStyled>
        <ServiceTextStyled>Our Core Features</ServiceTextStyled>
        <ServiceTitleStyled>Our Services</ServiceTitleStyled>
        <ServiceItemsStyled>
          <ServiceItemStyled>
            <ServiceImgStyled
              src={require("../assets/images/Group1.png")}
            ></ServiceImgStyled>
            <ServiceH2Styled>Web Design</ServiceH2Styled>
            <ServiceH3Styled>Suspendisse varius enim in</ServiceH3Styled>
            <ServicePStyled>
              cursus id rutrum imperdiet. eros elementum tristique.
            </ServicePStyled>
          </ServiceItemStyled>

          <ServiceItemStyled>
            <ServiceImgStyled
              src={require("../assets/images/Group2.png")}
            ></ServiceImgStyled>
            <ServiceH2Styled>UI/UX Design</ServiceH2Styled>
            <ServiceH3Styled>Suspendisse varius enim in</ServiceH3Styled>
            <ServicePStyled>
              cursus id rutrum imperdiet. eros elementum tristique.
            </ServicePStyled>
          </ServiceItemStyled>
          <ServiceItemStyled>
            <ServiceImgStyled
              src={require("../assets/images/Group3.png")}
            ></ServiceImgStyled>
            <ServiceH2Styled>SEO & Marketing</ServiceH2Styled>
            <ServiceH3Styled>Suspendisse varius enim in</ServiceH3Styled>
            <ServicePStyled>
              cursus id rutrum imperdiet. eros elementum tristique.
            </ServicePStyled>
          </ServiceItemStyled>
        </ServiceItemsStyled>
      </ServiceInnerStyled>
    </ServiceContainerStyled>
  );
}

export default Service;
