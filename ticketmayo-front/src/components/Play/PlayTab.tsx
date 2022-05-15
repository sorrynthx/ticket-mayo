import { Link, Outlet, useMatch } from "react-router-dom";
import styled from "styled-components";

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

function PlayTab() {
    
    const interparkMatch = useMatch("/play/interpark");
    const yes24Match = useMatch("/play/yes24");   

    return (
        
        <>
            <Tabs>
                <Tab isActive={interparkMatch !== null}>
                    <Link to={`/play/interpark`} state={{shop:'interpark'}}>인터파크</Link>
                </Tab>
                <Tab isActive={yes24Match !== null}>
                    <Link to={`/play/yes24`} state={{shop:'yes24'}}>예스24</Link>
                </Tab>
            </Tabs>
            <Outlet context={{}} />         
        </>
    );
};

export default PlayTab;