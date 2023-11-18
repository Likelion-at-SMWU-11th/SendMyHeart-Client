import React from 'react';
import { BottomNav, FriendCard, TopBar } from '../components';
import logo from '../assets/logo.svg';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Send = () => {
  return (
    <div className='container'>
      <TopBar>
        <img src={logo}/>
      </TopBar>
      <div className='content-div'>
          <p 
            style={{color:'#000',fontWeight:'500', fontSize:'1.438rem'}}>누구에게 보내는 안부인가요?</p>
          <RowDiv>
              <FriendCard/>
              <FriendCard/>
              <FriendCard/>
              <FriendCard/>
              <FriendCard/>
          </RowDiv>
          <Link to='/' style={{color:'#000'}}>안부친구 추가하기</Link>
      </div>
      <BottomNav/>
    </div>
  );
};

const RowDiv=styled.div`
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

  
`

export default Send;