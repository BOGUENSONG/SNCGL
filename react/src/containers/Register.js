import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../design/images/Logo.png";
const Register = () => {
  const style = {
    width: "500px",
    height: "auto",
  };
  const imgstyle = {
    width: "350px",
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="position-absolute">
        <div className="bg-black d-flex justify-content-center">
          <img src={logo} alt="logo" style={imgstyle} />
        </div>
        <div className="p-4 bg-black" style={style}>
          <Form className="bg-white p-5 rounded-3">
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="userid">아이디</Form.Label>
                <Form.Control id="userid" placeholder="아이디" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="passwd">비밀번호</Form.Label>
                <Form.Control id="passwd" placeholder="비밀번호" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">닉네임</Form.Label>
                <Form.Control id="name" placeholder="닉네임" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="phone">전화번호</Form.Label>
                <Form.Control id="phone" placeholder="전화번호" />
              </Form.Group>
              <div className="row">
                <Button className="w-40 m-3 col " type="submit">
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
