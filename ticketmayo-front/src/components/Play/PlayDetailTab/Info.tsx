import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
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

const InfoImage = styled.img`
    max-width: 100%;
    margin-bottom: 7rem;
`;

interface RouteState {
    state: {
        id: number,
        title: string,
        open: string,
        playLoc: string,
        grade: string,
        playTime: string,
        img: string,
        rating: number,
        price: string[],
        discount: string,
        info: string,
        shop: string,
    }
}  

function Info() {
    
    const {state} = useLocation() as RouteState;
    
    return (
        <>   
            <Container>
                <Helmet>
                    <title>티켓마요-상세</title>
                </Helmet>    
                <Header>Info</Header>
                
                <InfoImage className="fluid" src={state.info} alt={state.title + " 이미지"} />
                
            </Container> 
        </>
    );
};

export default Info;