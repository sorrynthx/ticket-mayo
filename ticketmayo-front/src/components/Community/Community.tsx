import { Helmet } from "react-helmet-async";
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

function Community() {
    return (
        <Container>
            <Helmet>
                <title>티켓마요-커뮤니티</title>
            </Helmet>
            <Header>
                <>
                    <HeaderImg src={require('../../assets/img/header4.png')} className="rounded-3" alt="헤더4 이미지" />
                    <span style={{position: 'absolute'}}>커뮤니티(준비중)</span>
                </>
            </Header>
            

        </Container>
    );
};

export default Community;