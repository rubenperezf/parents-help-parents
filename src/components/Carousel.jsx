import React from "react";
import header1 from "../images/pictures-carousel-1.jpg";
import header2 from "../images/pictures-carousel-2.jpg";
import header3 from "../images/pictures-carousel-3.jpg";
import CommentsVideoHome from "./CommentsVideoHome"


const ImagesCarousel = [header1,header2,header3]

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

          <img src={ImagesCarousel[2]} alt="welcome carousel"/>
          
    </div>
    <CommentsVideoHome />
    </div>
    
  )
}



export default Carousel;
