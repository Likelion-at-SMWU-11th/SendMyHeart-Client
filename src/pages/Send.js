import React, { useEffect, useState } from 'react';
import { BottomNav, FriendCard, TopBar } from '../components';
import logo from '../assets/logo.svg';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import profile from '../assets/profile.png';

const Send = () => {
  const baseURL = 'http://127.0.0.1:8000/';
  const [data, setData] = useState([]);


  useEffect(()=>{
    const fetchData=async ()=>{
      try {
        const response = await axios.get(`${baseURL}mypage/receiver/all/`);
        setData(response.data);
      } catch (err) {
        console.error('안부친구 데이터 불러오기 실패:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <TopBar>
        <img src={logo} />
      </TopBar>
      <div className='content-div'>
          <p 
            style={{color:'#000',fontWeight:'500', fontSize:'1.438rem'}}>누구에게 보내는 안부인가요?</p>
          <RowDiv>
              {data.map((item,index)=>(
                <Link to={'/category'} state={{friendName: item.nickname}} key={index}>
                  <FriendCard imgSrc={item.image} name={item.nickname}/>
                </Link>
              ))}
              <Link to={'/category'} state={{friendName:'grandma'}}>
                  <FriendCard imgSrc={profile} name='외할머니'/>
              </Link>
          </RowDiv>
          <Link to='/' style={{color:'#FFCC70'}}>안부친구 추가하기</Link>
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
