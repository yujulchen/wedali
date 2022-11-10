import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img001 from "../../image/img001.jpg";
import img002 from "../../image/img002.jpg";
import img003 from "../../image/img003.jpg";
import img004 from "../../image/img004.jpg";
import img005 from "../../image/img005.jpg";
import img006 from "../../image/img006.jpg";
import img007 from "../../image/img007.jpg";
import img008 from "../../image/img008.jpg";
import img009 from "../../image/img009.jpg";
import img010 from "../../image/img010.jpg";
import img011 from "../../image/img011.jpg";
import img012 from "../../image/img012.jpg";

export const CenterCarousel = ({ centerSlidePercentage }) => (
  <Carousel
    autoPlay={true}
    infiniteLoop={true}
    stopOnHover={true}
    dynamicHeight={true}
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
    centerSlidePercentage={centerSlidePercentage}
  >
    <div>
      <img src={img001} alt="img001" />
    </div>
    <div>
      <img src={img002} alt="img002" />
    </div>
    <div>
      <img src={img004} alt="img004" />
    </div>
    <div>
      <img src={img005} alt="img005" />
    </div>
    <div>
      <img src={img003} alt="img003" />
    </div>
    <div>
      <img src={img006} alt="img006" />
    </div>
    <div>
      <img src={img007} alt="img007" />
    </div>
    <div>
      <img src={img008} alt="img008" />
    </div>
    <div>
      <img src={img009} alt="img009" />
    </div>
    <div>
      <img src={img010} alt="img010" />
    </div>
    <div>
      <img src={img011} alt="img011" />
    </div>
    <div>
      <img src={img012} alt="img012" />
    </div>
  </Carousel>
);
