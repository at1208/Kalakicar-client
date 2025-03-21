import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import Carousel from "react-multi-carousel";

const Youtube = (props) => {

  const [videos, setVideos] = useState([])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


const getYoutubeVideo = () => {
    return props.data.map(item => {
      return <iframe src={item} width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
    })
  }





  return <div>
  <Carousel
   swipeable={true}
   draggable={true}
   showDots={true}
   centerMode={false}
   responsive={responsive}
   // ssr={true} // means to render carousel on server-side.
   infinite={true}
   autoPlay={props.deviceType !== "mobile" ? true : false}
   // autoPlaySpeed={1000}
   keyBoardControl={true}
   // customTransition="all .5"
   // transitionDuration={500}
   containerClass="carousel-container"
   removeArrowOnDeviceType={["tablet", "mobile"]}
   deviceType={props.deviceType}
   dotListClass="custom-dot-list-style"
   itemClass="carousel-item-padding-40-px"
 >
   {getYoutubeVideo()}
 </Carousel>
         </div>
}

export default Youtube;
