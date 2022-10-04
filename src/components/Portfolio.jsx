import React, { useState } from "react";
import {
  PortfolioCollectionStyled,
  PortfolioContainerStyled,
  PortfolioInnerStyled,
  PortfolioTextStyled,
  PortfolioTitleStyled,
  PortfolioItemStyled,
  PortfolioImgStyled,
  PortfolioNameStyled,
} from "../styles/Portfolio.styled";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([
    {
      name: "Landing vr.1",
      img: require("../assets/images/IMAGE.png"),
    },
    {
      name: "Landing vr.2",
      img: require("../assets/images/IMAGE1.png"),
    },
    {
      name: "Landing vr.3",
      img: require("../assets/images/IMAGE2.png"),
    },
    {
      name: "Portfolio 1",
      img: require("../assets/images/IMAGE3.png"),
    },
    {
      name: "Portfolio 1",
      img: require("../assets/images/IMAGE4.png"),
    },
    {
      name: "Portfolio 1",
      img: require("../assets/images/IMAGE5.png"),
    },
    {
      name: "Portfolio 1",
      img: require("../assets/images/IMAGE6.png"),
    },
    {
      name: "Single Project",
      img: require("../assets/images/IMAGE7.png"),
    },
    {
      name: "About Company",
      img: require("../assets/images/IMAGE8.png"),
    },
    {
      name: "About TEam",
      img: require("../assets/images/IMAGE9.png"),
    },
    {
      name: "Single Team Member",
      img: require("../assets/images/IMAGE10.png"),
    },
    {
      name: "FAQ PAge",
      img: require("../assets/images/IMAGE11.png"),
    },
    {
      name: "Contact Us",
      img: require("../assets/images/IMAGE12.png"),
    },
    {
      name: "Blog 1",
      img: require("../assets/images/IMAGE13.png"),
    },
    {
      name: "Blog 2",
      img: require("../assets/images/IMAGE14.png"),
    },
    {
      name: "Blog 3",
      img: require("../assets/images/IMAGE15.png"),
    },
    {
      name: "Blog Categories",
      img: require("../assets/images/IMAGE16.png"),
    },
    {
      name: "Single Blog",
      img: require("../assets/images/IMAGE17.png"),
    },
    {
      name: "Pricing",
      img: require("../assets/images/IMAGE18.png"),
    },
    {
      name: "Style guide",
      img: require("../assets/images/IMAGE19.png"),
    },
    {
      name: "Licenses",
      img: require("../assets/images/IMAGE20.png"),
    },
  ]);

  return (
    <PortfolioContainerStyled>
      <PortfolioInnerStyled>
        <PortfolioTextStyled>Our Core Layouts</PortfolioTextStyled>
        <PortfolioTitleStyled>Template Pages</PortfolioTitleStyled>
        <PortfolioCollectionStyled>
          {portfolio.map(({ name, img }) => {
            return (
              <PortfolioItemStyled>
                <PortfolioImgStyled src={img} alt={name}></PortfolioImgStyled>
                <PortfolioNameStyled>{name}</PortfolioNameStyled>
              </PortfolioItemStyled>
            );
          })}
        </PortfolioCollectionStyled>
      </PortfolioInnerStyled>
    </PortfolioContainerStyled>
  );
}

export default Portfolio;
