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


function Ticket() {
    return (
        <>   
            <Container>
                <Helmet>
                    <title>티켓마요-양도티켓</title>
                </Helmet>    
                <Header>Ticket</Header>

                Ticket

                
            </Container> 
        </>
    );
};

export default Ticket;