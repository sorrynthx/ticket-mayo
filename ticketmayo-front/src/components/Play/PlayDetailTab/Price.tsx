import { Helmet } from "react-helmet-async";
import { useLocation, useOutletContext } from "react-router-dom";
import styled from "styled-components";

const PriceList = styled.ul`
    padding-bottom: 100px;
`;

const PriceInfo = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 18px 0;
`;

const PriceTitle = styled.h4`
    color: #000;
    font-size: 20px;
    position: relative;
    display: flex;
    align-items: flex-end;
    line-height: 20px;
    margin-bottom: 0;
    width: 100%;
    text-transform: capitalize;
    span {
        webkit-box-flex: 0;
        flex: 0 0 auto;
        margin-right: 15px;
        position: relative;
    }
    &::after {
        content: "";
        height: 1px;
        width: 100%;
        display: block;
        border-bottom: 1px dashed rgba(0,0,0,.4);
    }
`;

const PriceAmount = styled.p`
    color: #ffc7d5;
    margin-bottom: 0;
    margin-left: 15px;
    line-height: 20px;
    font-weight: 700;
    font-size: 24px;
    white-space: nowrap;
`;

const DiscountBtn = styled.a`
    background-color: #FB6F92;
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

interface IPlayId {
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
        shop: string,
    }
}  
  
function Price() {

    const {playId} = useOutletContext<IPlayId>();
    const {state} = useLocation() as RouteState;         

    return (
        <>
            <Helmet>
                <title>티켓마요-가격</title>
            </Helmet>   
            <PriceList>
                {state.price.map((value, index) => {

                    let [a, b] = value.split(" ");
                    return (
                        <PriceInfo key={index} className="mt-2 mb-2">
                            <PriceTitle><span>{ a }</span></PriceTitle>
                            <PriceAmount>{ b }</PriceAmount>
                        </PriceInfo>
                    )
                })}
                <DiscountBtn href={state.discount} target="_blank" className="btn btnhover">할인정보</DiscountBtn>
            </PriceList>
        </>
    );
};

export default Price;