import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    min-height: 100vh;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;

const HeaderImg = styled.img`
    width: 185px; 
    opacity: 0.5;
    margin-top: 60px;
    margin-left: 185px;
    z-index: -1;
`;

const Caption = styled.div`
    font-weight: lighter !important;
    color: #adb5bd;
    margin-bottom: 0.5rem !important;
    opacity: 0.5;
`;

const Ul = styled.ul`
    margin-bottom: 1.5rem !important;
    a {
        align-items: center !important;
        font-weight: 400;
        font-size: 15px;
        &:hover {
            color: #FF8FAB !important;
        }
    }
    span {
        color: #adb5bd;
        margin-left: auto !important;
    }
`;

const Li = styled.li`
    border-bottom: 1px solid #E1E1F0 !important;
    padding-bottom: 0.5rem !important;
    padding-top: 0.5rem !important;
    display: flex !important;
`;

function MyCargo() {
    return (
        <Container>
            <Helmet>
                <title>티켓마요-내 창고</title>
            </Helmet>
            <Header className="mb-5">
                <>
                    <HeaderImg src={require('../../assets/img/header3.png')} className="rounded-3" alt="헤더3 이미지" />
                    <span style={{position: 'absolute'}}>내 창고</span>
                </>
            </Header>
            <Caption>계정</Caption>
            <Ul>
                <Link to="/myCargo/My">
                    <Li>내 정보 <span><FontAwesomeIcon icon={faAngleRight} /></span></Li>
                </Link>
                <Link to="/loginNaver">
                    <Li>로그인 / 로그아웃 <span><FontAwesomeIcon icon={faAngleRight} /></span></Li>
                </Link>
            </Ul>
            
            <Caption>일반</Caption>
            <Ul>
                <Link to="/myCargo/Theme">
                    <Li>테마 <span><FontAwesomeIcon icon={faAngleRight} /></span></Li>
                </Link>
                <Link to="/myCargo/Notice">
                    <Li>공지사항 <span><FontAwesomeIcon icon={faAngleRight} /></span></Li>
                </Link>
                <Link to="/myCargo/Faq">
                    <Li>자주찾는질문 <span><FontAwesomeIcon icon={faAngleRight} /></span></Li>
                </Link>
            </Ul>

            <Caption>기타</Caption>
            <Ul>
                <Link to="/myCargo/Partnership">
                    <Li>제휴 <span><FontAwesomeIcon icon={faAngleRight} /></span></Li>
                </Link>
            </Ul>

        </Container>
    );
};

export default MyCargo;