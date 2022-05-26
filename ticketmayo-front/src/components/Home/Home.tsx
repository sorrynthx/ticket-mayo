import { Image } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Card from "../Home/Card";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;

function Home () {
    return (
        <Container>
            <Helmet>
                <title>티켓마요-홈</title>
            </Helmet>
            <Header>
                <>
                    <Image src={require('../../assets/img/header.png')} className="rounded-3" style={{width: '185px', opacity: '0.5', marginTop: '40px', marginRight: '240px'}} alt="티켓 오픈 예정" />
                    <span style={{position: 'absolute'}}>티켓 오픈 예정</span>
                </>
            </Header>
            
            <Card />
            
        </Container>
    );
};

export default Home;