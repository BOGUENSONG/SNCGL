import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import pic1 from "../design/images/image1.jpg";
import pic2 from "../design/images/image2.jpg";
import pic3 from "../design/images/banner1.jpg";
import logo from "../design/images/Logo_nobg.png";

import { Swiper, SwiperSlide } from "swiper/react";
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
              <Form.Group className="mb-2 p-3">
                <Form.Control
                  id="userid"
                  placeholder="아이디"
                  onChange={handleChangeState}
                />
              </Form.Group>
              <Form.Group className="p-3">
                <Form.Control
                  id="passwd"
                  placeholder="비밀번호"
                  onChange={handleChangeState}
                />
              </Form.Group>
              <div>
                회원이 아니신가요?{" "}
                <a href="/register" class="link-danger">
                  회원가입
                </a>
              </div>
              <div>
                <ul className="">
                  <li className="">
                    <a href="/">아이디 찾기</a>
                  </li>
                  <li className="">
                    <a href="/">비밀번호 찾기</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <Button className="w-40 m-3 col " type="submit">
                  로그인
                </Button>
              </div>
            </fieldset>
          </Form>
        </div>

        <div className="w-50 col d-flex justify-content-center">
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
                  src={pic1}
                  style={{
                    "max-width": "100%",
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
                  style={{ "max-width": "100%", height: "auto" }}
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
                    "max-width": "100%",
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
