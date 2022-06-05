import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BottomSheet from "./BottomSheet";
import { useState } from "react";

const Container = styled.div`
    padding: 0px 20px;
    min-height: 100vh;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;

const HeaderImg = styled.img`
    width: 185px; 
    opacity: 0.5;
    margin-top: 40px;
    margin-right: 240px;
    z-index: -1;
`;

const TicketList = styled.div`
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
`;

const Ticket = styled.div`
   
    width: 260px;
    margin: 1.5rem 1rem 3rem;
    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
    box-shadow: 0 8px 30px rgb(255 229 236 / 100%) !important;
    display: inline-block;

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
        height: 60px;
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
        background-color: #FFC2D1;
        padding: 0 18px;
        line-height: 30px;
        border-radius: 15px;
        color: #000;
        text-decoration: none;
        height: 30px;
    }
    .bottom .sold {
        display: block;
        font-size: 12px;
        //font-weight: bold;
        background-color: #c9c9c9eb;
        padding: 0 18px;
        line-height: 30px;
        border-radius: 15px;
        color: #000;
        text-decoration: none;
        height: 30px;
    }
    .bottom .ing {
        display: block;
        font-size: 12px;
        //font-weight: bold;
        background-color: #53d85e;
        padding: 0 18px;
        line-height: 30px;
        border-radius: 15px;
        color: #000;
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
        openTime: "19:30",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: 150000,
        cnt: 0,
        payNumber: 1654402449210,
        seatInfo: "1층 A블럭 3열 12번",
        deliverFee: 0,
        
    },
    {
        id: 1,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.06.26",
        openTime: "19:30",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: 150000,
        cnt: -1,
        payNumber: 1654402449211,
        seatInfo: "1층 A블럭 3열 12번",
        deliverFee: 0,
    },
    {
        id: 2,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.06.26",
        openTime: "19:30",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: 150000,
        cnt: 1,
        payNumber: 1654402449212,
        seatInfo: "1층 A블럭 3열 12번",
        deliverFee: 3000,
    },
    {
        id: 3,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.06.26",
        openTime: "19:30",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: 150000,
        cnt: 1,
        payNumber: 1654402449213,
        seatInfo: "1층 A블럭 3열 12번",
        deliverFee: 3000,
    },
    {
        id: 4,
        title: "뮤지컬 데스노트 (Death Note)",
        open: "2022.06.26",
        openTime: "19:30",
        playLoc: "충무아트센터 대극장",
        grade: "VIP석",
        img: "https://ticketimage.interpark.com/Play/image/large/22/22000970_p.gif",
        price: 150000,
        cnt: 1,
        payNumber: 1654402449214,
        seatInfo: "1층 A블럭 3열 12번",
        deliverFee: 3000,
    }
];


function Tickets() {
    
    const [isOpen, setOpen] = useState(false);
    const [ticketId, setTicketId] = useState(0);
    const [ticketInfo, setTicketInfo] = useState(TicketDatas[0]);

    return (
        <>   
            <Container>
                <Helmet>
                    <title>티켓마요-티켓</title>
                </Helmet>    
                <Header>
                    <>
                        <HeaderImg src={require('../../assets/img/header2.png')} className="rounded-3" alt="헤더2 이미지" />
                        <span style={{position: 'absolute'}}>양도 티켓</span>
                    </>
                </Header>
                
                
                <TicketList>    
                    {TicketDatas.map((ticket) => (
                        <Ticket key={ticket.id} className="--flex-column ticket">        
                            <div className="top --flex-column">
                                <div className="bandname -bold">{ticket.title}</div>
                                <div className="tourname mt-1">@홍대와합정</div>
                                <img src={ticket.img} alt="" />
                                
                                <div className="deetz --flex-row">
                                    <div className="event --flex-column">
                                        <div className="date">{ticket.open}</div>
                                        <div className="location -bold">{ticket.playLoc}</div>
                                    </div>
                                    <div className="price --flex-column">
                                        <div className="label">{ticket.grade}({ticket.cnt})</div>
                                        <div className="cost -bold">{ticket.price}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="rip"></div>
                            <div className="bottom --flex-row">
                                <div className="barcode">
                                    <div style={{'marginTop': '18px', 'fontSize': '0.6rem'}}>{ticket.payNumber}</div>
                                </div>
                                
                                { 
                                    ticket.cnt === 0 ? 
                                    (<button className="sold">판매완료</button>) :
                                    ticket.cnt === -1 ?
                                    (<button className="ing">거래 대기중...</button>) :
                                    (<button className="buy" onClick={() => { return (setOpen(true), setTicketId(ticket.id), setTicketInfo(ticket)) }}>양도티켓 구매</button>)
                                }
                            </div>
                            
                        </Ticket>
                    ))}

                </TicketList>
               
            </Container> 
            
            {/* BottomSheet*/}
            <BottomSheet 
                value={isOpen} 
                ticketId={ticketId}
                ticketInfo={ticketInfo}           
                setOpen={setOpen}
            />
        </>
    );
};

export default Tickets;