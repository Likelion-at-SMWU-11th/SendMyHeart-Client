import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { BottomNav, TopBar } from '../components';
import logo from '../assets/logo.svg';
import defaultImg from '../assets/profile_default.svg';
import addBtn from '../assets/plus.svg';
import removeBtn from '../assets/minus.svg';

const CreateFriend = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [name, setName] = useState('');
  const [event, setEvent] = useState([]);

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfileImg(imageUrl);
  };

  const onChange = useCallback((e) => {
    setName(e.target.value);
    console.log(name);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // if (name === "") {
    //   return
    // }

    console.log(name);
  };

  return (
    <Container className="container">
      <TopBar>
        <img src={logo} />
        <form onSubmit={onSubmit}>
          <p>완료</p>
        </form>
      </TopBar>
      <div className="wrapper">
        <h2>나의 안부친구를 만들어주세요.</h2>
        <InputSection>
          <ProfileWrapper>
            {profileImg ? (
              <ProfileImg src={profileImg} />
            ) : (
              <ProfileImg src={defaultImg} />
            )}
            <label htmlFor="uploadFile">
              <UploadBtn src="https://raw.githubusercontent.com/MinJaeSon/assets/ae59f8db53688476f7954aafc83a052533705e09/profileUploadIcon.svg" />
            </label>
            <input
              type="file"
              id="uploadFile"
              onChange={onChangeImage}
              style={{ display: 'none' }}
            />
          </ProfileWrapper>
          <NameWrapper>
            <TextContainer>
              <h3>닉네임</h3>
              <p>평소에 부르는 호칭을 입력하면 더욱더 자연스러워요.</p>
            </TextContainer>
            <NameInput type="text" name="name" onChange={onChange} />
          </NameWrapper>
          <EventWrapper>
            <h3>기념일</h3>
            <EventInputWrapper>
              {/* <EventList>
                <EventItem />
              </EventList>
              <AddEvent>
                <img src={addBtn} />
                <p>기념일 추가하기</p>
              </AddEvent> */}
            </EventInputWrapper>
          </EventWrapper>
        </InputSection>
      </div>
      <BottomNav />
    </Container>
  );
};

export default CreateFriend;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .wrapper {
    margin-top: 35px;
    h2 {
      font-size: 23px;
    }
    input {
      width: 20px;
      height: 20px;
    }
  }
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

const UploadBtn = styled.img`
  width: 20px;
  height: 20px;
  margin-left: -24px;
  margin-top: 90px;
`;

const NameWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: last baseline;
  height: fit-content;
  h3 {
    font-size: 15px;
    width: fit-content;
    margin: 0;
  }
  p {
    font-size: 10px;
    margin: 0 0 0 7px;
  }
`;

const NameInput = styled.input`
  width: 340px !important;
  height: 41px !important;
  border-radius: 5px;
  border: 1px solid #cecece;
  background: #fff;
  margin-top: 10px;
`;

const EventWrapper = styled.div`
  h3 {
    font-size: 15px;
    width: fit-content;
    margin: 0;
  }
`;

const EventInputWrapper = styled.div`
  width: 340px;
  height: 82px;
  border-radius: 5px;
  border: 1px solid #cecece;
  background: #fff;
  margin-top: 10px;
`;
