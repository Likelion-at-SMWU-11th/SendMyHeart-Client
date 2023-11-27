import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './../components/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import logo from '../assets/logo.svg';
import profile from '../assets/defaultprofile.png';
import edit from '../assets/profileedit.png';
import { TopBar } from '../components';

const Wrapper = styled.div`
  background-color: #efefef;
  // width: 100vw;
  align-items: center;
  text-align: center;
  // overflow-x: hidden;
  // padding-bottom: 200px;
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
  width: 100%;
`;

const DefaultProfile = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 70%;
`;

const EditProfile = styled.div`
  position: absolute;
  // top: 26vh;
  // left: 57vw;
  top: 10.1rem;
  left:12.5rem;
`;

const SignTxt = styled.div`
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  padding: 1vh 5vw 1vh;
  text-align: left;
  width: 100%;
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
  const location = useLocation();
  const userInfo = location.state.userInfo;

  /*   프로필 사진 구현 */
  const [uploadedImage, setUploadedImage] = useState(null);

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(file);
  };

  const onChangeName = (event) => {
    const currentName = event.target.value;
    setUserName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setIsName(false);
    } else {
      setIsName(true);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isName) {
      return alert('닉네임은 2글자 이상 5글자 이하로 입력해주세요!.');
    } else if (!uploadedImage) {
      return alert('프로필을 설정해 주세요.');
    }

    const formData = new FormData();

    let UserInfo = {
      email: userInfo.email,
      password: userInfo.password,
      phone: userInfo.phone,
    };

    formData.append('profile_image', uploadedImage);
    formData.append('username', username);

    // UserInfo의 각 필드를 formData에 추가
    formData.append('email', UserInfo.email);
    formData.append('password', UserInfo.password);
    formData.append('phone', UserInfo.phone);

    console.log('===========타입 확인========');
    console.log(typeof userInfo.email);
    console.log(typeof uploadedImage);
    console.log(typeof username);

    console.log('FormData:', formData);

    console.log('===========키 값========');
    for (let key of formData.keys()) {
      console.log(key);
    }

    console.log('===========Value 값========');
    for (let value of formData.values()) {
      console.log(value);
    }

    /*     let UserInfo = {
      ...userInfo, //기존 userInfo 값 복사
      username: username,
      profile_image: uploadedImage,
    }; 

    console.log(UserInfo);*/

    /*     axios
      .post('http://localhost:8000/account/signup/', UserInfo)
      .then((response) => {
        console.log(response);
        alert('회원가입 성공!');
        navigate('/login');
        console.log(UserInfo);
      })
      .catch((err) => {
        if (!err.response) {
          console.log(err);
          console.log(UserInfo);
        } else {
          console.log(err);
          console.log(err.response.data);
          console.log(UserInfo);
        }
      }); */
    try {
      const response = await axios.post(
        'http://localhost:8000/account/signup/',
        formData
      );

      console.log(response);
      alert('회원가입 성공!');
      navigate('/login');
    } catch (err) {
      if (!err.response) {
        console.log('에러1');
        console.log(err);
        console.log(err.response.data);
        console.log('폼데이터');
        console.log(formData);
      } else {
        console.log('에러2');
        console.log(err);
        console.log(err.response.data);
        console.log(formData);
      }
    }
  };

  return (
    <Wrapper className='container'>
      {/* <Logo src={logo} /> */}
      <TopBar>
        <img src={logo}/>
      </TopBar>
      <div className='content-div' style={{justifyContent:'flex-start', position:'relative'}}>
        <Txt>프로필을 설정해주세요.</Txt>
        {uploadedImage ? (
          <DefaultProfile src={URL.createObjectURL(uploadedImage)} />
        ) : (
          <DefaultProfile src={profile} alt="프로필 없을 때"></DefaultProfile>
        )}
        <EditProfile>
          <label htmlFor="file">
            <img src={edit} style={{ height: '25px', width: '25px' }} />
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={onChangeImage}
            style={{ display: 'none' }}
          />
        </EditProfile>
        
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
      </div>
    </Wrapper>
  );
};

export default Profile;
