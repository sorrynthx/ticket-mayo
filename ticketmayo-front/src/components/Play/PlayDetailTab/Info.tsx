import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 485px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


function Info() {
    return (
        <>   
            <Container>
                <Helmet>
                    <title>티켓마요-상세</title>
                </Helmet>    
                <Header>Info</Header>

                Info

                
            </Container> 
        </>
    );
};

export default Info;