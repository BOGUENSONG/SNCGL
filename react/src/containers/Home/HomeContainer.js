import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import pic1 from "../../design/images/image1.jpg";
import pic2 from "../../design/images/image2.jpg";
SwiperCore.use([Navigation, Pagination]);
async function ApiTest() {
  return await axios.get("backend/Hello?name=LordYuk");
}

const HomeContainer = () => {
  const [ApiValue, setApiValue] = useState(null);

  useEffect(() => {
    ApiTest()
      .then(function (resp) {
        setApiValue(resp.data);
      })
      .catch(function (error) {
        setApiValue("GET FAIL" + error);
      });
  }, []);

  return (
    <div className="">
      <Container className="container-sm">
        <Swiper
          style={{ height: "376px" }}
          className="banner"
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>Api Result: {ApiValue}</SwiperSlide>
          <SwiperSlide>
            <div className="h-50">
              <img
                className=""
                src={pic1}
                style={{ "max-width": "100%", height: "auto" }}
                alt="pic1 logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-50">
              <img
                className=""
                src={pic2}
                style={{
                  "max-width": "100%",
                  height: "auto",
                }}
                alt="pic2 logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default HomeContainer;
