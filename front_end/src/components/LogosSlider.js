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
                "orange",
                "",
                "",
                "",
                "",
                ""
            ];

const pertners = ["https://younsilawyers.com/wp-content/uploads/2021/04/YY-logo-big-v3.svg",
                "",
                "",
                "",
                ""

]
            
// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
    >
      {source.map(source => {
        return (
          <img  src= {source} width= "300px" 
            alt="hello"
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;
