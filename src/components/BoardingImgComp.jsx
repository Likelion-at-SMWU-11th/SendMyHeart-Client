import React, {useEffect} from 'react';
import boarding1 from '../assets/boarding1.png';
import boarding2 from '../assets/boarding2.png';
import boarding3 from '../assets/boarding3.png';
import logo from '../assets/biglogo.svg';
const BoardingImgComp = ({pageNum}) => {

  useEffect(()=>{
    const boardingImg=document.querySelector('.boarding-img');
    const content=document.querySelector('.boarding-content');

    switch(pageNum){
      case 1:
        boardingImg.src=boarding1;
        content.innerHTML='당신은 소중한 사람에게 <br/> 안부 인사를 자주 건네고 있나요?';
        break;
      case 2:
        boardingImg.src=boarding2;
        content.innerHTML='또는 매번 똑같은 안부를 <br/> 건네고 있진 않나요?';
        break;
      case 3:
        boardingImg.src=boarding3;
        content.innerHTML='마음은 전하고 싶지만 어느새 <br/> 안부인사가 부담이 되어버린 당신께';
        break;
      case 4:
        boardingImg.src=logo;
        content.innerHTML='당신의 전화기가 되어드릴게요.';
        break;
      default:
        break;
    }
  },[pageNum])
  return (
    <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <img className='boarding-img'/>
      {pageNum === 4 && <p style={{color: '#000',fontSize:'1.56rem',
        fontWeight:'700', margin:'3rem 0 0'}}>내 마음 전하기</p> }
      <p className='boarding-content' style={{
        color: '#000',
        textAlign:'center',
        fontSize:'1.25rem',
        fontWeight:'500',
        width: '80%'}}></p>
    </div>
  );
};

export default BoardingImgComp;