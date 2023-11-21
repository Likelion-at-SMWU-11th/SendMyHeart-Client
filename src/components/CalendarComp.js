import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import calender from '../assets/calendar.css';

const CalendarComp = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

// https://velog.io/@pikadev1771/react-calendar-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0-%EB%82%A0%EC%A7%9C-%EB%B3%80%ED%99%98-%ED%98%84%EC%9E%AC-%EB%8B%AC-%EA%B5%AC%ED%95%98%EA%B8%B0-%EC%BD%98%ED%85%90%EC%B8%A0-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0

export default CalendarComp;
