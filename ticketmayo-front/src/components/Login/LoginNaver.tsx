import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    padding: 0px 20px;
    max-width: 395px;
    margin: 5vh auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
        font-size: 1.5rem;
        margin-bottom: 5vh;
    }
`;

declare global {
    interface Window {
        naver: any
    }
}

function LoginNaver(props: any) {

    const { naver } = window as any;

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: 'aQ1pxTghNuNMaX5MboRU',
            callbackUrl: 'http://localhost:3000/loginNaver/callback', 
            isPopup: false,
            loginButton: { color: 'green', type: 3, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
        });
        naverLogin.init();
    };
    
    useEffect(() => {
        initializeNaverLogin();
    }, []);
    
    return (
        <>
            <Helmet>
                <title>로그인</title>
            </Helmet>
            
            <Container>
                <h2>소셜 로그인</h2>
                <p className="mb-2">회원가입 없이</p>
                <p>
                    <span style={{color: '#04cf5c'}}>네이버</span> 아이디로 이용하세요 :D
                </p>

                <div className="mt-3" id='naverIdLogin'></div>
            </Container>
        </>
    );
};

export default LoginNaver;