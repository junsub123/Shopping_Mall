import React from "react";
import styled from 'styled-components'
import { RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill } from 'react-icons/ri';

const StyledSpan = styled.span`
    font-size: 15px;
    cursor: pointer;
`

const StyledSpan2 = styled.span`
    font-size: 13px;
    color: grey;
`

const StyledButton = styled.button`
    text-align: center;
    width: 100px;
    height: 40px;
    background-color: white;
    color: #3B1C1C;
    margin-bottom: 15px;
    border: 0.2px solid grey;
    cursor: pointer;
`

const StyledP = styled.p`
    text-align: center;
    font-size: 12px;
    color: rgb(153, 153, 153);
`

function Footer() {

    const style = {
        marginTop:'50px',
        border: '1px solid rgb(247, 247, 247)',
        height: '250px',
    }

    return(
        <footer style={style}>
            <div style={{
                margin: '23px 18% 0 20%',
                backgroundColor: 'white',
                display: 'flex',
            }}>
                <div style={{
                marginRight: '100px',
                }}>
                    <StyledSpan>숍핑몰 고객센터</StyledSpan>
                    <h2>8245-8245<StyledSpan> 공휴일 제외 오전 10시 - 오후 6시</StyledSpan></h2><br />
                    <StyledButton>카카오톡 문의</StyledButton><StyledSpan2> 공휴일 제외 오전 10시 - 오후 6시</StyledSpan2><br />
                    <StyledButton>1:1 문의</StyledButton><StyledSpan2> 고객센터 운영시간에 순차적으로 답변드리겠습니다.</StyledSpan2>
                </div>
                <div>
                    <StyledSpan>숍핑몰소개</StyledSpan>&nbsp;&nbsp;&nbsp;&nbsp;
                    <StyledSpan>이용약관</StyledSpan>&nbsp;&nbsp;&nbsp;&nbsp;
                    <StyledSpan>개인정보처리방침</StyledSpan>&nbsp;&nbsp;&nbsp;&nbsp;
                    <StyledSpan>이용안내</StyledSpan><br /><br />

                    <StyledSpan2> 
                    법인명 : 숍핑몰 | 사업자등록번호 : 123-45-6789<br />
                    통신판매업 : 제 2023-서울구의-00001 호 | 개인정보보호책임자 : 임준섭<br />
                    주소 : 서울특별시 해운대구 와우산로 1234, 125층 | 대표이사 : 임준섭<br />
                    입점문의 : 8245-8245 | 채용문의 : 8245-8245<br />
                    팩스 : 회사에서 안키움
                    </StyledSpan2><br /><br />

                    <RiFacebookBoxFill size="40" title="페이스북" color="#3b5998" style={{cursor: 'pointer'}}/>&nbsp;&nbsp;
                    <RiInstagramFill size="40" title="인스타그램" color="#E4405F" style={{cursor: 'pointer'}}/>&nbsp;&nbsp;
                    <RiYoutubeFill size="40" title="유튜브" color="#c4302b" style={{cursor: 'pointer'}}/>&nbsp;&nbsp;
                </div>
            </div>
            <div style={{ 
                height: '80px',
                width: '100%',
                marginTop: '11px',
                backgroundColor: 'rgb(247, 247, 247)',
                }}><br />
                <StyledP>© SHOPPING MALL. ALL RIGHTS RESERVED</StyledP>
            </div>
        </footer>
    )
}

export default Footer;