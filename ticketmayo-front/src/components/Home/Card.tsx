import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const CardList = styled.div`
    padding-bottom: 100px;
`;

const InnerWrap = styled.div`
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
`;

const PlayInfo = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding-bottom: 0px !important;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(255, 229, 236, 0.125); 
    border-radius: 0.25rem;
    box-shadow: 0 8px 30px rgb(255 229 236 / 100%) !important;
`;

const PlayTitle = styled.h2`
    font-weight: 700 !important;
    margin-top: 0.25rem !important;
    font-size: 1.1rem;
    padding-left: 1rem;
`;
const OpenDate = styled.span`
    color: #FF8FAB !important;
    margin-top: 0.5rem !important;
    margin-bottom: 0.25rem !important;
    display: block !important;
    line-height: 1.4;
    font-size: 1.1rem;
    font-weight: 100;
`;

const PlayDescription = styled.div`
    font-weight: 500 !important;
    width: 100% !important;
    line-height: 1.5;
    p > a {
        color: #FF8FAB !important;
        margin-left: 5px;
        &:hover {
            color: #FF8FAB !important;
        }
    }
`;

const Image = styled.img`
    width: 7rem;
`;
const ImageWrap = styled.div`
    width: 7.5rem;
    display: inline-block;
`;

const ProviderBadge = styled.div`
    margin-top: -35px;
    float: right;
    .badge {
        font-size: 0.7rem !important;
        font-weight: 100 !important;
    }
`;

const Rating = styled.div`
    color: #FF8FAB;
    width: 100%;
    font-weight: 100;
