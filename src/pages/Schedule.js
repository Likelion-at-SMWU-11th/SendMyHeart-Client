import React /* , { useState } */ from 'react';
import styled from 'styled-components';
//import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components';
//import axios from 'axios';

import logo from '../assets/header.png';
import calender from '../assets/calender_yellow.svg';
import CalendarComp from './../components/CalendarComp';
import { Calendar } from 'react-calendar';

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

const LayoutCalender = styled.div`
  padding: 5vh 10vw 3vh;
`;

const ScheduleImg = styled.img`
  float: left;
  padding: 0vh 4vw;
`;

const ScheduleTitle = styled.div`
  float: left;
  padding: 0vh 2vw 1vh;
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
  margin: 0vh auto 1vh;
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

const Schedule = () => {
  /*  const [schedules, setSchedules] = useState('');

  const getSchedule = () => {
    axios
    .get("", {
      withCredentials: true,
    })
    .then((response) => {
        setSchedules(response.data);
    })
    .catch((error) => {
      console.error("Error Getting Name: ", error);
    });
  }; */

  return (
    <Wrapper>
      <Logo src={logo} />
      <LayoutCalender>
        <Calendar />
      </LayoutCalender>
      <ScheduleTxt>
        <ScheduleImg src={calender} />{' '}
        <ScheduleTitle> 이달의 일정 </ScheduleTitle>
        <br />
        <hr style={{ background: '#FFCC70', height: '1px', border: '0px' }} />
      </ScheduleTxt>
      {/*         schedules.map((schedule, index)=>(
            <ScheduleList key={index}> 
            <Date>{schedule.date} </Date> <Content>{schedule.content}</Content>
            </ScheduleList>
        )) */}
      <ScheduleList>
        <Date>10.05 </Date> <Content>할머니 생신</Content>
      </ScheduleList>
      <Nav>
        <BottomNav />
      </Nav>
    </Wrapper>
  );
};

export default Schedule;
