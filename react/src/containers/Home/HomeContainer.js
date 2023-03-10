import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Layout from "../../components/Layout/Layout";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import pic1 from "../../design/images/image1.jpg";
import pic2 from "../../design/images/image2.jpg";
import pic3 from "../../design/images/banner1.jpg";

import swipercss from "../../design/swiper.css";
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
    <Layout>
      <div className={swipercss}>
        <Container className="container-sm">
          <Swiper
            style={{ height: "376px", fontWeight: "bold" }}
            className="banner"
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, type: "fraction" }}
          >
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img
                  className=""
                  src={pic3}
                  style={{
                    "max-width": "100%",
                    height: "auto",
                  }}
                  alt="pic3 logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  className=""
                  src={pic1}
                  style={{ "max-width": "100%", height: "auto" }}
                  alt="pic1 logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
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
            <SwiperSlide>
              <div className="h-50">Api Result: {ApiValue}</div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">의류</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="card-link">
              Card link
            </a>
            <a href="/" class="card-link">
              Another link
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">식품</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="card-link">
              Card link
            </a>
            <a href="/" class="card-link">
              Another link
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">모바일</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="card-link">
              Card link
            </a>
            <a href="/" class="card-link">
              Another link
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">가전</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="card-link">
              Card link
            </a>
            <a href="/" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeContainer;
