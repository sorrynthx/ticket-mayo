import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
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
    span {
        margin-right: auto;
        cursor: pointer;
    }
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

function MyCargoTheme() {
    
    let navigate = useNavigate();
    
    return (
        <>
            <Container>
                <Helmet>
                    <title>테마</title>
                </Helmet>
                <Header>
                    <span onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                    테마
                </Header>

                <Row>
                    <Col>
                            
                        <div className="mb-2">테마 (라이트 / 다크)</div>
                        <CheckBoxWrapper>
                            <CheckBox id="checkbox" type="checkbox" />
                            <CheckBoxLabel htmlFor="checkbox" />
                        </CheckBoxWrapper>
                        
                    </Col>
                </Row>

            </Container>    
        </>
    );
};

export default MyCargoTheme;