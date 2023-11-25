import React, { useEffect } from 'react';
import logo from '../assets/biglogo.svg';
import { keyframes, styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    // Set a timeout to navigate to "/onboarding" after 2 seconds
    const timeout=setTimeout(()=>{
      navigate('/onboarding');
    },2500);

    // Clear the timeout when the component unmounts or when navigating away
    return () => clearTimeout(timeout);
  },[navigate])

  return (
    <div className='container'>
      <div className='content-div'>
        <div>
          <img src={logo}/>
        </div>
        <div style={{
          marginTop:'2rem',
          display:'flex',
          flexDirection:'column'}}>
          <div style={{
            display:'flex', 
            flexDirection:'row',
            justifyContent:'space-around',
            width: '48%',
            alignSelf:'flex-end',
            marginBottom:'0.2rem'
            }}>
            {[1, 2, 3].map((i) => (
              <YellowDot key={i} i={i} />
            ))}
          </div>
          <p style={{margin: 0, fontSize:'1.25rem'}}>내 마음 <strong>전하기</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Splash;

const WaveDotAnimation=keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-16px);
  }
  100% {
    transform: translateY(0);
  }
`;

const YellowDot = styled.div`
  background: #FFCC70;
  border-radius: 50%;
  width: 0.31rem;
  height: 0.31rem;
  animation: ${WaveDotAnimation} 1s linear infinite;
  animation-delay: ${(props) => `calc(${props.i} * 0.05s)`};
`;