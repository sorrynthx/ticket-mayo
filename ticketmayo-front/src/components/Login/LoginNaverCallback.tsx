import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
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
    margin: 0 auto;
    h2 {
        font-size: 1.5rem;
        margin-bottom: 5vh;
    }
`;

function LoginNaverCallback(props: any) {
    
    useEffect(() => {
        getNaverToken();
    }, []);
    
    const location = useLocation();  

    const getNaverToken = () => {
        if (!location.hash) return;
        const token = location.hash.split('=')[1].split('&')[0];
        const state = location.hash.split('=')[2].split('&')[0];
        const tokenType = location.hash.split('=')[3].split('&')[0];
        
        console.log('token: ' + token);
        console.log('state: ' + state);
        console.log('tokenType: ' + tokenType);
               
    };

    return (
        <>
            <Helmet>
                <title>로그인 결과</title>
            </Helmet>
            <Header>
                로그인 결과
            </Header>

            <Container>              
                기다려주세요...
            </Container>
        </>
    );
};

export default LoginNaverCallback;