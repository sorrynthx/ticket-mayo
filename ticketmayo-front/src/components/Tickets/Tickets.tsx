import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

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

const TicketList = styled.div`
    padding-bottom: 100px;
`;

const Ticket = styled.div`
   
    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
    width: 255px;
    margin: 1.5rem auto 3rem;
    .top > div, .bottom > div  {padding: 0 18px;}
    .top > div:first-child, .bottom > div:first-child { padding-top: 18px;}
    .top > div:last-child, .bottom > div:last-child { padding-bottom: 18px;}
    .top img, .bottom img {padding: 18px 0;}
    .--flex-row {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .--flex-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        display: flex;
        
       
    }
    .top, .bottom, .rip {background-color: #fff;}
    .top { border-top-right-radius: 5px; border-top-left-radius: 5px;}
    .top .deetz { padding-bottom: 10px !important;}
    .bottom {
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 18px;
        height: 55px;
        padding-top: 10px;
    }
    .bottom .barcode {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAABCAYAAABXChlMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAACPSURBVChTXVAJDsMgDOsrVpELiqb+/4c0DgStQ7JMYogNh2gdvg5VfXFCRIZaC6BOtnoNFpvaumNmwb/71Frrm8XvgYkker1/g9WzMOsohaOGNziRs5inDsAn8yEPengTapJ5bmdZ2Yv7VvfPN6AH2NJx7nOWPTf1/78hoqgxhzw3ZqYG1Dr/9ur3y8vMxgNZhcAUnR4xKgAAAABJRU5ErkJggg==);
        background-repeat: repeat-y;
        min-width: 90px;
    }
    .bottom .buy {
        display: block;
        font-size: 12px;
        //font-weight: bold;
        background-color: #5D9CEC;
        padding: 0 18px;
        line-height: 30px;
        border-radius: 15px;
        color: #fff;
        text-decoration: none;
        height: 30px;
    }
    .rip {
        height: 20px;
        margin: 0 10px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAACCAYAAAB7Xa1eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAAaSURBVBhXY5g7f97/2XPn/AcCBmSMQ+I/AwB2eyNBlrqzUQAAAABJRU5ErkJggg==);
        background-size: 4px 2px;
        background-repeat: repeat-x;
        background-position: center;
        position: relative;
        box-shadow: 0 1px 0 0 #fff, 0 -1px 0 0 #fff;
    }
    .rip:before, .rip:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        border: 5px solid transparent;
        border-top-color: #fff;
        border-right-color: #fff;
        border-radius: 100%;
        pointer-events: none;
        box-sizing: unset;
    }
    .rip:before { left: -10px; }
    .rip:after {
        transform: translate(-50%, -50%) rotate(225deg);
        right: -40px;
    }
    .-bold {
        font-weight: bold;
    }
    a {
        &:hover {color: #000000 !important}
    }
     

`; 


const TicketDatas = [
    {
        id: 0,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: "150,000원",
        
    },
    {
        id: 1,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: "150,000원",
    },
    {
        id: 2,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: "150,000원",
    },
    {
        id: 3,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: "150,000원",
    },
    {
        id: 4,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.06.26",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: "150,000원",
    }
];


function Tickets() {
    
    return (
        <>   
            <Container>
                <Helmet>
                    <title>티켓마요-티켓</title>
                </Helmet>    
                <Header>양도 티켓</Header>
                
                <h3 className="text-center">개인사정으로 양도된 티켓을 판매합니다.</h3>

                <TicketList>
                    {TicketDatas.map((ticket) => (
                        <Ticket key={ticket.id} className="--flex-column ticket">
                            <Link to="#">
                                <div className="top --flex-column">
                                    <div className="bandname -bold">{ticket.title}</div>
                                    <div className="tourname">@홍대와합정</div>
                                    <img src={ticket.img} alt="" />
                                    
                                    <div className="deetz --flex-row">
                                        <div className="event --flex-column">
                                            <div className="date">{ticket.open}</div>
                                            <div className="location -bold">{ticket.playLoc}</div>
                                        </div>
                                        <div className="price --flex-column">
                                            <div className="label">{ticket.grade}</div>
                                            <div className="cost -bold">{ticket.price}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rip"></div>
                                <div className="bottom --flex-row">
                                    <div className="barcode"></div>
                                    <button className="buy">양도티켓 구매</button>
                                </div>
                            </Link>
                        </Ticket>
                    ))}
                </TicketList>
               
            </Container> 
        </>
    );
};

export default Tickets;