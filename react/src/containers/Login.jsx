import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img1 from "../design/images/image1.jpg";

const Login = () => {
  return (
    <div className="m-5 position-relative">
      <div className="p-3 d-flex justify-content-center bg-success row m-3">
        <div className="bg-info d-flex justify-content-center col">
          <Form className="w-50 m-3">
            <fieldset>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="userid">아이디</Form.Label>
                <Form.Control id="userid" placeholder="아이디" />
              </Form.Group>
              <Form.Group className="">
                <Form.Label htmlFor="passwd">비밀번호</Form.Label>
                <Form.Control id="passwd" placeholder="비밀번호" />
              </Form.Group>
              <Form.Group className="">
                <Form.Label htmlFor="name">닉네임</Form.Label>
                <Form.Control id="name" placeholder="닉네임" />
              </Form.Group>
              <Form.Group className="">
                <Form.Label htmlFor="phone">전화번호</Form.Label>
                <Form.Control id="phone" placeholder="전화번호" />
              </Form.Group>
              <div>
                회원이 아니신가요?{" "}
                <a href="/register" class="link-danger">
                  회원가입
                </a>
              </div>
              <div className="row">
                <Button className="w-40 m-3 col btn-warning" type="submit">
                  취소
                </Button>
                <Button className="w-40 m-3 col " type="submit">
                  로그인
                </Button>
              </div>
            </fieldset>
          </Form>
        </div>

        <div className="bg-danger col d-flex justify-content-center">
          <img className="w-50" alt="advertise" src={img1} />
        </div>
      </div>
    </div>
  );
};
export default Login;
