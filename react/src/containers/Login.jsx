import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import pic1 from "../design/images/image1.jpg";
import pic2 from "../design/images/image2.jpg";
import pic3 from "../design/images/banner1.jpg";
import logo from "../design/images/Logo_nobg.png";
import "../design/login.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Login = () => {
  const [state, setState] = useState({
    userid: "",
    passwd: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const imgstyle = {
    width: "300px",
  };

  return (
    <div className="m-5 position-relative">
      <div className="p-3 d-flex justify-content-center bg-black row m-3">
        <div className="d-flex justify-content-center col">
          <Form className="w-50 m-3">
            <fieldset>
              <div className="d-flex justify-content-center">
                <img src={logo} alt="logo" style={imgstyle} />
              </div>
              <Form.Group className="mb-2 pt-3">
                <Form.Control
                  id="userid"
                  placeholder="아이디"
                  onChange={handleChangeState}
                />
              </Form.Group>
              <Form.Group className="pt-3 pb-3">
                <Form.Control
                  id="passwd"
                  placeholder="비밀번호"
                  onChange={handleChangeState}
                />
              </Form.Group>
              <div className="">
                <ul className="">
                  <li>
                    <a href="/">아이디 찾기</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="/">비밀번호 찾기</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="/register">회원가입</a>
                  </li>
                </ul>
              </div>

              <div className="row find">
                <Button className="w-40 mt-5 col " type="submit">
                  로그인
                </Button>
              </div>
            </fieldset>
          </Form>
        </div>

        <div className="w-50 ">
          <Swiper
            style={{ height: "376px" }}
            className="banner"
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <img
                  className=""
                  src={pic1}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  alt="pic1 logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  className=""
                  src={pic2}
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt="pic2 logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  className=""
                  src={pic3}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  alt="pic3 logo"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Login;
