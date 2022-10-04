import React from "react";
import {
  MainContainerStyled,
  MainInnerStyled,
  MainPStyled,
  MainTitleStyled,
  MainButtonPStyled,
} from "../styles/Main.styled";

function Main() {
  return (
    <div>
      <MainContainerStyled>
        <MainInnerStyled>
          <MainPStyled>WE ARE Atelier Creative Agency</MainPStyled>
          <MainTitleStyled>
            Unique UI Kit Template for Creative Agencies
          </MainTitleStyled>
          <MainButtonPStyled>VIEW LAYOUTS</MainButtonPStyled>
        </MainInnerStyled>
      </MainContainerStyled>
    </div>
  );
}

export default Main;
