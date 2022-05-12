import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import Image from 'react-bootstrap/Image'

const rotaionAnimation = keyframes`
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
`;

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
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
    span {
        margin-right: auto;
        cursor: pointer;
    }
`;

function MyCargoPartnership() {
    
    let navigate = useNavigate();

    return (
        <>
            <Container>
                <Helmet>
                    <title>제휴</title>
                </Helmet>
                <Header>
                    <span onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                    제휴
                </Header>

                <div className="fluid" id="introDiv">
                    <p className="mt-3 mb-3 text-center">
                        <span id="animation1">💼</span> 
                        &nbsp; 비즈니스 제휴 </p>
                    <Image 
                        className="rounded playImg mt-2 mb-2"
                        src={require('../../assets/img/partnership.jpg')} alt="제휴 이미지"
                    />
                    <p className="m-3 text-center">
                        <a onClick={() => window.open('https://open.kakao.com/o/sJDJ2Fbe', '_blank')} style={{color:'#fecd00', cursor: "pointer"}}>카카오 채팅</a> 으로 문의해주세요.
                    </p>
                </div>
                

            </Container>
        </>
    );
};

export default MyCargoPartnership;