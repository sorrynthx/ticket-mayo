import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Idata } from "./Type";

const PlayTitle = styled.h1`
  font-size: 1.4rem;
  line-height: 1.375;
  .playLoc {
    font-size: 1rem;
  }
  .payNumber {
    font-size: 0.8rem;
  }
`;

const TableWrap = styled.div`
  .table {
    width: 95%;
    margin: 0 auto;
  }
`; 

const BtnArea = styled.div`
  justify-content: space-around;
  .btn {
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
`;

function Payment() {
    
    const copyInput = useRef<HTMLInputElement>(null);
    const {ticketInfo} = useLocation().state as Idata;
    console.log(ticketInfo);
    function copy() {  
        const el = copyInput.current;
        el?.select();
        document.execCommand("copy");
        alert('계좌번호 복사완료!');
      }
      function payConf() {
        const conf = window.confirm('계좌이체 완료했나요 ?');
        if (conf) alert('yes');
        else alert('취소하셨습니다.');
      }
    
    return (
        <>
            
            <PlayTitle className="mt-4 mb-4 text-center">
                {ticketInfo.title}
                <p className="playLoc text-muted" >{ticketInfo.playLoc}</p>
                <p className="payNumber mt-1">{ticketInfo.payNumber}</p>
              </PlayTitle>

              <TableWrap className="border-bottom mt-2">
                <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                  <thead>
                    <tr className="border-bottom fs-6 fw-bolder text-muted">
                      <th className="min-w-175px pb-2">좌석정보</th>
                      <th className="min-w-70px text-end pb-2">공연일자</th>
                      <th className="min-w-100px text-end pb-2">가격</th>
                    </tr>
                  </thead>
                  <tbody className="fw-bold text-gray-600">

                    <tr>

                      <td className="text-end">
                        <div className="fs-7 text-muted">
                          {ticketInfo.seatInfo}
                        </div>
                        <div>
                            {ticketInfo.grade} &nbsp;
                            <a href="https://www.caci.or.kr/caci/main/contents.do?menuNo=200011" target="_blank" className="fw-light">[좌석정보]</a>
                        </div>
                      </td>

                      <td className="text-end">
                        <div className="fs-7 text-muted">
                          {ticketInfo.open}
                        </div>
                        <div>{ticketInfo.openTime}</div>
                      </td>
                      <td className="text-end">{ticketInfo.price}원</td>

                    </tr>

                    <tr>
                      <td colSpan={2} className="text-end">수량</td>
                      <td className="text-end">{ticketInfo.cnt}</td>
                    </tr>

                    <tr>
                      <td colSpan={2} className="text-end">배송비</td>
                      <td className="text-end">{ticketInfo.deliverFee}원</td>
                    </tr>

                    <tr>
                      <td colSpan={2} className="fs-3 text-dark fw-bolder text-end">총 입금액</td>
                      <td className="text-dark fs-3 fw-boldest text-end">
                        {ticketInfo.cnt * ticketInfo.price + ticketInfo.deliverFee}원
                      </td>
                    </tr>

                  </tbody>
                </table>
              </TableWrap>


              <div className="fs-4 mt-4 mb-4 text-center">계좌이체:
                <span className="fs-6"> 티켓마요(김*윤)</span>
                <br />
                <span className="text-muted fs-6" onClick={copy}>
                  <a onClick={() => null} style={{ cursor: 'pointer' }}>카카오뱅크 333310000123456</a>
                  <br/><span style={{color: '#f8003e'}}>* 계좌 선택 시, 복사완료!</span>
                  <input type="text" value="카카오뱅크 333310000123456" ref={copyInput} readOnly style={{ position: 'absolute', top: '-35px', left: 0 }} />
                </span>
              </div>

              <Container>
                <Row xs="auto" className="mt-3">
                  <Col xs={6}>
                    <label>입금하는 사람</label>
                    <input
                      className="multisteps-form__input form-control"
                      type="text"
                      placeholder="홍길동"/>
                  </Col>
                  <Col xs={6}>
                    <label>연락받을 번호</label>
                    <input
                      className="multisteps-form__input form-control"
                      type="text"
                      placeholder="010-1234-1234"/>
                  </Col>
                </Row>
              </Container>

              <Container className="mt-4 mb-4 text-center">
              <Row>
                <Col xs={12}>
                  <small className="text-muted">1. 이름과 연락 받을 연락처를 입력하세요.</small><br/>
                  <small className="text-muted">2. 계좌이체 후 입금완료 버튼을 선택하세요.</small>
                </Col>
              </Row>
                
              </Container>

              <BtnArea className="d-flex flex-stack flex-wrap mt-1">
                    <Link to="/tickets" className="btn my-1">거래취소</Link>                   
                    <a onClick={payConf} className="btn my-1">입금완료</a>
                  </BtnArea>
             
        </>
    );
}

export default Payment;