import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <div className="position-relative">
            <div className="p-3 d-flex justify-content-center">
                <div className="w-50">
                    <Form className="w-50">
                        <fieldset >
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="disabledTextInput">아이디</Form.Label>
                                <Form.Control id="disabledTextInput" placeholder="아이디" />
                            </Form.Group>
                            <Form.Group className="비밀번호">
                                <Form.Label htmlFor="disabledSelect">비밀번호</Form.Label>
                                <Form.Control id="disabledTextInput" placeholder="비밀번호" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    id="disabledFieldsetCheck"
                                    label="Can't check this"
                                />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </fieldset>
                    </Form>
                </div>

                <div>
                    하이하이
                </div>
            </div>
        </div>
        
    );
}
export default Login