`;

const Badge_P = (text: any) => {
    return (
        text.provider === '인터파크' ? 
       (<ProviderBadge><Badge bg="danger">인터파크</Badge></ProviderBadge>)  :  
       text.provider === '예스24' ?
       (<ProviderBadge><Badge bg="primary">예스24</Badge></ProviderBadge>) : 
       <ProviderBadge>-</ProviderBadge>
   )
};

const Ad = ({play}: IInfo) => {
    return (
        <PlayInfo className="card w-100 p-4 mb-3 text-center" key={Date.now()}>
            <div className="card-body p-0">
                <PlayTitle>
                    <span style={{fontSize: '0.8rem'}}>(스폰서 광고)</span> XXX 프로그램     
                </PlayTitle>
            </div>
            <PlayDescription className="card-body p-0">
                <div className="card-body d-block p-0 mb-3">
                    <div className="row ps-2 pe-2">
                        <div className="col-sm-12 p-1 text-center">
                            <Image src={require('../../assets/img/profile.png')} className="rounded-3" alt="post" />
                        </div>
                    </div>
                </div>
                <p className="w-100 mb-2">
                    빠르고 쉽게 좋은 자리 예매하기 
                    <a href="https://stellar-guppy-450.notion.site/XXX-1e57fa2ccf1f4491b72679d5dec0e7f9" target="_blank" >확인하기</a>
                </p>
            </PlayDescription>
        </PlayInfo>
    );
};

const RequestAd = () => {
    return (
        <PlayInfo className="card w-100 p-4 mb-3 text-center">
            <div className="card-body p-0">
                <PlayTitle>
                    [광고 영역]
                </PlayTitle>
            </div>
            <PlayDescription className="card-body p-0">
                <p className="w-100 mb-2">
                    광고 영역 입니다.
                    <a href="https://open.kakao.com/o/sJDJ2Fbe" target="_blank" >광고 제휴</a>
                </p>
            </PlayDescription>
        </PlayInfo>
    );
};

interface IInfo  {
    play: {
        id: number,
        title: string,
        date: string,
        image: string,
        description: string,
        provider: string,
        link: string,
        cnt: number,
    }
};

const Info = ({play}: IInfo) => {
    return (
        <a href={play.link} target="_blank">
            <PlayInfo className="card w-100 p-3 mb-3" key={play.id}>
                <PlayDescription className="card-body p-0">
                    <InnerWrap className="">
                        <ImageWrap className="p-1">
                            <Image src={play.image !== '' ? play.image : require('../../assets/img/theater.jpg')} className="rounded-3" alt="post" />
                        </ImageWrap>

                        <div className="card-body p-0">
                            <PlayTitle>
                                {play.title}
                                <OpenDate>{play.date}</OpenDate>
                                <Rating><FontAwesomeIcon icon={faHeart} /> {play.cnt}</Rating>
                            </PlayTitle>
                        </div>
                    </InnerWrap>
                    <Badge_P provider={play.provider} />
                </PlayDescription>
            </PlayInfo>
        </a>
    )    
};

const playDatas = [
    {
        id: 0,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        description: '한국 창작 뮤지컬의 자부심이 돌아온다! 사상 초유의 흥행 대작! “제7회 예그린뮤지컬어워드 6관왕, 제3회 한국뮤지컬어워즈 3관왕, 제6회 이데일리 문화대상 뮤지컬부문 최우수상, 제14회 골든티켓어워즈 대상 및 뮤지컬 최우수상” 현존하는 뮤지컬 시상식을 모두 휩',
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
    },
    {
        id: 1,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: '',
        description: '한국 창작 뮤지컬의 자부심이 돌아온다! 사상 초유의 흥행 대작! “제7회 예그린뮤지컬어워드 6관왕, 제3회 한국뮤지컬어워즈 3관왕, 제6회 이데일리 문화대상 뮤지컬부문 최우수상, 제14회 골든티켓어워즈 대상 및 뮤지컬 최우수상” 현존하는 뮤지컬 시상식을 모두 휩',
        provider: "예스24",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
    },
    {
        id: 2,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        description: '한국 창작 뮤지컬의 자부심이 돌아온다! 사상 초유의 흥행 대작! “제7회 예그린뮤지컬어워드 6관왕, 제3회 한국뮤지컬어워즈 3관왕, 제6회 이데일리 문화대상 뮤지컬부문 최우수상, 제14회 골든티켓어워즈 대상 및 뮤지컬 최우수상” 현존하는 뮤지컬 시상식을 모두 휩',
        provider: "",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
    },
    {
        id: 3,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        description: '한국 창작 뮤지컬의 자부심이 돌아온다! 사상 초유의 흥행 대작! “제7회 예그린뮤지컬어워드 6관왕, 제3회 한국뮤지컬어워즈 3관왕, 제6회 이데일리 문화대상 뮤지컬부문 최우수상, 제14회 골든티켓어워즈 대상 및 뮤지컬 최우수상” 현존하는 뮤지컬 시상식을 모두 휩',
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
    },
    {
        id: 4,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        description: '한국 창작 뮤지컬의 자부심이 돌아온다! 사상 초유의 흥행 대작! “제7회 예그린뮤지컬어워드 6관왕, 제3회 한국뮤지컬어워즈 3관왕, 제6회 이데일리 문화대상 뮤지컬부문 최우수상, 제14회 골든티켓어워즈 대상 및 뮤지컬 최우수상” 현존하는 뮤지컬 시상식을 모두 휩',
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
    },
    {
        id: 5,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        description: '한국 창작 뮤지컬의 자부심이 돌아온다! 사상 초유의 흥행 대작! “제7회 예그린뮤지컬어워드 6관왕, 제3회 한국뮤지컬어워즈 3관왕, 제6회 이데일리 문화대상 뮤지컬부문 최우수상, 제14회 골든티켓어워즈 대상 및 뮤지컬 최우수상” 현존하는 뮤지컬 시상식을 모두 휩',
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
    },
    {
        id: 6,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        description: '한국 창작 뮤지컬의 자부심이 돌아온다! 사상 초유의 흥행 대작! “제7회 예그린뮤지컬어워드 6관왕, 제3회 한국뮤지컬어워즈 3관왕, 제6회 이데일리 문화대상 뮤지컬부문 최우수상, 제14회 골든티켓어워즈 대상 및 뮤지컬 최우수상” 현존하는 뮤지컬 시상식을 모두 휩',
        provider: "예스24",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
    },
    {
        id: 7,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        description: '한국 창작 뮤지컬의 자부심이 돌아온다! 사상 초유의 흥행 대작! “제7회 예그린뮤지컬어워드 6관왕, 제3회 한국뮤지컬어워즈 3관왕, 제6회 이데일리 문화대상 뮤지컬부문 최우수상, 제14회 골든티켓어워즈 대상 및 뮤지컬 최우수상” 현존하는 뮤지컬 시상식을 모두 휩',
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
    },
    {
        id: 8,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        description: '한국 창작 뮤지컬의 자부심이 돌아온다! 사상 초유의 흥행 대작! “제7회 예그린뮤지컬어워드 6관왕, 제3회 한국뮤지컬어워즈 3관왕, 제6회 이데일리 문화대상 뮤지컬부문 최우수상, 제14회 골든티켓어워즈 대상 및 뮤지컬 최우수상” 현존하는 뮤지컬 시상식을 모두 휩',
        provider: "예스24",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
    },
];

function Card () {
    
    return (
        <>
        <CardList>
            {playDatas.map((play, i) => (
                <div key={i}>
                    {i % 5 === 0 && i !== 0 ?
                        <>
                        <Ad play={play} /> 
                        <Info play={play} />   
                        </>
                    :
                        <Info play={play} />   
                    }
                </div>
            ))}
            <RequestAd />
        </CardList>
        </>
    );
};

export default Card;