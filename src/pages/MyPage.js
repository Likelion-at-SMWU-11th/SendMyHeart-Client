import React, {useEffect, useContext, useState} from 'react';
import styled from 'styled-components';
import { BottomNav, TopBar } from '../components';
import logo from '../assets/logo.svg';
import profile from '../assets/profile_img.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dummy from '../dummy.json';
import addBtn from '../assets/add_btn.svg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import axios from 'axios';

const MyPage = () => {
  const navigate = useNavigate();
  const navigateToCreateFriend = () => {
    navigate('createfriend');
  };
  const navigateToFriendsList = () => {
    navigate('friendslist',{ state: { friends } });
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const {user}=useContext(UserContext);
  const [friends, setFriends]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const response=await axios.get(`http://127.0.0.1:8000/mypage/receiver/all/${user.userId}/`);
        setFriends(response.data);
      } catch(err){
        console.error('프로필 데이터 불러오기 실패:',err);
      }
    }
    fetchData();
  },[user])

  return (
    <Container className="container">
      <TopBar>
        <img src={logo} />
      </TopBar>
      <div className="wrapper">
        <ProfileSection>
          <h4>내 프로필</h4>
          <ProfileWrapper>
            <img src={profile} />
            <h3>{user.userName}</h3>
            <button>프로필 수정</button>
          </ProfileWrapper>
        </ProfileSection>
        <FriendsSection>
          <FriendsHeader>
            <h4>안부친구</h4>
            <button onClick={navigateToFriendsList}>전체보기 {`>`}</button>
          </FriendsHeader>
          <FriendsWrapper>
            <Slider {...settings}>
              <AddFriendCard>
                <AddBtn src={addBtn} onClick={navigateToCreateFriend} />
              </AddFriendCard>
              {friends.map((friend) => {
                console.log(friend.id);
                return (
                  <CardSection key={friend.id}>
                    {friend.id === 1 ? (
                      <AddFriendCard>
                        <AddBtn src={addBtn} onClick={navigateToCreateFriend} />
                      </AddFriendCard>
                    ) : (
                      <FriendCard>
                        <img src={friend.image} />
                        <p>{friend.nickname}</p>
                      </FriendCard>
                      // <FriendCard imgSrc={friend.image} name={friend.nickname}/>
                    )}
                  </CardSection>
                );
              })}
            </Slider>
          </FriendsWrapper>
        </FriendsSection>
        <div
          style={{
            width: '390px',
            height: '1px',
            background: '#D9D9D9',
            marginTop: '40px',
          }}
        />
        <Logout>로그아웃</Logout>
      </div>
      <BottomNav />
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // .wrapper {
  //   margin-top: 35px;
  // }
`;

const ProfileSection = styled.div`
  h4 {
    color: #000;
    font-size: 15px;
    font-weight: 700;
    margin-left: 3px;
    margin-bottom: 15px;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 366px;
  height: 83px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  img {
    width: 49px;
    height: 58px;
    margin-left: 25px;
  }
  h3 {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    margin-left: 19px;
  }
  button {
    width: 73px;
    height: 22px;
    border-radius: 5px;
    background: #f0f0f0;
    color: #828282;
    font-size: 11px;
    font-weight: 700;
    border: none;
    margin-left: 144px;
  }
`;

const FriendsSection = styled.div`
  margin-top: 50px;
`;

const FriendsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between !important;
  margin-bottom: 15px;
  h4 {
    color: #000;
    font-size: 15px;
    font-weight: 700;
    padding-left: 3px;
  }
  button {
    color: #000;
    font-size: 10px;
    font-weight: 700;
    border: none;
    background: none;
  }
`;

const FriendsWrapper = styled.div`
  width: 100%;
  .slick-list {
    overflow: hidden;
    width: 100%;
    height: 144px;
  }
  .slick-slider {
    max-width: 100vw;
    width: 100%;
    height: 144px;
    overflow: hidden;
  }
  .slick-track {
    height: 144px;
  }
  img {
    width: 74px;
  }
`;

const CardSection = styled.div``;

const FriendCard = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px !important;
  height: 140px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-right: 20px;
  img {
    width: 80px;
    height: 80px;
  }
  p {
    color: #000;
    font-size: 14px;
    font-weight: 700;
    width: fit-content;
  }
`;

const AddFriendCard = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px !important;
  height: 140px;
  border-radius: 10px;
  background: #d9d9d9;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-right: 20px;
`;

const AddBtn = styled.img`
  width: 17px;
  height: 17px;
`;

const Logout = styled.button`
  color: #000;
  font-size: 15px;
  font-weight: 500;
  border: none;
  background: none;
  margin-left: 3px;
  margin-top: 20px;
  padding: 0 0;
  width: fit-content;
`;
