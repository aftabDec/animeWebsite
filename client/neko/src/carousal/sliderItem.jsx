import React from 'react';
import { FaRegBookmark, FaRegEye } from 'react-icons/fa'; 
import '../carousal/carousal.css';

const SliderItem = ({ item }) => {
  // Perform null check or provide default values for item properties
  const { image = '', description = '' ,title = '',Trending = '',Genres = '' } = item || {};

  return (
    <div className='car'>
      <div className='car-trending'>{Trending}</div>
       <div className='car-title'>{title}</div>
       <div className="genres">
        <p className='SubDub'>Sub | Dub</p>
         <p className='genre'>{Genres}</p>
       </div>
      <img className='car-item' src={image} alt="" />
      <div className='car-texts'>{description}</div>
      <div className='car-buttons'>
        {/* Watch button */}
        <button className='watch-button'><FaRegEye /> Watch</button>
        {/* Bookmark button */}
        <button className='bookmark-button'><FaRegBookmark /> Bookmark</button>
      </div>
    </div>
  );
};

export default SliderItem;
