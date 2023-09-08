import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';


const StyledInput = styled.input`
    width: 240px;
    height: 30px;
    font-size: 15px;
    outline: none;
`

const StyledDiv = styled.div`
    margin-bottom: 20px;
    color: red;
    text-align: center;
`

const StyledLabel = styled.label`
    color: black;
`
const StyledSubmit = styled.input`
    width: 250px;
    height: 35px;
    background-color: gold;
    color: #3B1C1C;
    margin-bottom: 20px;
    border: 1px solid black
`



function Signup() {

    const navigate = useNavigate();

    // 이름, 이메일, 비밀번호, 비밀번호 재입력
    let [id, setId] = useState();
    let [pwd, setPwd] = useState();
    let [repwd, setRepwd] = useState();
    let [name, setName] = useState();

    // 오류메시지 상태저장
    let [idMsg, setIdMsg] = useState();
    let [pwdMsg, setPwdMsg] = useState();
    let [repwdMsg, setRepwdMsg] = useState();
    let [nameMsg, setNameMsg] = useState();

    const handleId = (event) => {
        setId(event.target.value)
        console.log(setId);
    }

    const handlePwd = (event) => {
        setPwd(event.target.value)
    }

    const handleRepwd = (event) => {
        setRepwd(event.target.value)
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    return (
        <div style={{  textAlign: 'center', }}>
            <h1>회원가입</h1>
            <form>

                <StyledDiv>
                    <StyledLabel>아이디</StyledLabel><br />
                    <StyledInput id="id" onChange={handleId} /><br />
                    {idMsg}<br />
                </StyledDiv>

                <StyledDiv>
                    <StyledLabel>비밀번호</StyledLabel><br />
                    <StyledInput id="pwd" type="password" onChange={handlePwd} /><br />
                    {pwdMsg}<br />
                </StyledDiv>

                <StyledDiv>
                    <StyledLabel>비밀번호 재확인</StyledLabel><br />
                    <StyledInput id="repwd" type="password" onChange={handleRepwd}/><br />
                    {repwdMsg}<br />
                </StyledDiv>

                <StyledDiv>
                    <StyledLabel>이름</StyledLabel><br />
                    <StyledInput id="name" onChange={handleName} /><br />
                    {nameMsg}<br />
                </StyledDiv>

                <StyledSubmit type="submit" value="가입하기"

                    onClick={(e) => {
                        e.preventDefault();
                        if (!id) {
                            document.getElementById('id').focus();
                            setIdMsg("필수 정보입니다.");
                        } else if (!pwd) {
                            document.getElementById('pwd').focus();
                            setPwdMsg("필수 정보입니다.");
                            setIdMsg("");
                        } else if (pwd !== repwd) {
                            document.getElementById('repwd').focus();
                            setRepwdMsg("비밀번호와 일치하지 않습니다.");
                            setPwdMsg("");
                        } else if (!name) {
                            document.getElementById('name').focus();
                            setNameMsg("필수 정보입니다.");
                            setRepwdMsg("");
                        }else{
                            alert('회원가입을 성공했습니다!');
                            navigate('/login');
                        }
                    }} />
            </form>
        </div>
    )
}

export default Signup;