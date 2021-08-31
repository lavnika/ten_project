import React from 'react';
import './Carousels.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';


function Carousels() {
  return (
    <div className="carousel">
      <h2>TESTIMONIALS</h2>
      <Carousel>
        <CarouselItem interval={1000} className="carouselitem">
          {/* <img
            className="d-block w-100"
            src="public\images\img-5.jpg"
            alt="First slide"
          />  */}
          <CarouselCaption>
            <h3>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</h3>
            <p>-Aakriti Malik, DM Intern</p>
            
          </CarouselCaption>
        </CarouselItem>

        <CarouselItem interval={500} className="carouselitem">
          {/* <img
            className="d-block w-100"
            src="#"
            alt="Second slide"
          /> */}
          <CarouselCaption>
            <h3>Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</h3>
            <p>-Harsh Rajput, General Management Intern</p>
          </CarouselCaption>
        </CarouselItem>

        <CarouselItem className="carouselitem">
          {/* <img
            className="d-block w-100"
            src="#"
            alt="Third slide"
          /> */}
          <CarouselCaption>
            <h3>TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.</h3>
            <p>-Anjali Srivastava, Content Intern</p>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>

</div>
  );
}

export default Carousels;