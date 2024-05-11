import React, { useState, useEffect } from 'react';
import "./PopAll.css"
import axios from 'axios';
const PopularAll = () => {
  
  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/kitsune/Popular');
        setData(response.data);
        console.log(response.data); // This will log the data retrieved from the API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    // Call the fetchData function to fetch and log the data
    fetchData();
  },[])
  // fetching anime data from database

  return (
    <div >
      <div className="anime">
        <div className="headings">
        <h1>Most Popular Anime of 2023</h1>
          <p>Check this out! You might find something to watch</p>
        </div>
        <div className="contents">
        {data.map((anime) => (
          <div className="list">
            <img src="/animep/coteh.webp" alt="" />
            <div className="desc">
            <p className='PopularTitle'>{anime.name}</p>
             <p className='PopularLang'>{anime.description}</p>
            </div>
          </div>
        ))
        }
        </div>
      </div>
    </div>
  );
};

export default PopularAll;
