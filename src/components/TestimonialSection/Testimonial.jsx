import React from "react";
import testimonialImg from "../../assets/testimonialImages/mike_taylor.png";
import "./Testimonial.css";
// Import Swiper React components

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Pagination } from "swiper/modules";

function Testimonial() {
  return (
    <section className="testimonialContent">
      <div className="testimonialInfoSide">
        <h4 className="sectionSubTitle">Testimonials</h4>
        <h1 className="sectionMainTitle">What people say about Us.</h1>
      </div>
      <div className="testimonialSliderSide">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          rewind={true}
          direction={"vertical"}
          modules={[EffectCards, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide className="swiperSlideContent">
            <div className="testimonialCard">
              <div className="testimonialCardImgContent">
                <img
                  src={testimonialImg}
                  alt="Mike Taylor"
                  className="testimonialCardImg"
                />
              </div>
              <p className="testimonialCardDesc">
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <div className="testimonialCardCustomerContent">
                <p className="testimonialCardCustomerName">Mike Taylor</p>
                <p className="testimonialCardCustomerLocation">
                  Lahore, Pakistan
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlideContent">
            <div className="testimonialCardImgContent">
              <img
                src={testimonialImg}
                alt="Mike Taylor"
                className="testimonialCardImg"
              />
            </div>
            <div className="testimonialCard">
              <p className="testimonialCardDesc">
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <div className="testimonialCardCustomerContent">
                <p className="testimonialCardCustomerName">Chris Thomas</p>
                <p className="testimonialCardCustomerLocation">
                  CEO of Red Button
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
