import { Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    padding: 0px 20px;
    max-width: 395px;
    margin: 0 auto;
    h2 {
        font-size: 1.5rem;
        margin-bottom: 5vh;
    }
    small {
        color: rgb(255, 0, 0) !important;
    }
    label {
        margin-top: 0.35rem;
    }
    .loginBtnDiv a {
        height: 60px;
        line-height: 60px;
        display: block;
        border: 2px #FF8FAB solid;
        border-radius: 7px;
        text-align: center !important;
        background-color: #FF8FAB !important;
        color: #fff;
    }
    .findIdDiv a { 
        &:hover {
            color: #000;
        }
    }
`;

function Login() {
    return (
        <>
            <Helmet>
                <title>로그인</title>
            </Helmet>

            <Container>
                <h2>이메일로 로그인</h2>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="이메일 주소" />
                        <Form.Text className="text-muted">
                            이메일 형식을 지켜주세요.
                        </Form.Text> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPwd">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="비밀번호 6자리 이상" />
                        <Form.Text className="text-muted">
                            비밀번호는 6자리 이상 입력해주세요.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="로그인 기억" />
                        
                    </Form.Group>

                    <div className="mb-3 loginBtnDiv">
                        <Link to="">로그인</Link>
                    </div>

                    <div className="mb-3 findIdDiv text-center">
                        <Link to="">아이디 찾기</Link> | <Link to="">비밀번호 찾기</Link>
                    </div>

                </Form>

            </Container>
        </>
    );
};

export default Login;