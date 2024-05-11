import React, { useState, useEffect } from 'react';
import '../carousal/carousal.css';
import '../carousal/dots.css';
import image1 from '../Banners/MWide.jpeg';
import image2 from '../Banners/class.png';
import image3 from '../Banners/ApWide.jpg';

import image3TheDangerInMyHeart from '../Banners/Dheart.jpg';
import image4Frere from '../Banners/frierenn.webp';
import SliderItem from "../carousal/sliderItem.jsx"
export const Slider = () => {
    const item = [
        {  
           Trending: '#1 Trending',
           Genres:'Action,Comedy,Magic',
           title:"Mashle: muscle and magic",
           description: "into a world of magicians is born Mash, a young boy who lacks magic but is the strongest person around. His existence and destiny will change his world. ",
           image:image1,
        },
        { 
           Trending: '#2 Trending', 
           Genres:'Drama,School,Psychological',
           title:"classroom of the elite",
           description: "Classroom of the Elite is an anime series that follows Kiyotaka Ayanokōji, a quiet, intelligent, and athletic student who enrolls in a prestigious government-sponsored high school called Koudo Ikusei Senior High School.",
           image: image2 ,
        }
        ,
        {  Trending: '#3 Trending',
           Genres:'Drama,Comedy,Romance',
           title:"Apothecary Diaries",
           description: "The Apothecary Diaries is a historical fiction series about a young woman, Maomao, who is kidnapped and sold into servitude in the emperor's palace.",
           image: image3, 
        }
        ,
        {  Trending: '#4 Trending',
           Genres:'School,Comedy,Romance',
           title:"The Dangers in My Heart",
           description: "The Dangers in My Heart is a manga series by Norio Sakurai that follows Kyotaro Ichikawa, a loner who fantasizes about killing his classmates, especially the popular Anna Yamada.",
           image: image3TheDangerInMyHeart, 
        }
        ,
        {   Trending: '#5 Trending',
            title:"Frieren",
            Genres:'Slice of Life,Adventure,Magic',
            description: "The Dangers in My Heart is a manga series by Norio Sakurai that follows Kyotaro Ichikawa, a loner who fantasizes about killing his classmates, especially the popular Anna Yamada.",
            image: image4Frere
        }


    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % item.length);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return item.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    };
    const handleDotClick = (index)=>{
        setCurrentIndex(index);
    }
    useEffect(() => {
        // Automatically change slide every 7 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % item.length);
        }, 6000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);    
    
  return (
    <div className='carousal'>
        <div className="inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {item.map((item)=>{
                return <SliderItem item={item}/>
            })}
        </div>
        <div className="dotsContainer">
    {item.map((_, index) => (
        <button
            key={index}
            className={`carousel-dots ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
        >
        </button>
    ))}
</div>
        <button className="next" onClick={handleNext}>Next</button>
        <button className="prev" onClick={handlePrev}>prev</button>
    </div>
  )
}
export default Slider;