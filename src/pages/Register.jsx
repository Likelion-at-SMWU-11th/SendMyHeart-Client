import React, { useState } from 'react';
import styled from 'styled-components';
//import { useNavigate } from 'react-router-dom';
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
  font-weight: 500;
  padding: 5vh 5vw 3vh;
  text-align: left;
`;

const SignTxt = styled.div`
  color: #828282;
  font-size: 15px;
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

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [contact, setContact] = useState('');

  const onChangeEmail = (event) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
  };

  const onChangePassword = (event) => {
    const currentPassword = event.target.value;
    setPassword(currentPassword);
  };

  const onChangePassword2 = (event) => {
    const currentPasswordConfirm = event.target.value;
    setPassword2(currentPasswordConfirm);
  };

  const onChangeContact = (event) => {
    const currentContact = event.target.value;
    setContact(currentContact);
  };

  return (
    <Wrapper>
      <div>
        <form>
          <Logo src={logo} />
          <Txt>
            안녕하세요! <br /> 이메일로 회원가입해 주세요.
          </Txt>
          <div>
            <SignTxt>이메일</SignTxt>
            <SignInput
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              type="email"
              placeholder="   이메일"
            />
            <SignTxt>비밀번호</SignTxt>
            <SignInput
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="   영문/숫자/특수문자 혼합 8~20자"
            />
            <SignInput
              id="password2"
              name="password2"
              value={password2}
              onChange={onChangePassword2}
              placeholder="   비밀번호를 한 번 더 입력해 주세요."
            />
            <SignTxt>연락처</SignTxt>
            <SignInput
              id="contact"
              name="contact"
              value={contact}
              onChange={onChangeContact}
              placeholder="   '-'를 제외한 숫자만 입력해 주세요."
            />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
