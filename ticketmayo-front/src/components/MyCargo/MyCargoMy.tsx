import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, FloatingLabel, Form, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
    .accordion-button:not(.collapsed) {
        color: #FB6F92;
        background-color: #FFE5EC;
    }
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .goBack {
        margin-right: auto;
        cursor: pointer;
    }
`;

const ProfileImg = styled.img`
    border-radius: 0.3rem !important;
`;

const Btn = styled.a`
    background-color: #FB6F92;
    color: #fff;
    padding: 12px 25px;
    display: block;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border: 0 solid transparent;
    line-height: 1.42857;
    border-radius: 6px;
    font-weight: 200;
    text-align: center;
    white-space: nowrap;
`;

function MyCargoMy() {
    

    return (
        <>
            <Container>
                <Helmet>
                    <title>내 정보</title>
                </Helmet>
                <Header>
                    <Link className="goBack"
                        to={`/myCargo`}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Link>
                    내 정보
                </Header>

                <div className="row justify-content-center">
                    <div className="col-lg-4 text-center">
                        <figure className="avatar ms-auto me-auto mb-0 mt-2 w100">
                        <ProfileImg 
                            className="shadow-sm w-100" style={{maxWidth: '200px'}}
                            src={require('../../assets/img/profile.png')} alt="프로필 이미지"
                        />
                        </figure>
                        
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="fw-700 font-sm text-grey-900 mt-3">@티켓마요</h2>
                    <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4 mt-2">ticket-mayo@naver.com</h4>
                </div>

                <h3 className="mt-3 mb-3 text-center">
                    부가 정보 입력은 추후 업데이트 예정입니다. :D
                </h3>

                {/* <Form>
                    <Row className="g-1 mt-1 mb-1">
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid1" label="핸드폰 번호">
                                <Form.Control type="phone" placeholder="010-1234-1234" />
                                <Form.Text className="" style={{color:'#d05278'}}>
                                    유효한 핸드폰 번호를 입력하세요.
                                </Form.Text>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-1 mt-1 mb-1">
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid2" label="인증번호 6자리">
                                <Form.Control type="text" placeholder="인증번호 6자리" />
                                <Form.Text className="" style={{color:'#d05278'}}>
                                    유효한 인증번호를 입력하세요.
                                </Form.Text>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-1 mt-1 mb-1">
                        <Col md>
                            <Btn href="" onClick={e => e.preventDefault} className="btn btnhover">번호 인증</Btn>
                        </Col>
                    </Row>
                </Form> */}

            </Container>
        </>
    );
};

export default MyCargoMy;