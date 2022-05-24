import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
const supporters = ["https://www.iadetunisia.com/wp-content/uploads/2021/12/TUNISIA_Q.jpg", 
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/MTH2.png", 
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/MD2.png", 
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/dgac2.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/FIPA.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/API.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/CEPEX-1.png",
                "https://www.iadetunisia.com/wp-content/uploads/2022/02/MI2b.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/MT2.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/MI2.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/MDIV2.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/MISME2.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/AIRFORCE-2.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/03/OACA2.png"
            ];
// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Supportedby = () => {
  return (
    <Carousel
      partialVisbile
      
      itemClass="image-item"
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
    >
      <div style={{display:"flex", flexDirection:"row",justifyItems:"center",alignItems:"center"}} >
      {supporters.map(supporters => {
        return (
          <img  src= {supporters} width= "100px" 
            alt="hello"
          />
        );
      })}
      </div>  
    </Carousel>
  );
};

export default Supportedby;
