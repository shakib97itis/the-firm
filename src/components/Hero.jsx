// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "./utils/Button";
import heroBg from "../assets/heroBg.jpg";
import heroImg from "../assets/heroImg.png";

function Hero() {
  return (
    <div
      id="hero"
      className="relative mb-[100px]"
      style={{ "--hero-bg": `url(${heroBg})`, "--hero-img": `url(${heroImg})` }}
    >
      <div className="absolute top-0 left-0 -z-20 h-full w-full bg-(image:--hero-bg) bg-cover opacity-20">
      </div>

      <img
        className="absolute top-0 right-0 -z-10 h-full"
        src={heroImg}
        alt="Hero Bg"
      />

      <div className="container font-primary">
        <div className="pt-44 pb-[152px]">
          <h1 className="mb-7 w-[620px] text-5xl leading-[133%] font-bold">
            Get Business Solutions with TheFirm.
          </h1>
          <p className="mb-8 w-[437px] leading-[176%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy.
          </p>
          <Button>Get In Touch</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
