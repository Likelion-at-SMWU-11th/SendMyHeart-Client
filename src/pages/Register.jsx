import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from '../assets/header.png';
import Profile from './Profile';

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

const CheckRadioTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #3e3e3e;
  text-align: left;
  padding: 2vh 6vw 1vh;
`;

const CheckRadio = styled.div`
  font-size: 14px;
  color: #3e3e3e;
  text-align: left;
  padding: 1vh 6vw 0vh;
`;

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  /* 유효성 검사 */
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPwd, setIsConfirmPwd] = useState(false);
  const [isContact, setIsContact] = useState(false);

  /* 약관 체크 박스 */
  const [agreedAll, setAgreedAll] = useState(false);
  const [agreements, setAgreements] = useState({
    ageAgreed: false,
    serviceAgreed: false,
    personalInfoAgreed: false,
  });

  const handleAgreement = (event) => {
    const { name, checked } = event.target;
    setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
    const checkedAll = Object.values({ ...agreements, [name]: checked }).every(
      (value) => value === true
    );
    setAgreedAll(checkedAll);
  };

  const handleAllAgreement = (event) => {
    const { checked } = event.target;
    setAgreements((prevAgreements) =>
      Object.keys(prevAgreements).reduce(
        (newAgreements, agreementKey) => ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {}
      )
    );
    setAgreedAll(checked);
  };

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

  const onChangePassword2 = (event) => {
    const currentPasswordConfirm = event.target.value;
    setPassword2(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setIsConfirmPwd(false);
    } else {
      setIsConfirmPwd(true);
    }
  };

  const onChangeContact = (event) => {
    const currentContact = event.target.value;
    setContact(currentContact);
    const contactRegExp =
      /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    if (!contactRegExp.test(currentContact)) {
      setIsContact(false);
    } else {
      setIsContact(true);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isEmail) {
      return alert('이메일의 형식이 올바르지 않습니다.');
    } else if (!isPassword) {
      return alert('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.');
    } else if (!isConfirmPwd) {
      return alert('비밀번호와 비밀번호 확인이 같지 않습니다.');
    } else if (!isContact) {
      return alert('연락처를 확인해 주세요.');
    } else if (!agreedAll) {
      return alert('약관 동의 후 가입 가능합니다.');
    }

    let UserInfo = {
      email: email,
      password: password2,
      phone: contact,
    };

    console.log(UserInfo);
    console.log(typeof UserInfo.email);

    /*     axios
      .post('http://127.0.0.1:8000/account/signup/', UserInfo)
      .then((response) => {
        console.log(response);
        alert('회원가입 성공!');
        navigate('/profile', { state: { userInfo: UserInfo } });
      })
      .catch((err) => {
        if (!err.response) {
          console.log(err);
        } else {
          console.log(err);
          console.log(err.response.data);
        }
      }); */
    navigate('/profile', { state: { userInfo: UserInfo } });
  };

  return (
    <Wrapper>
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
            onChange={onChangeEmail}
            type="email"
            placeholder="   예) sendmyheart@gmail.com"
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
          <SignTxt>연락처</SignTxt>``
          <SignInput
            id="contact"
            name="contact"
            value={contact}
            onChange={onChangeContact}
            placeholder="   '-'를 제외한 숫자만 입력해 주세요."
          />
          <CheckRadioTitle>
            <input
              type="checkbox"
              name="agreementAll"
              checked={agreedAll}
              onChange={handleAllAgreement}
            />
            약관 전체 동의
          </CheckRadioTitle>
          <hr />
          <CheckRadio>
            <input
              type="checkbox"
              name="ageAgreed"
              checked={agreements.ageAgreed}
              onChange={handleAgreement}
              required
            />
            (필수) 본인은 만 14세 이상입니다.
          </CheckRadio>
          <CheckRadio>
            <input
              type="checkbox"
              name="serviceAgreed"
              checked={agreements.serviceAgreed}
              onChange={handleAgreement}
              required
            />
            (필수) 서비스 이용약관 동의
          </CheckRadio>
          <CheckRadio>
            <input
              type="checkbox"
              name="personalInfoAgreed"
              checked={agreements.personalInfoAgreed}
              onChange={handleAgreement}
              required
            />
            (필수) 개인정보 수집 및 이용 동의
          </CheckRadio>
          <Button title="동의하고 가입하기" onClick={onSubmit} />
        </div>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
