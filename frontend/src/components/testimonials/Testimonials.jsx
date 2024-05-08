
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../testimonials/testimonials.css'
import { Link, useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      text: "test",
      website : 'test webiste',
      user: "client testimonials goes here",
      rating: "/image/rating.png",
      image: "/image/omfood.png"
    },
    {
      text: "Working with Ins Technology was a game-changer for my business. They not only built us a powerful custom application but also provided exceptional support throughout. Their dedication and professionalism exceeded our expectations.",
      user: "client testimonials goes here",
      rating: "/image/rating.png",
      image: "/image/realstate.png"
    },
    {
      text: "Ins Technology has been an invaluable partner for our business. From designing captivating graphics to executing effective digital marketing strategies, they've helped us achieve remarkable growth.",
      user: "client testimonials goes here",
      rating: "/image/rating.png",
      image: "/image/chamling.png"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed (1 second)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000 // Autoplay speed (3 seconds)
  };

  return (
    <div className="container">
      <div className="testimonials">
        <div className="left_testimonial">
          <img src="/image/about3.png" alt="" />
          {/* <img src="/image/testimonials.png" alt="" /> */}
        </div>
        <div className="right_testimonial">
          <p className="title">Testimonials</p>
          <h3 className="secondryHeading">
            We Appreciate Your Feedbacks Very Much
          </h3>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonialsCard">
               <div className="testimonials_usersDetails">
                <img className="testimonial_User" src={testimonial.image} alt="" />
               <h2>{testimonial.user}</h2>
                <Link to={'#'} target="_blank"><p>{testimonial.website}</p></Link>
                <img className="rating" src={testimonial.rating} alt="" />
               </div>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
