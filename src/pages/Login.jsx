import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './../components/Button';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

import logo from '../assets/header.png';

const Wrapper = styled.div`
  background-color: #efefef;
  width: 100vw;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  padding-bottom: 200px;
`;

const Logo = styled.img`
  width: 390px;
  height: 60px;
`;

const Txt = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 5vh 5vw 3vh;
  text-align: left;
`;

const SignTxt = styled.div`
  color: #828282;
  font-size: 15px;
  font-weight: 600;
  padding: 1vh 5vw 1vh;
  text-align: left;
`;

const SignInput = styled.input`
  height: 45px;
  width: 350px;
  margin-bottom: 9.52px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #828282; //border 색상 아래만 적용 안 됨
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  /* 유효성 검사 */
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const onChangeEmail = (event) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(currentEmail)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onChangePassword = (event) => {
    const currentPassword = event.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isEmail) {
      return alert('이메일의 형식이 올바르지 않습니다.');
    } else if (!isPassword) {
      return alert('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.');
    }
    navigate('/'); //메인 페이지로 이동
  };

  return (
    <Wrapper>
      <Logo src={logo} />
      <Txt>
        안녕하세요! <br /> 가입한 이메일로 로그인해 주세요.
      </Txt>
      <div>
        <SignTxt>이메일</SignTxt>
        <SignInput
          id="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          type="email"
          placeholder="   이메일 입력"
        />
        <SignTxt>비밀번호</SignTxt>
        <SignInput
          id="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          placeholder="   비밀번호 입력"
        />
        <Button title="로그인" onClick={onSubmit} />
      </div>
    </Wrapper>
  );
};

export default Login;
