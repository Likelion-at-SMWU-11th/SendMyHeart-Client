import React from 'react';
import styled from 'styled-components';
//import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components';
//import axios from 'axios';

import logo from '../assets/header.png';
import calender from '../assets/calender_yellow.svg';

const Schedule = () => {
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

  const ScheduleTxt = styled.div`
    font-size: 20px;
    width: 300.5px;
    font-weight: 500;
    padding: 2vh 10vw 1vh;
  `;

  const ScheduleList = styled.div`
    background-color: #ffffff;
    bolder: 1px solid #cecece;
    color: #000000;
    font-size: 15px;
    width: 300px;
    height: 41px;
    line-height: 41px;
    border-radius: 5px;
    font-weight: 500;
    margin: 0 auto;
  `;

  const Date = styled.div`
    padding-left: 5vw;
    padding-right: 0vw;
    font-weight: 400;
    float: left;
  `;

  const Content = styled.div`
    float: left;
    padding-left: 10vw;
  `;

  const Nav = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  `;

  return (
    <Wrapper>
      <Logo src={logo} />
      <ScheduleTxt>
        <img src={calender} /> 이달의 일정
        <hr style={{ background: '#FFCC70', height: '1px', border: '0px' }} />
      </ScheduleTxt>
      <ScheduleList>
        <Date>10.05</Date> <Content>할머니 생신</Content>
      </ScheduleList>

      <Nav>
        <BottomNav />
      </Nav>
    </Wrapper>
  );
};

export default Schedule;
