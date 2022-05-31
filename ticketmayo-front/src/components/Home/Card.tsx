import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { useEffect } from "react";

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

const PlayImage = styled.img`
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

const Badge = styled.span`
    display: inline-block;
    padding: 0.35em 0.65em;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    font-size: 0.7rem !important;
    font-weight: 100 !important;
    background-color: #FF8FAB;
`;

const Rating = styled.div`
    color: #FF8FAB;
    width: 100%;
    font-weight: 100;
`;

const CastingImage = styled.img`
    width: 50px;
`;
const CastingWrap = styled.ul`
    max-width: 405px;
    max-height: 110px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0;
    display: flex;
    &::-webkit-scrollbar {
        /* 세로 스크롤 넓이 */
        width: 8px;

        /* 가로 스크롤 높이 */
        height: 8px;

        border-radius: 6px;
        background: rgba(255, 194, 209, 0.2);
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(251, 111, 146, 0.3);
        border-radius: 6px;
    }
`;
const CastingImageWrap = styled.li`
    float: left;
    margin: 5px;
    max-width: 55px;
    text-align: center;
`;

const Badge_P = (text: any) => {
    return (
        <ProviderBadge>
            {text.provider.length != 0 ? (<Badge style={{backgroundColor: '#FF8FAB !important', marginRight: '0.25rem'}}>{text.provider}</Badge>) : null}
            <Badge style={{backgroundColor: '#FF8FAB !important'}}>{text.type}</Badge>
        </ProviderBadge>
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
                            <PlayImage src={require('../../assets/img/profile.png')} className="rounded-3" alt="post" />
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
        provider: string,
        link: string,
        cnt: number,
        type: string,
        casting: {
            castingImage: string,
            castingName: string
        }[]
        
    }
};

const Info = ({play}: IInfo) => {
    return (
        <a href={play.link} target="_blank">
            <PlayInfo className="card w-100 p-3 mb-3" key={play.id}>
                <PlayDescription className="card-body p-0">
                    <InnerWrap className="">
                        <ImageWrap className="p-1">
                            <PlayImage src={play.image !== '' ? play.image : require('../../assets/img/theater.jpg')} className="rounded-3" alt="post" />
                        </ImageWrap>

                        <div className="card-body p-0">
                            <PlayTitle>
                                {play.title}
                                <OpenDate>{play.date}</OpenDate>
                                <Rating><FontAwesomeIcon icon={faHeart} /> {play.cnt}</Rating>
                            </PlayTitle>
                        </div>
                    </InnerWrap>
                    <Badge_P provider={play.provider} type={play.type} />
                </PlayDescription>

                <CastingWrap>
                    {play.casting.map((cast, i) => (
                        <CastingImageWrap className="castingWrap" key={i}>
                            <CastingImage className="thumbnail rounded" src={cast.castingImage} />
                            <br/>
                            {cast.castingName}
                        </CastingImageWrap>
                    ))}
                </CastingWrap>

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
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
        type: "뮤지컬",
        casting: [
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/09/0400041209_29854_02111.gif", 
                "castingName": "이석훈"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/11/12/0400041112_27536_021.gif", 
                "castingName": "김성규"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/10/0400041210_30078_02919.gif", 
                "castingName": "신재범"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/11/0400040811_11862_02831.gif", 
                "castingName": "최재림"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/09/0400041209_29854_02111.gif", 
                "castingName": "이석훈"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/11/12/0400041112_27536_021.gif", 
                "castingName": "김성규"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/10/0400041210_30078_02919.gif", 
                "castingName": "신재범"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/11/0400040811_11862_02831.gif", 
                "castingName": "최재림"
            }
        ]
    },
    {
        id: 1,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: '',
        provider: "예스24",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
        type: "뮤지컬",
        casting: [
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/09/0400041209_29854_02111.gif", 
                "castingName": "이석훈"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/11/12/0400041112_27536_021.gif", 
                "castingName": "김성규"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/10/0400041210_30078_02919.gif", 
                "castingName": "신재범"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/11/0400040811_11862_02831.gif", 
                "castingName": "최재림"
            }
        ]
    },
    {
        id: 2,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        provider: "",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
        type: "뮤지컬",
        casting: [
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/09/0400041209_29854_02111.gif", 
                "castingName": "이석훈"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/11/12/0400041112_27536_021.gif", 
                "castingName": "김성규"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/10/0400041210_30078_02919.gif", 
                "castingName": "신재범"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/11/0400040811_11862_02831.gif", 
                "castingName": "최재림"
            }
        ]
    },
    {
        id: 3,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
        type: "뮤지컬",
        casting: [
           
        ]
    },
    {
        id: 4,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
        type: "뮤지컬",
        casting: [
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/09/0400041209_29854_02111.gif", 
                "castingName": "이석훈"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/11/12/0400041112_27536_021.gif", 
                "castingName": "김성규"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/10/0400041210_30078_02919.gif", 
                "castingName": "신재범"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/11/0400040811_11862_02831.gif", 
                "castingName": "최재림"
            }
        ]
    },
    {
        id: 5,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
        type: "뮤지컬",
        casting: [
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/09/0400041209_29854_02111.gif", 
                "castingName": "이석훈"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/11/12/0400041112_27536_021.gif", 
                "castingName": "김성규"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/10/0400041210_30078_02919.gif", 
                "castingName": "신재범"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/11/0400040811_11862_02831.gif", 
                "castingName": "최재림"
            }
        ]
    },
    {
        id: 6,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        provider: "예스24",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
        type: "뮤지컬",
        casting: [
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/09/0400041209_29854_02111.gif", 
                "castingName": "이석훈"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/11/12/0400041112_27536_021.gif", 
                "castingName": "김성규"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/10/0400041210_30078_02919.gif", 
                "castingName": "신재범"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/11/0400040811_11862_02831.gif", 
                "castingName": "최재림"
            }
        ]
    },
    {
        id: 7,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        provider: "인터파크",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
        type: "뮤지컬",
        casting: [
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/09/0400041209_29854_02111.gif", 
                "castingName": "이석훈"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/11/12/0400041112_27536_021.gif", 
                "castingName": "김성규"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/10/0400041210_30078_02919.gif", 
                "castingName": "신재범"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/11/0400040811_11862_02831.gif", 
                "castingName": "최재림"
            }
        ]
    },
    {
        id: 8,
        title: '뮤지컬 〈웃는 남자〉 2차 티켓오픈 안내',
        date: '22.05.17(화) 14:00',
        image: 'http://ticketimage.interpark.com/Play/image/large/22/22004761_p.gif',
        provider: "예스24",
        link: "http://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=1&stext=&no=43018&groupno=43018&seq=0&KindOfGoods=TICKET&Genre=1&sort=opendate",
        cnt: 324,
        type: "뮤지컬",
        casting: [
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/09/0400041209_29854_02111.gif", 
                "castingName": "이석훈"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/11/12/0400041112_27536_021.gif", 
                "castingName": "김성규"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/12/10/0400041210_30078_02919.gif", 
                "castingName": "신재범"
            },
            {
                "castingImage": "http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/08/11/0400040811_11862_02831.gif", 
                "castingName": "최재림"
            }
        ]
    },
];

function Card () {
    
    useEffect(() => {
        return () => {
            (async() => {
              const response = await fetch("http://localhost:5000/api_v1/scraping1");
              const json = await response.json();
              console.log(json);
            })();
        }
    }, [])

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