import React from "react";
import header1 from "../images/pictures-carousel-1.jpg";
import header2 from "../images/pictures-carousel-2.jpg";
import header3 from "../images/pictures-carousel-3.jpg";
import CommentsVideoHome from "./CommentsVideoHome";
import Slider from "infinite-react-carousel";

const ImagesCarousel = [header1, header2, header3];

function Carousel() {
  // const [image, setImage] = useState("")
  // const [nextPicture, setNextPicture] = useState(false)

  // useEffect(() => {
  //   function randomNumber() {
  //     return Math.round(Math.random()*2)
  //   }
  //     if(nextPicture===false){
  //       setImage(ImagesCarousel[randomNumber()])
  //       setTimeout(() => {
  //         setImage(ImagesCarousel[randomNumber()])
  //         setNextPicture(true)
  //       }, 4000);
  //     } else if(nextPicture===true){
  //       setTimeout(() => {
  //         setImage(ImagesCarousel[randomNumber()])
  //         setNextPicture(false)
  //       }, 8000);
  //     }
  //   },[]
  // )
  return (
    <div>
      <div className="carousel-container">
        <h1 className="text-movement">Families that take care of your family and vice versa.</h1>
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
    </div>
  );
}

export default Carousel;
