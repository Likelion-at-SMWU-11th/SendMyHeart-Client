import React from 'react';
import styled from 'styled-components';
import { BottomNav, TopBar } from '../components';
import logo from '../assets/logo.svg';
import dummy from '../dummy.json';
import addBtn from '../assets/add_btn.svg';
import { useNavigate } from 'react-router-dom';

const FriendsList = () => {
  const navigate = useNavigate();
  const navigateToCreateFriend = () => {
    navigate('/mypage/createfriend');
  };

  return (
    <Container className="container">
      <TopBar>
        <img src={logo} />
      </TopBar>
      <h3>안부친구 명단</h3>
      <div className="wrapper">
        <FriendsWrapper>
          {dummy.friends.map((friend) => (
            <CardSection key={friend.id}>
              {friend.id === 1 ? (
                <AddFriendCard>
                  <AddBtn src={addBtn} onClick={navigateToCreateFriend} />
                </AddFriendCard>
              ) : (
                <FriendCard>
                  <img src={friend.profile} />
                  <p>{friend.name}</p>
                </FriendCard>
              )}
            </CardSection>
          ))}
        </FriendsWrapper>
      </div>
      <BottomNav />
    </Container>
  );
};

export default FriendsList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .wrapper {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-top: 35px;
    margin-left: 15px;
  }
`;

const FriendsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
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
