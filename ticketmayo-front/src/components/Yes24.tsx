import { Helmet } from "react-helmet-async";
import styled from "styled-components";

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
`;

function Yes24() {
    return (
        <Container>
            <Helmet>
                <title>티켓마요-예스24 공연</title>
            </Helmet>
            <Header>
                Yes24
            </Header>
        </Container>
    );
};

export default Yes24;