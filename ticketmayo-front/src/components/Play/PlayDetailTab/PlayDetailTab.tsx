import { Link, Outlet, useLocation, useMatch } from "react-router-dom";
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

interface IPlayInfo {
    info: {
        id: number,
        title: string,
        open: string,
        playLoc: string,
        grade: string,
        playTime: string,
        img: string,
        rating: number
    }
}

function PlayDetailTab( playInfo: IPlayInfo ) {
    
    const infoMatch = useMatch(`/play/interpark/${playInfo.info.id}/detail/info`);
    const priceMatch = useMatch(`/play/interpark/${playInfo.info.id}/detail/price`);
    const actorsMatch = useMatch(`/play/interpark/${playInfo.info.id}/detail/actors`);
    const ticketMatch = useMatch(`/play/interpark/${playInfo.info.id}/detail/ticket`);
    const restaurantsMatch = useMatch(`/play/interpark/${playInfo.info.id}/detail/restaurants`);
    
    return (
        
        <>
            <Tabs>
                <Tab isActive={infoMatch !== null}>
                    <Link to={`info`}>정보</Link>
                </Tab>
                
                <Tab isActive={priceMatch !== null}>
                    <Link to={'price'}>가격</Link>
                </Tab>

                <Tab isActive={actorsMatch !== null}>
                    <Link to={`actors`}>출연</Link>
                </Tab>

                <Tab isActive={ticketMatch !== null}>
                    <Link to={`ticket`}>티켓</Link>
                </Tab>

                <Tab isActive={restaurantsMatch !== null}>
                    <Link to={`restaurants`}>맛집</Link>
                </Tab>
            </Tabs>
            <Outlet context={`${playInfo.info.id}`} />         
        </>
    );
};

export default PlayDetailTab;