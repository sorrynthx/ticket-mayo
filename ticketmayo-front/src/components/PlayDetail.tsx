import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
function PlayDetail() {
    
    let navigate = useNavigate();

    return (
        <>
            <Container>
                <Helmet>
                    <title>티켓마요 공연 정보</title>
                </Helmet>
                <Header>
                    <span onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                    Play Detail
                </Header>
            </Container>
        </>
    );
};

export default PlayDetail;