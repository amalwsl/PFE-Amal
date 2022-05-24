import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../pages/styles.css'


const CarouselHome=()=>{
    return(
        <>
        
        
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="carousel02.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Conferences</h3>
            <p>The International Aerospace & Defence Exhibition of Tunisia</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="carousel03.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Airshow</h3>
            <p>The International Aerospace & Defence Exhibition of Tunisia</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="carousel01.jpg"
            alt="Third slide"
            
            />

            <Carousel.Caption>
            <h3>B2B Meetings</h3>
            <p>The International Aerospace & Defence Exhibition of Tunisia</p>
            </Carousel.Caption>

            
        </Carousel.Item>
        </Carousel>
        
    </>
    )
}

export default CarouselHome;