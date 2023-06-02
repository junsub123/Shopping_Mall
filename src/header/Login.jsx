import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'



const StyledInput = styled.input`
    margin-bottom: 10px;
    width: 240px;
    height: 30px;
    font-size: 15px;
    outline: none;
`

const StyledDiv = styled.div`
    text-align: center;
`

const StyledSubmit = styled.input`
    width: 250px;
    height: 35px;
    background-color: gold;
    color: #3B1C1C;
    margin-bottom: 20px;
    border: 1px solid black
`

function Login({isLogin}) {

    const navigate = useNavigate();

    let [id, setId] = useState();
    let [pwd, setPwd] = useState();

    let [idMsg, setIdMsg] = useState();
    let [pwdMsg, setPwdMsg] = useState();


    const handleId = (event) => {
        setId(event.target.value)
        console.log(setId);
    }

    const handlePwd = (event) => {
        setPwd(event.target.value)
    }

    return (
        <StyledDiv>
            <h1>로그인</h1>
            <form>
                <label style={{textAlign: 'left', }}>아이디</label><br />
                <StyledInput className='id' id='id' onChange={handleId} /><br />

                <label>비밀번호</label><br />
                <StyledInput type="password" className='pwd' id='pwd' onChange={handlePwd} /><br />

                <div style={{ color: 'red', }}>
                    {idMsg}{pwdMsg}<br />
                </div>

                <StyledSubmit type="submit" value="로그인" style={{ marginTop: '10px', }}
                onClick={(e) => {
                    e.preventDefault();
                    if (!id) {
                        document.getElementById('id').focus();
                        setIdMsg("아이디를 입력해주세요.");
                        setPwdMsg("");
                    } else if(!pwd){
                        document.getElementById('pwd').focus();
                        setPwdMsg("비밀번호를 입력해주세요.");
                        setIdMsg("");
                    }else{
                        isLogin = true;
                        console.log(isLogin);
                        setPwdMsg("");
                        setIdMsg("");
                        alert(`${id}님 환영합니다 !`);
                        navigate('/');
                    }
                }} />
            </form>
        </StyledDiv>
    )
}

export default Login;