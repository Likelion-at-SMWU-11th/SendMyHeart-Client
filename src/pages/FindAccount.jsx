import React, { useState } from 'react';
import { TopBar } from '../components';
import styled from 'styled-components';
import Button from './../components/Button';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

const Wrapper = styled.div`
  background-color: #efefef;
  width: 100vw;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  padding-bottom: 200px;
`;

const Menu = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Txt = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 5vh 5vw 3vh;
  text-align: left;
`;

const SignInput = styled.input`
  height: 45px;
  width: 350px;
  //margin-bottom: 1vh;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #cecece;
`;

const FindAccount = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const [isEmail, setIsEmail] = useState(false);

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

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isEmail) {
      return alert('이메일의 형식이 올바르지 않습니다.');
    }
    navigate('/'); //메인 페이지로 이동
  };

  return (
    <Wrapper>
      <TopBar>
        <Menu>이메일로 계정 찾기</Menu>
      </TopBar>
      <Txt>
        회원가입 시 등록한
        <br />
        이메일 주소를 입력해 주세요.
      </Txt>
      <SignInput
        id="email"
        name="email"
        value={email}
        onChange={onChangeEmail}
        type="email"
        placeholder="   예) sendmyheart@gmail.com"
      />
      <Button title="비밀번호 재설정" onClick={onSubmit} />
    </Wrapper>
  );
};

export default FindAccount;
