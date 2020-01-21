import React from "react";
import header1 from "../../images/carousel/pictures-carousel-1.jpg";
import header2 from "../../images/carousel/pictures-carousel-2.jpg";
import header3 from "../../images/carousel/pictures-carousel-3.jpg";
import CommentsVideoHome from "./CommentsVideoHome";
import Slider from "infinite-react-carousel";
import Newsletter from "./Newsletter"
import {Link} from "react-router-dom"

const ImagesCarousel = [header1, header2, header3];

function Carousel() {
  return (
    <div>
      <div className="carousel-container">
        <h1 className="text-movement">Connecting families to fill the gaps in childcare.<Link to="/families"> Start Here!</Link></h1>
        <Slider dots className="slider">
          <div>
            <img src={header1} alt="home" />
          </div>
          <div>
            <img src={header2} alt="home" />
          </div>
          <div>
            <img src={header3} alt="home" />
          </div>
        </Slider>
      </div>
      <CommentsVideoHome />
      <Newsletter />
    </div>
  );
}

export default Carousel;
