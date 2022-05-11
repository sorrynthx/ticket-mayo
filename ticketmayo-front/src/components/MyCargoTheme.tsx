import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function MyCargoTheme() {
    return (
        <>
            <Helmet>
                <title>테마</title>
            </Helmet>
            <Header>
                테마
            </Header>
        </>
    );
};

export default MyCargoTheme;