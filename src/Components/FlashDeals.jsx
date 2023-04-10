import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Flash.css";
// import Product from "./assets/FlashDeals/product2.png";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FlashData from "./FlashData";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "grey",
        borderRadius: "50%",
        right: "-10px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "grey",
        borderRadius: "50%",
        left: "-10px"
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // arrow:true,
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
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
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            dots: true,
            // arrows: false,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          }
        },
        {
          breakpoint: 480,
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
        <div className="card">
          <div className="offer">
            <p>79% off</p>
          </div>
          <div className="innerCard">
            <p className="name">{props.name}</p>
            <div className="ProductImg">
              <img src={props.img} alt="" />
            </div>
            <div>
              3 <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="price">
              <h3 className="overline">Rs. {props.oldprice}</h3>
              <h2 className="normal">Rs. {props.price}</h2>
            </div>
            <div className="wiselist">
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="deal">
          <h2 className="flashHeading">Flash Deal</h2>
          <hr />
        </div>

        <Slider {...settings}>
          {FlashData.map((product) => (
            <Product
              key={product.id}
              img={product.imgURL}
              name={product.name}
              oldprice={product.oldprice}
              price={product.price}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
