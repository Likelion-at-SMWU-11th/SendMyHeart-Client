import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { BoardingImgComp, ProgressBubbles } from '../components';


const OnBoarding = () => {

  const [index, setIndex]=useState(1);

  const handleOnClick=()=>{
    setIndex((prevIndex)=>prevIndex+1);
    console.log('index:', index);
  }

  const goSignUp=()=>{

  }
  return (
    <div className='container' style={{
      padding: '3.12rem 0', 
      boxSizing:'border-box',
      backgroundColor:'#EFEFEF'}}>
      <div className='content-div'>
        <BoardingImgComp pageNum={index}/>
      </div>
      <div style={{
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center',
        padding:'0 1.875rem',
        boxSizing:'border-box'}}>
        <ProgressBubbles pageNum={index}/>
        {index < 4 ? (
          <YellowBtn onClick={handleOnClick}>다음으로</YellowBtn>
        ): (
          <div style={{width: '100%', textAlign:'center'}}>
            <YellowBtn onClick={goSignUp}><Link to='/register'>시작하기</Link></YellowBtn>
            <p style={{color: '#5F3D00', fontSize:'0.9rem'}}>이미 계정이 있으시다면? &nbsp;
              <Link to='/login' style={{color:'#FFCC70', fontWeight:'700'}}>로그인</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const YellowBtn=styled.button`
  width: 100%;
  height: 3.5rem;
  border: none;
  border-radius: 5px;
  background: #FFCC70;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  a {
    color: white;
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
  }
`;


export default OnBoarding;