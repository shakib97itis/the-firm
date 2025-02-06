// eslint-disable-next-line no-unused-vars
import React from "react";
import HeadingSecondary from "./utils/HeadingSecondary";
import PartnersSlider from "./PartnersSlider";

function OurPartners() {
  return (
    <div>
      <div className="container mb-[100px]">
        <HeadingSecondary className1="mb-[80px]" className2="">
          Our Partner
        </HeadingSecondary>
        <PartnersSlider />
      </div>
    </div>
  );
}

export default OurPartners;
