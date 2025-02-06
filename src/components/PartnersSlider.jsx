// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import propTypes from "prop-types";
import microsoftLogo from "../assets/microsoft-logo.png";
import firefoxLogo from "../assets/firefox-logo.png";
import googleLogo from "../assets/google-logo.png";
import safariLogo from "../assets/safari.png";

const logos = [
  { imgUrl: microsoftLogo, altText: "Microsoft Logo" },
  { imgUrl: firefoxLogo, altText: "FireFox Logo" },
  { imgUrl: googleLogo, altText: "Google Logo" },
  { imgUrl: safariLogo, altText: "Safari Logo" },
  { imgUrl: microsoftLogo, altText: "Microsoft Logo" },
  { imgUrl: firefoxLogo, altText: "FireFox Logo" },
  { imgUrl: googleLogo, altText: "Google Logo" },
  { imgUrl: safariLogo, altText: "Safari Logo" },
  { imgUrl: microsoftLogo, altText: "Microsoft Logo" },
  { imgUrl: firefoxLogo, altText: "FireFox Logo" },
  { imgUrl: googleLogo, altText: "Google Logo" },
  { imgUrl: safariLogo, altText: "Safari Logo" },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

SampleNextArrow.propTypes = {
  onClick: propTypes.func,
};

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}

SamplePrevArrow.propTypes = {
  onClick: propTypes.func,
};

function Card({ imgUrl, altText }) {
  return (
    <div className="h-[100px] px-[10px]">
      <div className="flex h-full items-center justify-center rounded-[20px] bg-accent-2">
        <img src={imgUrl} alt={altText} />
      </div>
    </div>
  );
}

Card.propTypes = {
  imgUrl: propTypes.string,
  altText: propTypes.string,
};

function PartnersSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mx-auto max-w-[1100px]">
      <div className="slider-container">
        <Slider {...settings}>
          {logos.map((logo) => (
            <Card
              key={logo.altText}
              imgUrl={logo.imgUrl}
              altText={logo.altText}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PartnersSlider;
