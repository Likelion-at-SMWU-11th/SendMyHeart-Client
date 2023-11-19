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

const Profile = () => {
  const [username, setUserName] = useState('');
  const [isName, setIsName] = useState(false);
  const navigate = useNavigate();

  const onChangeName = (event) => {
    const currentName = event.target.value;
    setUserName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setIsName(false);
    } else {
      setIsName(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isName) {
      return alert('닉네임은 2글자 이상 5글자 이하로 입력해주세요!.');
    }
    navigate('/'); //프로필 설정 페이지로 이동
  };

  return (
    <Wrapper>
      <Logo src={logo} />
      <Txt>프로필을 설정해주세요.</Txt>
      <SignTxt>닉네임</SignTxt>
      <SignInput
        id="username"
        name="username"
        value={username}
        onChange={onChangeName}
        type="text"
        placeholder="   닉네임을 입력해주세요."
      />
      <Button title="다음으로" onClick={onSubmit} />
    </Wrapper>
  );
};

export default Profile;
