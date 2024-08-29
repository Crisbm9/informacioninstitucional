import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";
import "./carrusel.css"; 

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <StaticImage src="../images/1.jpg" alt="Slide 1" className="slide-image" />
      </div>
      <div className="slide">
        <StaticImage src="../images/2.jpg" alt="Slide 2" className="slide-image" />
      </div>
      <div className="slide">
        <StaticImage src="../images/3.jpg" alt="Slide 3" className="slide-image" />
      </div>
      <div className="slide">
        <StaticImage src="../images/4.jpg" alt="Slide 4" className="slide-image" />
      </div>
      <div className="slide">
        <StaticImage src="../images/5.jpg" alt="Slide 5" className="slide-image" />
      </div>
      <div className="slide">
        <StaticImage src="../images/6.jpg" alt="Slide 6" className="slide-image" />
      </div>
      <div className="slide">
        <StaticImage src="../images/7.jpg" alt="Slide 7" className="slide-image" />
      </div>
      <div className="slide">
        <StaticImage src="../images/8g.jpg" alt="Slide 8" className="slide-image" />
      </div>
      <div className="slide">
        <StaticImage src="../images/9.jpg" alt="Slide 9" className="slide-image" />
      </div>
      <div className="slide">
        <StaticImage src="../images/10.jpg" alt="Slide 10" className="slide-image" />
      </div>
    </Slider>
  );
};

export default Carrusel;