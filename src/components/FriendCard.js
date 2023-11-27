import React, { useState } from 'react';
import { styled } from 'styled-components';
// import profile from '../assets/profile.png';

const FriendCard = ({imgSrc, name}) => {

  const [isImgLoaded, setIsImgLoaded]=useState(false);

  return (
    <CardContainer className='card-container'>
      <ImgContainer>
          <img src={imgSrc} id='blurred' onLoad={()=>{setIsImgLoaded(true)}}/>
          <img src={imgSrc} id='unblurred' onLoad={()=>{setIsImgLoaded(true)}}/>
          {isImgLoaded ? (console.log('Image is loaded')):(console.log('Image is unloaded'))}
      </ImgContainer>
      <p><strong>{name}</strong></p>
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
    clip-path: ellipse(70% 70% at 50% 100%);
    mask-image: linear-gradient(#000 30%, transparent);
    -webkit-mask-image: linear-gradient(#000 30%, transparent);

  }

  #unblurred {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    clip-path: circle(45%);
    // clip-path: ellipse(47.5% 48% at 50% 50%);
    z-index: 999;
  }

`



export default FriendCard;