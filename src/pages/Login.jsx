import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Button from './../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from '../assets/header.png';
import { UserContext } from '../App';

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

const SignInput = styled.input`
  height: 45px;
  width: 350px;
  //margin-bottom: 1vh;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #cecece;
`;

const Info = styled.div`
  font-weight: 500;
  font-size: 12px;
  align-items: center;
  text-align: center;
  margin-left: 20vw;
  float: left;
`;

const SetPwd = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #ffcc70;
  margin-left: 2vw;
  float: right;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

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

  const goToPwdResetPage = () => {
    navigate('/'); //다음 페이지
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isEmail) {
      return alert('이메일의 형식이 올바르지 않습니다.');
    } else if (!isPassword) {
      return alert('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.');
    }
 
    let UserInfo = {
      email: email,
      password: password,
    };

    console.log('UserInfo: ', UserInfo);

    axios
      .post('http://localhost:8000/account/auth/', UserInfo)
      .then((res) => {
        console.log(res);

        if (res.data.user.email === undefined) {
          console.log('=================', res.data.message);
          alert('입력한 이메일이 일치하지 않습니다.');
        } else if (res.data.user.email === null) {
          console.log(
            '=================',
            '입력하신 비밀번호가 일치하지 않습니다.'
          );
          alert('입력하신 비밀번호가 일치하지 않습니다.');
        } else if (res.data.user.email === UserInfo.email) {
          console.log('=================', '로그인 성공');
          setUser({userId:res.data.user.id, userName:res.data.user.username});

        }
        console.log(UserInfo);
        navigate('/send'); //메인 페이지로 이동
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  return (
    <Wrapper>
      <Logo src={logo} />
      <Txt>
        안녕하세요! <br /> 가입한 이메일로 로그인해 주세요.
      </Txt>
      <SignInput
        id="email"
        name="email"
        value={email}
        onChange={onChangeEmail}
        type="email"
        placeholder="   이메일 입력"
      />
      <SignInput
        id="password"
        name="password"
        value={password}
        onChange={onChangePassword}
        placeholder="   비밀번호 입력"
      />
      <Button title="로그인" onClick={onSubmit} />
      <Info>
        비밀번호를 잊어버리셨나요?{' '}
        <SetPwd onClick={goToPwdResetPage}>비밀번호 재설정</SetPwd>
      </Info>
    </Wrapper>
  );
};

export default Login;
