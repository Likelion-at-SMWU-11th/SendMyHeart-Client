import React from 'react';
import { styled } from 'styled-components';
import calender from '../assets/calender.svg';
import mypage from '../assets/mypage.svg';
import centerbtn from '../assets/centerbtn.svg';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <Container>
      <Link to="/schedule">
        <SideNav>
          <img src={calender} />
          <p>달력</p>
        </SideNav>
      </Link>
      <Link to="/send">
        <img src={centerbtn} />
      </Link>
      <Link to="/mypage">
        <SideNav>
          <img src={mypage} />
          <p>내 정보</p>
        </SideNav>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3.75rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background: linear-gradient(
    180deg,
    rgba(253, 253, 253, 0.54) 0%,
    rgba(234, 234, 234, 0.9) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(225, 225, 225, 0.25);

  a {
    text-decoration: none;
  }
  & > a {
    cursor: pointer;
  }
`;

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.625rem;
    color: #828282;
    font-weight: 500;
    margin-bottom: 0;
  }
`;

export default BottomNav;
