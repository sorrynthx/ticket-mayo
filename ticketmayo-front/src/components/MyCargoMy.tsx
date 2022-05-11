import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function MyCargoMy() {
    return (
        <>
            <Helmet>
                <title>내 정보</title>
            </Helmet>
            <Header>
                내 정보
            </Header>
        </>
    );
};

export default MyCargoMy;