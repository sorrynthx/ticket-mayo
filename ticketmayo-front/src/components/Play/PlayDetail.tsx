import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import { Badge } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { Helmet } from "react-helmet-async";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
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
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;

const Tab = styled.span`
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
        rating: number
    }
}

function PlayDetail() {
    
    let navigate = useNavigate();

    const {playId} = useParams() as unknown as RouteParam;   console.log(playId); 
    const {state} = useLocation() as RouteState;            console.log(state);
    
    return (
        
            <Container>
                <>
                <Helmet>
                    <title>티켓마요 공연 정보</title>
                </Helmet>
                {/* <Header>
                    <span onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                    {state?.title ? state.title : 'loading...'}
                </Header>
                
                <div className="fluid text-center" id="imgDiv">
                    <Image 
                        className="rounded playImg mt-2 mb-2 thumbnail"
                        src={state.img} alt={state.title}
                    />
                </div>

                <div className="fluid text-center" id="titleDiv">
                    <Badge bg="danger">인터파크</Badge>
                    <h2 className="mt-2 mb-2">{state.title}</h2>

                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarEmpty} />
                    </div> 

                </div> */}

                <div className="fluid" id="infoDiv">

                    {/* Tab */}
                    <Tabs>
                        <Tab>
                            <Link to={`/play/interpark/${playId}/detail/info`}>정보</Link>
                        </Tab>
                        <Tab>
                            <Link to={`/play/interpark/${playId}/detail/price`}>가격</Link>
                        </Tab>
                    </Tabs>                    
                    <Outlet context={{playId}} />
                </div>
                </>
        </Container>
    );
};

export default PlayDetail;