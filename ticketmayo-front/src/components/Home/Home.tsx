import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Card from "../Home/Card";

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
    margin-top: 40px;
    margin-right: 240px;
    z-index: -1;
`;

function Home () {
    return (
        <Container>
            <Helmet>
                <title>티켓마요-홈</title>
            </Helmet>
            <Header>
                <>
                    <HeaderImg src={require('../../assets/img/header1.png')} className="rounded-3" alt="헤더1 이미지" />
                    <span style={{position: 'absolute'}}>티켓 오픈 예정</span>
                </>
            </Header>
            
            {/* List Start */}
            <Card />
            {/* List End */}

        </Container>
    );
};

export default Home;