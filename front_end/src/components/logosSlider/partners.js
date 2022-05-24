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
        <div style={{display:"flex", flexDirection:"row",justifyItems:"center",alignItems:"center"}}>
            {partners.map(partners => {
                return (
                
                <img  src= {partners} width= "100px" style={{marginRight:"18px"}}
                    alt="hello"
                />
                );
            })}
        </div>
    </Carousel>
  );
};

export default OurPartners;
