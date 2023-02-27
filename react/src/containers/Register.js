import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = () => {
  return (
    <div>
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
          <div className="row">
            <Button className="w-40 m-3 col " type="submit">
              회원가입
            </Button>
          </div>
        </fieldset>
      </Form>
    </div>
  );
};

export default Register;
