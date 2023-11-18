import React from 'react';
import { styled } from 'styled-components';
import profile from '../assets/profile.png';

const FriendCard = () => {
  return (
    <CardContainer className='card-container'>
      <ImgContainer>
          <img src={profile} id='blurred'/>
          <img src={profile} id='unblurred'/>
      </ImgContainer>
      <p><strong>외할머니</strong></p>
    </CardContainer>
  );
};

const CardContainer=styled.div`
width: 6.25rem;
height: 8.75rem;
border-radius: 10px;
background-color: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

padding: 1rem 0.5rem;
box-sizing: border-box;

position: relative;
overflow: hidden;

  p {
    text-align: center;
    margin: 0;
  }

  @media all and (min-width: 391px) {
    width: 8.25rem;
    height: 10.75rem;
  }

`;

const ImgContainer=styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  overflow: hidden;

  
  #blurred {
    width: 100%;
    height: 100%;
    object-fit: contain;
    mask-image: linear-gradient(#000, transparent);
    -webkit-mask-image: linear-gradient(#000 65%, transparent);
  }

  #unblurred {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    clip-path: circle(38px at center);
    z-index: 999;
  }

`



export default FriendCard;