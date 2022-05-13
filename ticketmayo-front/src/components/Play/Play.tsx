import { Helmet } from "react-helmet-async";
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

function Play() {
    
    return (
        <Container>
            <Helmet>
                <title>티켓마요- 공연</title>
            </Helmet>
            <Header>공연</Header>

            {/* Tab */}
            <PlayTab />

            <div className="fluid" id="introDiv">
                <p className="mt-3 text-center">
                    <span id="animation1">☝</span> 
                    &nbsp;선택하세요 :D</p>
                <Image 
                    className="rounded playImg mt-2 mb-2"
                    src={require('../../assets/img/theater.jpg')} alt="공연장 이미지"
                />
                <p className="m-3 text-center">
                    <span style={{color:'#ed1613'}}>인터파크</span>와 
                    &nbsp;<span style={{color:'#0058aa'}}>예스24</span>의 공연정보를 제공합니다.<br/><br/>
                    간편하게 확인하세요 :)
                </p>
            </div>

        </Container>
    );
};

export default Play;