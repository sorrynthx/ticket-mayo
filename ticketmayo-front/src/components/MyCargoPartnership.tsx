import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function MyCargoPartnership() {
    return (
        <>
            <Helmet>
                <title>제휴</title>
            </Helmet>
            <Header>
                제휴
            </Header>
        </>
    );
};

export default MyCargoPartnership;