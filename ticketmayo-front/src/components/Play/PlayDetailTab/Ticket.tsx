import { Helmet } from "react-helmet-async";
import styled from "styled-components";


const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    font-weight: 400;
`;

const PriceList = styled.ul`
    padding-bottom: 100px;
`;



const BtnArea = styled.div`
    .avaliable {
        background-color: #FB6F92 !important;
    }
    .unavaliable {
        background-color: #999;
    }
`;

const PurchaseBtn = styled.a`
    color: #fff;
    padding: 12px 25px;
    display: block;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border: 0 solid transparent;
    line-height: 1.42857;
    border-radius: 6px;
    font-weight: 200;
    text-align: center;
    white-space: nowrap;
`;


function Ticket() {
    return (
        <>   
            
            <Helmet>
                <title>티켓마요-양도티켓</title>
            </Helmet>    
            
            <Header>부득이한 사정으로 양도된 티켓을 판매합니다.</Header>

            <div className="profile-orders__item" style={{border: '1px solid #eee', marginBottom: '10px'}}>
                <div className="profile-orders__row" 
                    style={
                        {
                            padding: '15px 0', 
                            flexDirection: 'column',
                            transition: 'all .3s linear', 
                            backgroundColor: '#fff',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between'
                            
                        }
                    }
                >
                    <div className="profile-orders__col" style={{width: '100%', position: 'relative', textAlign: 'left', padding: '5px 15px'}}>
                        <span className="profile-orders__col-mob" style={{display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', margin: '5px 0'}}>공연 날짜</span>
                        <span className="profile-orders__item-date" style={{fontSize: '14px', lineHeight: '120%', color:'#999'}}>2022-05-30 19:30</span>
                    </div>
                    <div className="profile-orders__col" style={{width: '100%', position: 'relative', textAlign: 'left', padding: '5px 15px'}}>
                    <span className="profile-orders__col-mob" style={{display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', margin: '5px 0'}}>공연 장소</span>
                        <span className="profile-orders__item-addr" style={{fontSize: '14px', lineHeight: '120%', color:'#999'}}>충무아트센터 대극장</span>
                    </div>
                    <div className="profile-orders__col" style={{width: '100%', position: 'relative', textAlign: 'left', padding: '5px 15px'}}>
                    <span className="profile-orders__col-mob" style={{display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', margin: '5px 0'}}>양도 가격</span>
                    <span className="profile-orders__item-addr" style={{fontSize: '14px', lineHeight: '120%', color:'#999'}}>VIP석 200,000원</span>
                    </div>
                    <div className="profile-orders__col" style={{width: '100%', position: 'relative', textAlign: 'left', padding: '5px 15px'}}>
                        <span className="profile-orders__col-mob" style={{display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', margin: '5px 0'}}>상태</span>
                        <span className="profile-orders__col-onway" style={{fontSize: '12px', lineHeight: '170%', color:'#d05278'}}>판매완료</span>
                        {/* <a className="profile-orders__col-btn"
                            style={{
                                right: '5px', width: '65px', height: '40px', borderRadius: '10%', background: '#999', border: '1px solid #eee', lineHeight: '40px', top: '45%',
                                textAlign: 'center', fontSize: '14px', fontWeight: '700', position: 'absolute', alignSelf: 'flex-end', zIndex: '1', transition: 'all .3s linear'
                        }}></a> */}
                    </div>
                </div>
                <BtnArea>
                    <PurchaseBtn onClick={e => e.preventDefault}  target="_blank" className="btn unavaliable">구매하기</PurchaseBtn>
                </BtnArea>
                
            </div>
            
            <div className="profile-orders__item" style={{border: '1px solid #eee', marginBottom: '100px'}}>
                <div className="profile-orders__row" 
                    style={
                        {
                            padding: '15px 0', 
                            flexDirection: 'column',
                            transition: 'all .3s linear', 
                            backgroundColor: '#fff',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between'
                            
                        }
                    }
                >
                    <div className="profile-orders__col" style={{width: '100%', position: 'relative', textAlign: 'left', padding: '5px 15px'}}>
                        <span className="profile-orders__col-mob" style={{display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', margin: '5px 0'}}>공연 날짜</span>
                        <span className="profile-orders__item-date" style={{fontSize: '14px', lineHeight: '120%', color:'#999'}}>2022-05-30 19:30</span>
                    </div>
                    <div className="profile-orders__col" style={{width: '100%', position: 'relative', textAlign: 'left', padding: '5px 15px'}}>
                    <span className="profile-orders__col-mob" style={{display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', margin: '5px 0'}}>공연 장소</span>
                        <span className="profile-orders__item-addr" style={{fontSize: '14px', lineHeight: '120%', color:'#999'}}>충무아트센터 대극장</span>
                    </div>
                    <div className="profile-orders__col" style={{width: '100%', position: 'relative', textAlign: 'left', padding: '5px 15px'}}>
                    <span className="profile-orders__col-mob" style={{display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', margin: '5px 0'}}>양도 가격</span>
                    <span className="profile-orders__item-addr" style={{fontSize: '14px', lineHeight: '120%', color:'#999'}}>VIP석 200,000원</span>
                    </div>
                    <div className="profile-orders__col" style={{width: '100%', position: 'relative', textAlign: 'left', padding: '5px 15px'}}>
                        <span className="profile-orders__col-mob" style={{display: 'block', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', margin: '5px 0'}}>상태</span>
                        <span className="profile-orders__col-onway" style={{fontSize: '12px', lineHeight: '170%', color:'#12a33b'}}>판매중 (1)</span>
                    </div>
                </div>
                <BtnArea>
                    <PurchaseBtn onClick={e => e.preventDefault}  target="_blank" className="btn avaliable">구매하기</PurchaseBtn>
                </BtnArea>
            </div>

        </>
    );
};

export default Ticket;