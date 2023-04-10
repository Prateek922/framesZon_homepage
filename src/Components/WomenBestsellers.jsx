import React from "react";
import Slider from "react-slick";
import WomenBestSellersData from "./WomenBestSellersData";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "grey", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "grey", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

const WomenBestsellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          arrows: false
        }
      }
    ]
  };

  function Product(props) {
    return (
      <div className="p-1 md:h-25 border-opacity-10 border-slate-500 lg:m-5 md:m-10  flex justify-center self-center align-middle items-center flex-col transition grow2 w-auto">
        <div className="md:h-29 h-32 mb-2 w-auto flex justify-center items-center align-middle self-center overflow-clip">
          <img alt="Bestseller" src={props.img} className="p-4 self-center" />
        </div>
        <div className="md:font-light md:text-sm text-xs text-center">
          {props.name}
        </div>
      </div>
    );
  }

  return (
    <div className="justify-center items-center">
      <div id="WomenBestsellers">
        <div className="flex justify-center self-center align-middle items-center mb-4 md:mb-10 flex-col">
          {/* <div className="font-medium md:font-semibold text-center text-lg md:text-3xl text-slate-500 mb-4">
            Bestsellers - Women
          </div> */}
          <div className="text-center ">
            <h2 className="shop text-2xl text-[#0F172A] font-black leading-10 tracking-[.25rem] drop-shadow-md">
              Bestsellers - Women
            </h2>
          </div>
          <div className="h-[0.1rem] md:h-1 w-40 self-center bg-gradient-to-r from-white to-white via-slate-500"></div>
        </div>

        <div className="md:mx-85 mx-16">
          <Slider {...settings}>
            {WomenBestSellersData.map((product) => (
              <Product
                key={product.id}
                img={product.imgURL}
                name={product.name}
                price={product.price}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WomenBestsellers;
