import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class MoveIcon extends Component {
    render() {
      return (
      <div>
        <Carousel
            slidesPerPage={5}
            arrows
            breakpoints={{
                640: {
                slidesPerPage: 1,
                arrows: false
                },
                900: {
                slidesPerPage: 2,
                arrows: false
                }
            }}
            >
            <img src="./imgs/icons/sedan.png" width = "200" alt="sedan"/>
            <img src="./imgs/icons/cabriolet.png"  width = "200" alt="cabriolet"/>
            <img src="./imgs/icons/minivan.png"  width = "200" alt="minivan" />
            <img src="./imgs/icons/SUV.png"  width = "200" alt="SUV"/>
            <img src="./imgs/icons/car.png"  width = "200" alt="car" />
            <img src="./imgs/icons/truck.png"  width = "200" alt="truck"/>
            <img src="./imgs/icons/van.png"  width = "200" alt="van"/>
            <img src="./imgs/icons/EV.png"  width = "200" alt="EV" />
        </Carousel>
      </div>
      );
    }
  }

export default MoveIcon;