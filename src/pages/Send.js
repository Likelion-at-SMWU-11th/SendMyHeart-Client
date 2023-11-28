import React, { useEffect, useState, useContext } from 'react';
import { BottomNav, FriendCard, TopBar } from '../components';
import logo from '../assets/logo.svg';
import { styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App';

const Send = () => {
  const { user, receiver, setReceiver } = useContext(UserContext);

  const baseURL = 'http://127.0.0.1:8000/';
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriendsData = async () => {
      try {
        const response = await axios.get(
          `${baseURL}mypage/receiver/all/${user.userId}/`
        );
        setFriends(response.data);
      } catch (err) {
        console.error('안부친구 데이터 불러오기 실패:', err);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };
    console.log(user);
    fetchFriendsData();
  }, [user]);

  // Render loading state if data is still being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <TopBar>
        <img src={logo} />
      </TopBar>
      <div className="content-div">
        <p style={{ color: '#000', fontWeight: '500', fontSize: '1.438rem' }}>
          누구에게 보내는 안부인가요?
        </p>
        <RowDiv>
          {friends.map(
            (item, index) =>
              item.image && (
                <Link to={'/category'} key={index}>
                  {console.log('imgSrc:', item.image)}
                  <FriendCard imgSrc={item.image} name={item.nickname} />
                </Link>
              )
          )}
          {/* <Link to={'/category'} state={{friendName:'grandma', username:userInfo.username}}>
                  <FriendCard imgSrc={profile} name='외할머니'/>
              </Link> */}
        </RowDiv>
        <Link to="/mypage/createfriend" style={{ color: '#FFCC70' }}>
          안부친구 추가하기
        </Link>
      </div>
      <BottomNav />
    </div>
  );
};

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1.5rem 0 1.5rem;
  width: 100%;

  box-sizing: border-box;
  justify-content: center;

  & div {
    flex-grow: 0;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    cursor: pointer;
  }
`;

export default Send;
