import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function MyCargo_Faq() {
    return (
        <>
            <Helmet>
                <title>문의사항</title>
            </Helmet>
            <Header>
                문의사항
            </Header>
        </>
    );
};

export default MyCargo_Faq;