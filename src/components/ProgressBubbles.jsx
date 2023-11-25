import React, {useEffect} from 'react';
import coloredBubble from '../assets/coloredBubble.png';
import bubble from '../assets/bubble.png';

const ProgressBubbles = ({pageNum}) => {

  useEffect(()=>{
    console.log('pageNum:',pageNum);
    const bubbles=document.querySelectorAll('.bubbles');

    switch(pageNum){
      case 1:
        bubbles[0].src=coloredBubble;
        bubbles[1].src=bubble;
        bubbles[2].src=bubble;
        bubbles[3].src=bubble;
        break;
      case 2:
        bubbles[0].src=bubble;
        bubbles[1].src=coloredBubble;
        bubbles[2].src=bubble;
        bubbles[3].src=bubble;
        break;
      case 3:
        bubbles[0].src=bubble;
        bubbles[1].src=bubble;
        bubbles[2].src=coloredBubble;
        bubbles[3].src=bubble;
        break;
      case 4:
          bubbles[0].src=bubble;
          bubbles[1].src=bubble;
          bubbles[2].src=bubble;
          bubbles[3].src=coloredBubble;
          break;
      default:
        break;
    }
  },[pageNum]);

  return (
    <div style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      width: '50%',
      marginBottom:'0.8rem'}}>
      <img src={bubble} className='bubbles'/>
      <img src={bubble} className='bubbles'/>
      <img src={bubble} className='bubbles'/>
      <img src={bubble} className='bubbles'/>
    </div>
  );
};

export default ProgressBubbles;