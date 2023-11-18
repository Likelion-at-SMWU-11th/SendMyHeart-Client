import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Dropdown, TopBar } from '../components';


const ChangeCategory = () => {

   // eslint-disable-next-line no-unused-vars
  const [category, setCategory]=useState(''); 

  const baseURL='';
  const [data, setData]=useState([]);

  const handleCategory=(categoryTxt)=>{
    setCategory(categoryTxt);
  }

  // GET api
  // re-fetch data when the category changes
  useEffect(()=>{
    const fetchData=async ()=>{
      try {
        const response=await axios.get(`${baseURL}message/${category}/`);
        setData(response.data);
      } catch (err) {
        console.error('카테고리별 안부 불러오기 실패:',err);
      }
    };

    fetchData();
  },[category]);
  
  return (
    <div>
      <TopBar>
        <Dropdown onChangeCategory={handleCategory}/>
      </TopBar>
      <div className='content-div' style={{padding: "2rem 1.25rem"}}>
        {data.map((item, index)=>{
          <ItemBox key={index}>
            {item.isRecommend && <RecommendBox>추천</RecommendBox>}
            {item.description}
          </ItemBox>
        })}

        <ItemBox>
        날씨가 많이 선선해졌어요.
진짜 가을이 왔나봐요! 
일교차가 심한데 겉옷 꼭 챙겨다니세요~
        </ItemBox>
        <ItemBox>
        날씨가 많이 선선해졌어요.
진짜 가을이 왔나봐요! 
일교차가 심한데 겉옷 꼭 챙겨다니세요~
        </ItemBox>
        <ItemBox>
        날씨가 많이 선선해졌어요.
진짜 가을이 왔나봐요! 
  일교차가 심한데 겉옷 꼭 챙겨다니세요~
일교차가 심한데 겉옷 꼭 챙겨다니세요~
일교차가 심한데 겉옷 꼭 챙겨다니세요~
일교차가 심한데 겉옷 꼭 챙겨다니세요~
        </ItemBox>
      </div>
    </div>
  );
};

export default ChangeCategory;

const ItemBox=styled.div`
border-radius: 10px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

width: 100%;
margin-bottom: 1.2rem;
padding: 1.2rem 1rem; 
box-sizing: border-box;
text-align: left;

font-size: 0.9rem;
`

const RecommendBox=styled.div`
color: #000;
font-weight: 700;
border-radius: 10px;
background: #FFFADD;
font-size: 0.625rem;

width: fit-content;
padding: 0.3rem 0.5rem;
margin-bottom: 1rem;
`