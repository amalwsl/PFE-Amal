import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40
  }
};
const supporters = ["https://logos-download.com/wp-content/uploads/2020/07/Tunisia_Tourism_Logo.png", 
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

const partners = ["https://www.iadetunisia.com/wp-content/uploads/2020/03/YY-Logo-1.jpg",
                "https://www.iadetunisia.com/wp-content/uploads/2020/03/levon.jpg",
                "https://www.iadetunisia.com/wp-content/uploads/2021/06/1.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/02/LOGO_DBDC_TOURISM.webp",
                "https://www.iadetunisia.com/wp-content/uploads/2021/06/logo.png",
                "https://www.iadetunisia.com/wp-content/uploads/2021/02/NOZ_logo_полное_новое_англ_на_белом-11.jpg",
                "https://www.iadetunisia.com/wp-content/uploads/2021/06/adu-logo.png",
                "https://www.iadetunisia.com/wp-content/uploads/2020/03/esi.jpg",
                "https://www.iadetunisia.com/wp-content/uploads/2022/02/image001.png",
                "https://www.iadetunisia.com/wp-content/uploads/2020/03/intc.jpg",
                "https://www.iadetunisia.com/wp-content/uploads/2020/03/vacancia-travel-1.jpg"
                

]
            
// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Supportedby = ({ deviceType }) => {
  return (
    <Carousel
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
    >
      {supporters.map(supporters => {
        return (
          <img  src= {supporters} width= "300px" 
            alt="hello"
          />
        );
      })}
    </Carousel>
  );
};


const OurPartners = ({ deviceType }) => {
    return (
      <Carousel
        partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
      >
        {partners.map(partners => {
          return (
            <img  src= {partners} width= "300px" 
              alt="hello"
            />
          );
        })}
      </Carousel>
    );
  };

export  {OurPartners,Supportedby};
