import { useEffect, useRef, useState } from 'react';

const useDropDown = (initialState) => {
  const [isOpen, setIsOpen]=useState(initialState);
  const ref=useRef(null);
  
  const removeHandler=()=>{
    setIsOpen(!isOpen);
  }

  useEffect(()=>{
    const onClick=(e)=>{
      if(ref.current !== null && !ref.current.contains(e.target)){
        setIsOpen(!isOpen);
      }
    };

    if(isOpen){
      window.addEventListener('click',onClick);
    }

    return ()=>{
      window.removeEventListener('click',onClick);
    }
  },[isOpen]);

  return [isOpen, ref, removeHandler];
};

export default useDropDown;