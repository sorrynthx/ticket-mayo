import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import { Badge } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet-async";
import { Outlet, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
    .accordion-button:not(.collapsed) {
        color: #FB6F92;
        background-color: #FFE5EC;
    }
    .playImg {
        border-radius: 1rem !important;
        opacity: 0.9;
        max-width: 15rem;
    }
    #titleDiv {
        h2 { font-size: 1.5rem; }
        .badge { font-size: 12px; font-weight: 100 !important; }
        .rating { color: #FF8FAB; }
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

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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


interface RouteParam {
    playId: number;
}

interface RouteState {
    state: {
        id: number,
        title: string,
        open: string,
        playLoc: string,
        grade: string,
        playTime: string,
        img: string,
        rating: number,
        price: string[],
        discount: string,
        info: string,
        shop: string,
    }
}

const InterparkTag = () => {
    return <Badge bg="danger" className="mt-2 mb-2">인터파크</Badge>;
}

const Yes24Tag = () => {
    return <Badge bg="primary" className="mt-2 mb-2">예스24</Badge>;
}

function PlayDetail() {
    
    const {playId} = useParams() as unknown as RouteParam;
    const {state} = useLocation() as RouteState;
    
    const infoMatch = useMatch(`/play/${state.shop}/${playId}/detail/info`);
    const priceMatch = useMatch(`/play/${state.shop}/${playId}/detail/price`);
    const actorsMatch = useMatch(`/play/${state.shop}/${playId}/detail/actors`);
    const ticketMatch = useMatch(`/play/${state.shop}/${playId}/detail/ticket`);
    const restaurantsMatch = useMatch(`/play/${state.shop}/${playId}/detail/restaurants`);

    return (
        
            <Container>
                <>
                <Helmet>
                    <title>티켓마요 공연 정보</title>
                </Helmet>
                <Header>
                    <span>
                        <Link 
                            to={`/play/${state.shop}`} state={{shop:`${state.shop}`}}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </Link>
                    </span>
                    {state?.title ? state?.title : 'loading...'}
                </Header>
                
                    {/* 이미지 */}
                    <div className="fluid text-center" id="imgDiv">
                        <Image 
                            className="rounded playImg mt-2 mb-2 thumbnail"
                            src={`${state.img}`} alt={state.title}
                        />
                    </div>

                <div className="fluid text-center" id="titleDiv">
                    {/* 공연 티켓처 태그 */}
                    {state?.shop == 'interpark' ? <InterparkTag /> : <Yes24Tag />}

                    {/* 제목 */}
                    <h2 className="mt-2 mb-2">{state.title}</h2>

                    {/* 별점 */}
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarEmpty} />
                    </div> 

                </div>

                {/* 자세한 정보->탭 */}
                <div className="fluid" id="infoDiv">

                    {/* Tab */}
                    <Tabs>
                        <Tab isActive={infoMatch !== null }>
                            <Link 
                                to={`/play/${state.shop}/${playId}/detail/info`}
                                state={state}
                            >
                                정보
                            </Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null }>
                            <Link 
                                to={`/play/${state.shop}/${playId}/detail/price`}
                                state={state}
                            >
                                가격
                            </Link>
                        </Tab>
                        <Tab isActive={actorsMatch !== null }>
                            <Link 
                                to={`/play/${state.shop}/${playId}/detail/actors`}
                                state={state}
                            >
                                출연
                            </Link>
                        </Tab>
                        <Tab isActive={ticketMatch !== null }>
                            <Link 
                                to={`/play/${state.shop}/${playId}/detail/ticket`}
                                state={state}
                            >
                                티켓
                            </Link>
                        </Tab>
                        <Tab isActive={restaurantsMatch !== null }>
                            <Link 
                                to={`/play/${state.shop}/${playId}/detail/restaurants`}
                                state={state}
                            >
                                맛집
                            </Link>
                        </Tab>
                    </Tabs>                    
                    <Outlet context={{playId}} />
                </div>
                </>
        </Container>
    );
};

export default PlayDetail;