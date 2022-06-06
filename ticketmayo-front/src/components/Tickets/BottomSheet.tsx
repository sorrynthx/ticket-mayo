
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sheet from "react-modal-sheet";
import styled from "styled-components";

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

const PayProcess = styled.div`
  margin-bottom: 10px;
  .multisteps-form__progress {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(0,1fr));
    .multisteps-form__progress-btn {
      transition-property: all;
      transition-duration: .15s;
      transition-timing-function: linear;
      transition-delay: 0s;
      position: relative;
      padding-top: 20px;
      color: #dee2e6;
      text-indent: -9999px;
      border: none;
      background-color: transparent;
      outline: none!important;
      cursor: default;
        &:before {
          position: absolute;
          top: 0;
          left: 50%;
          display: block;
          width: 13px;
          height: 13px;
          content: "";
          transform: translateX(-50%);
          transition: all .15s linear 0s,transform .15s cubic-bezier(.05,1.09,.16,1.4) 0s;
          border: 2px solid currentColor;
          border-radius: 50%;
          background-color: #fff;
          box-sizing: border-box;
          z-index: 3;
      }
    }
    .multisteps-form__progress-btn.js-active {
      color: #344767;
      text-indent: 0;
      &:before {
        transform: translateX(-50%) scale(1.2);
        background-color: currentColor;
      }
      &:nth-child(1):after {
        display: block;
        width: 0%;
        height: 2px;
      }
      &:after {
        position: absolute;
        top: 5px;
        left: calc(-50% - 13px / 2);
        transition-property: all;
        transition-duration: .15s;
        transition-timing-function: linear;
        transition-delay: 0s;
        display: block;
        width: 100%;
        height: 2px;
        content: "";
        background-color: currentColor;
        z-index: 1;
      }
    }
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

interface Idata {
  value: boolean;
  setOpen: Function;
  ticketId: Number; 
  ticketInfo: {
      id: number;
      title: string;
      open: string;
      openTime: string;
      playLoc: string;
      grade: string;
      img: string;
      price: number;
      cnt: number;
      payNumber: number;
      seatInfo: string;
      deliverFee: number;
  };
}



function BottomSheet(props: Idata) {
  

  const textInput = useRef<HTMLInputElement>(null);
  const ticketInfo = props.ticketInfo;
  
  function setOpen(isOpen: boolean) {
    props.setOpen(isOpen);
  }
  function copy() {
    const el = textInput.current;
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
      <Sheet isOpen={props.value} onClose={() => setOpen(false)} snapPoints={[0.95]}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <>
              <PayProcess>
                <div className="col-12 mx-auto mt-1 mb-1">
                  <div className="multisteps-form__progress">
                    <button className="multisteps-form__progress-btn js-active" type="button" title="계좌이체">
                      <span>1.계좌이체</span>
                    </button>
                    <button className="multisteps-form__progress-btn js-active" type="button" title="입금확인">
                      <span>2.입금확인</span>
                    </button>
                    <button className="multisteps-form__progress-btn js-active" type="button" title="티켓발송">
                      <span>3.확인연락</span>
                    </button>
                    <button className="multisteps-form__progress-btn js-active" type="button" title="티켓발송">
                      <span>4.티켓발송</span>
                    </button>
                  </div>
                </div>
              </PayProcess>

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
                        <div>{ticketInfo.grade} </div>
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
                  <br/><span style={{color: '#FFC2D1'}}>* 계좌 선택 시, 복사완료!</span>
                  <input type="text" value="카카오뱅크 333310000123456" ref={textInput} readOnly style={{ position: 'absolute', top: '-35px', left: 0 }} />
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
                  <small className="text-muted">1. 이름, 연락처를 입력하세요.</small><br/>
                  <small className="text-muted">2. 계좌이체 후 입금진행 버튼을 선택하세요.</small>
                </Col>
              </Row>
                
              </Container>

              <BtnArea className="d-flex flex-stack flex-wrap mt-4">
                <a onClick={() => setOpen(false)} className="btn my-1">취소</a>
                <a href="https://www.caci.or.kr/caci/main/contents.do?menuNo=200011" target="_blank" className="btn my-1">좌석정보</a>
                <a onClick={payConf} className="btn my-1">입금진행</a>
              </BtnArea>

            </>
          </Sheet.Content>
        </Sheet.Container >
        <Sheet.Backdrop />
      </Sheet>



    </>
  );
}

export default BottomSheet;