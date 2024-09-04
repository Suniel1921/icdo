
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
      text: "ICDO's dedication to fostering cultural diversity and inclusion is unparalleled. Their programs have enriched my understanding of different cultures and strengthened our community bonds. I am proud to be part of such an impactful organization",
      website : 'test webiste',
      user: "Ram Bahadur Shrestha ",
      rating: "/image/rating.png",
      image: "/image/omfood.png"
    },
    {
      text: "ICDO's initiatives in promoting cultural awareness are crucial in today's globalized world. Their workshops have provided invaluable insights into cultural heritage, making a significant difference in bridging cultural gaps.",
      user: "Yogesh Shahi",
      rating: "/image/rating.png",
      image: "/image/realstate.png"
    },
    {
      text: "As a newcomer, ICDO's support has been invaluable. Their language classes and cultural programs helped me feel at home and connected to my new community. I am deeply grateful for their assistance.",
      user: "Sita Shrestha",
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
          {/* <img src="/image/testimonials.jpg" alt="" /> */}
          <img src="/image/testimonials.png" alt="" />
        </div>
        <div className="right_testimonial">
          <h4 className="title">Testimonials</h4>
          <h2 className="secondryHeading">
          We Greatly Appreciate Your Feedback
          </h2>

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
