import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import PlayTab from "./PlayTab";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 485px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlayList = styled.div`
    padding-bottom: 100px;
`;

const Play = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid hsla(0,0%,65.5%,.2);
    padding-bottom: 10px;
    a {
        width: 100%;
        display: inherit;
        &:hover {color: #000}
    }
`;

const PlayText = styled.div`
    padding-left: 20px;
    width: 100%;
    li {
        margin-bottom: 5px;
        color: #8e8e8e;
    }
    .open {
        padding: 0;
        display: inline-block;
        font-weight: 400;
        text-transform: capitalize;
        font-size: 14px;    
    }
    .playLoc {
        display: block;
        font-size: 16px;
        line-height: 170%;
        transition: all .3s linear;
    }
    .rating {
        color: #FF8FAB;
        margin-top: 55px;
        text-align: right;
        width: 100%;
        justify-content: flex-end;
        display: flex;
    }
`;

const PlayTitle = styled.h2`
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 700;
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 290px; */
`;

const Img = styled.img`
    width: 120px;
    margin-right: 10px;
`;

const playDatas = [
    {
        id: 0,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.04.01 ~ 2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: " 14세 이상 관람가 (미취학 아동, 초등학생 관람불가)",
        playTime: "160분 (인터미션 20분 포함)",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        rating: "9.6",
        price: [
            "VIP석 150,000원",
            "VIP석(가변석) 150,000원",
            "R석 130,000원",
            "R석(가변석) 130,000원",
            "S석 100,000원",
            "S석(가변석) 100,000원",
            "A석 70,000원",
            "A석(가변석) 70,000원",
        ],
        discount: "http://m.ticket.yes24.com/Perf/Detail/PerfPromotion.aspx?IdPerf=41357"
    },
    {
        id: 1,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.04.01 ~ 2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: " 14세 이상 관람가 (미취학 아동, 초등학생 관람불가)",
        playTime: "160분 (인터미션 20분 포함)",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        rating: "9.6",
        price: [
            "VIP석 150,000원",
            "VIP석(가변석) 150,000원",
            "R석 130,000원",
            "R석(가변석) 130,000원",
            "S석 100,000원",
            "S석(가변석) 100,000원",
            "A석 70,000원",
            "A석(가변석) 70,000원",
        ],
        discount: "http://m.ticket.yes24.com/Perf/Detail/PerfPromotion.aspx?IdPerf=41357"
    },
    {
        id: 2,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.04.01 ~ 2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: " 14세 이상 관람가 (미취학 아동, 초등학생 관람불가)",
        playTime: "160분 (인터미션 20분 포함)",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        rating: "9.6",
        price: [
            "VIP석 150,000원",
            "VIP석(가변석) 150,000원",
            "R석 130,000원",
            "R석(가변석) 130,000원",
            "S석 100,000원",
            "S석(가변석) 100,000원",
            "A석 70,000원",
            "A석(가변석) 70,000원",
        ],
        discount: "http://m.ticket.yes24.com/Perf/Detail/PerfPromotion.aspx?IdPerf=41357"
    },
    {
        id: 3,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.04.01 ~ 2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: " 14세 이상 관람가 (미취학 아동, 초등학생 관람불가)",
        playTime: "160분 (인터미션 20분 포함)",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        rating: "9.6",
        price: [
            "VIP석 150,000원",
            "VIP석(가변석) 150,000원",
            "R석 130,000원",
            "R석(가변석) 130,000원",
            "S석 100,000원",
            "S석(가변석) 100,000원",
            "A석 70,000원",
            "A석(가변석) 70,000원",
        ],
        discount: "http://m.ticket.yes24.com/Perf/Detail/PerfPromotion.aspx?IdPerf=41357"
    },
    {
        id: 4,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.04.01 ~ 2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: " 14세 이상 관람가 (미취학 아동, 초등학생 관람불가)",
        playTime: "160분 (인터미션 20분 포함)",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        rating: "9.6",
        price: [
            "VIP석 150,000원",
            "VIP석(가변석) 150,000원",
            "R석 130,000원",
            "R석(가변석) 130,000원",
            "S석 100,000원",
            "S석(가변석) 100,000원",
            "A석 70,000원",
            "A석(가변석) 70,000원",
        ],
        discount: "http://m.ticket.yes24.com/Perf/Detail/PerfPromotion.aspx?IdPerf=41357"
    }
];


interface RouteState {
    state: {
        shop: string,
    }
}

function Yes24() {
    
    const {state} = useLocation() as RouteState; 
    
    return (
        <>   
            <Container>
                <Helmet>
                    <title>티켓마요-예스24 공연</title>
                </Helmet>    
                <Header>예스24 공연</Header>

                {/* Play Tab */}
                <PlayTab />

                <PlayList>
                    {playDatas.map((play) => (
                        <Play key={play.id}>
                            <Link 
                                to={`${play.id}/detail`} 
                                state={{
                                    id: play.id,
                                    title:play.title, 
                                    open: play.open,
                                    playLoc: play.playLoc,
                                    grade: play.grade,
                                    playTime: play.playTime,
                                    img: play.img,
                                    rating: play.rating,
                                    price: play.price,
                                    discount: play.discount,
                                    shop: state.shop,
                                }}
                            >

                                <Img src={play.img} />
                                <PlayText>
                                    <PlayTitle>{play.title}</PlayTitle>
                                    <ul>
                                        <li className="open">{play.open}</li>
                                        <li className="playLoc">{play.playLoc}</li>
                                    </ul>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStarEmpty} />
                                        {/* {play.rating} */}
                                    </div>     
                                </PlayText>
                            </Link>
                        </Play>
                    ))}
                </PlayList> 
            </Container> 
        </>
    );
};

export default Yes24;