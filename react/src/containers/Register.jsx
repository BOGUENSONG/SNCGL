import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../design/images/Logo_nobg.png";
import { useState } from "react";

const Register = () => {
  const [state, setState] = useState({
    userid: "",
    password: "",
    nickname: "",
    phone: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const style = {
    width: "500px",
    height: "auto",
  };
  const imgstyle = {
    width: "300px",
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="position-absolute w-100">
        <div className="bg-black p-3 d-flex justify-content-center">
          <img src={logo} alt="logo" style={imgstyle} />
        </div>
        <div className="p-4 bg-black" style={style}>
          <Form className="bg-white p-5 rounded-3">
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="userid">아이디</Form.Label>
                <Form.Control
                  name="userid"
                  value={state.userid}
                  onChange={handleChangeState}
                  id="userid"
                  placeholder="아이디"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="passwd">비밀번호</Form.Label>
                <Form.Control
                  name="password"
                  value={state.password}
                  onChange={handleChangeState}
                  id="passwd"
                  placeholder="비밀번호"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">닉네임</Form.Label>
                <Form.Control
                  name="nickname"
                  value={state.nickname}
                  onChange={handleChangeState}
                  id="name"
                  placeholder="닉네임"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="phone">전화번호</Form.Label>
                <Form.Control
                  name="phone"
                  value={state.phone}
                  onChange={handleChangeState}
                  id="phone"
                  placeholder="전화번호"
                />
              </Form.Group>
              <div>회원약관</div>
              <textarea
                style={{ resize: "none" }}
                readOnly
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                value={
                  "나중에api로 가져올자리\n줄바꿈확인\n확인3\n확인4\n확인5\n확인6"
                }
              />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  약관에 동의합니다.
                </label>
              </div>
              <div className="row">
                <Button className="w-40 m-3 col" type="submit">
                  회원가입
                </Button>
              </div>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
