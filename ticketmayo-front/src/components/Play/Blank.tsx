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


function Blank() {
    return (
        <>   
            <Container>
                <Helmet>
                    <title>티켓마요-Blank</title>
                </Helmet>    
                <Header>Blank</Header>

               

                
            </Container> 
        </>
    );
};

export default Blank;