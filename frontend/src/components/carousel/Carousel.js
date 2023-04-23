import React, { useContext } from "react";
import item1 from "../../assets/fruits.jpg";
import item2 from "../../assets/vegetables.jpg";
import item3 from "../../assets/salad.jpg";
import item4 from "../../assets/steak2.jpg";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Carousel.scss";
import { Link } from "react-router-dom";
import { LanguageContext } from "../language/Language";

const Carousel = () => {
  const { dictionary } = useContext(LanguageContext);

  const itemss = [
    {
      itemik: item1,
      id: "1",
      baslik: dictionary.CarouselTitleOne,
      par: dictionary.CarouselTextOne,
      button: dictionary.CarouselTitleOne,
    },
    {
      itemik: item4,
      id: "4",
      baslik: dictionary.CarouselTitleFour,
      par: dictionary.CarouselTextFour,
      button: dictionary.CarouselTitleFour,
    },
    {
      itemik: item2,
      id: "2",
      baslik: dictionary.CarouselTitleTwo,
      par: dictionary.CarouselTextTwo,
      button: dictionary.CarouselTitleTwo,
    },
    {
      itemik: item3,
      id: "3",
      baslik: dictionary.CarouselTitleThree,
      par: dictionary.CarouselTextThree,
      button: dictionary.CarouselTitleThree,
    },
  ];

  const itemsMobile = [
    {
      itemik: item1,
      id: "1",
      baslik: dictionary.CarouselTitleOne,
      par: dictionary.MobileCarouselTextOne,
      button: dictionary.CarouselTitleOne,
    },
    {
      itemik: item4,
      id: "4",
      baslik: dictionary.CarouselTitleFour,
      par: dictionary.CarouselTextFour,
      button: dictionary.CarouselTitleFour,
    },
    {
      itemik: item2,
      id: "2",
      baslik: dictionary.CarouselTitleTwo,
      par: dictionary.MobileCarouselTextTwo,
      button: dictionary.CarouselTitleTwo,
    },
    {
      itemik: item3,
      id: "3",
      baslik: dictionary.CarouselTitleThree,
      par: dictionary.MobileCarouselTextThree,
      button: dictionary.CarouselTitleThree,
    },
  ];

  return (
    <div>
      {window.innerWidth <= 800 ? (
        <div>
          <Slider
            touchDisabled={true}
            className="slider-wrapper"
            autoplay={2500}
          >
            {itemsMobile.map((item) => (
              <div
                key={item.id}
                className="slider-content"
                style={{
                  background: `url(${item.itemik}) no-repeat center center`,
                }}
              >
                <div className="inner">
                  <h1>{item.baslik}</h1>
                  <p>{item.par}</p>
                  <Link to="/products">
                    <button>{item.button}</button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="carousel-div">
          <Slider className="slider-wrapper" autoplay={2500}>
            {itemss.map((item) => (
              <div
                key={item.id}
                className="slider-content"
                style={{
                  background: `url(${item.itemik}) no-repeat center center`,
                }}
              >
                <div className="inner">
                  <h1>{item.baslik}</h1>
                  <p>{item.par}</p>
                  <Link to="/products">
                    <button>{item.button}</button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Carousel;
