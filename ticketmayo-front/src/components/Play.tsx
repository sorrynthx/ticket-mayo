import { Helmet } from "react-helmet-async";
import { Link, Outlet, useMatch } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import Image from 'react-bootstrap/Image'
import PlayTab from "./PlayTab";

const rotaionAnimation = keyframes`
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
`;

const Container = styled.div`
    padding: 0px 20px;
    max-width: 485px;
    margin: 0 auto;
    .playImg {
        width: 100%;
        border-radius: 1rem !important;
        opacity: 0.9;
    }
    #animation1 {
        display: inline-block;
        animation: ${rotaionAnimation} 2s linear infinite;
        &:hover {
            font-size: 45px;
        }
    }
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;

const Tab = styled.span<{isActive: boolean}>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background-color: rgb(255, 143, 171, 0.5);
    padding: 7px 0px;
    border-radius: 10px;
    a {
        display: block;
        &:hover {color: #fff};
    }
    color: ${(props) => props.isActive ? '#fff' : '#000000 !important'};
`;

function Play() {
    
    const playMatch = useMatch("/play");
    const interparkMatch = useMatch("/play/interpark");
    const yes24Match = useMatch("/play/yes24");

    console.log(playMatch);

    return (
        <Container>
            <Helmet>
                <title>티켓마요- 공연</title>
            </Helmet>
            <Header>공연</Header>

            <PlayTab />

            <div className="fluid" id="introDiv">
                <p className="mt-3 text-center">
                    <span id="animation1">☝</span> 
                    &nbsp;선택하세요 :D</p>
                <Image 
                    className="rounded playImg mt-2 mb-2"
                    src={require('../assets/img/theater.jpg')} alt="공연장 이미지"
                />
                <p className="m-3 text-center">
                    <span style={{color:'#ed1613'}}>인터파크</span>와 
                    &nbsp;<span style={{color:'#0058aa'}}>예스24</span>의 공연정보를 제공합니다.
                </p>
            </div>

        </Container>
    );
};

export default Play;