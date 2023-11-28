import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { Dropdown, TopBar } from '../components';


const ChangeCategory = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  /* Use queryParams.get('category'), queryParams.get('categoryKR')
  if it exists, otherwise use default value */
  const [category, setCategory]=useState(queryParams.get('category') ||'today');

  const handleCategory=(categoryEN)=>{
    setCategory(categoryEN);
    setCategoryKR(mapCategoryKR(categoryEN));
  } 

  const mapCategoryKR=(category)=>{
    
    const krMap = {
      today: '오늘의 안부',
      simple: '간단한 안부',
      special: '특별한 안부',
      cute: '귀여운 안부',
    };
    
    return krMap[category] || category;
  }

  const [categoryKR, setCategoryKR]=useState(mapCategoryKR(category));

  const baseURL='http://127.0.0.1:8000/';
  const [data, setData]=useState([]);

  
  // GET api
  // re-fetch data when the category changes
  useEffect(()=>{

    const fetchData=async ()=>{
      try {
        const response=await axios.get(`${baseURL}main/message/${category}/`);
        setData(response.data.messages);
        console.log(response.data.messages);
      } catch (err) {
        console.error('카테고리별 안부 불러오기 실패:',err);
      }
    };

    fetchData();
  },[category]);
  
  return (
    <div>
      <TopBar>
        <Dropdown onChangeCategory={handleCategory} mapCategoryKR={mapCategoryKR}/>
      </TopBar>
      <div className='content-div' style={{padding: "2rem 1.25rem"}}>
      {data.map((item, index) => (
        <ItemBox key={index} to={'/copy'} state={{ category: categoryKR, text: item.content}}>
          {item.is_recommended && <RecommendBox>추천</RecommendBox>}
          {item.content}
        </ItemBox>
        ))}

          {/* <ItemBox to={'/copy'} state={{friendName:friendName, category:categoryKR, text:'날씨가 많이 선선해졌어요.나봐요! 겉옷 꼭 챙겨다니세요~'}}>
          날씨가 많이 선선해졌어요.
          나봐요! 
           겉옷 꼭 챙겨다니세요~
          </ItemBox> */}
        
      </div>
    </div>
  );
};

export default ChangeCategory;

const ItemBox=styled(Link)`
border-radius: 10px;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

width: 100%;
margin-bottom: 1.2rem;
padding: 1.2rem 1rem; 
box-sizing: border-box;
text-align: left;

font-size: 0.9rem;

color: #000;
text-decoration: none;
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