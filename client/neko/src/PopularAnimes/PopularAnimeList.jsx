import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../PopularAnimes/PopularAnime.css'
import soloLeveling from '../popularAnimesImages/soloo.jpg'
import Freiren from '../popularAnimesImages/feirei.jpg'
import Cote from '../popularAnimesImages/coteh.webp'
import TheSignOfAffection from '../popularAnimesImages/thesignof.jpg'
import DangerInMyHeart from '../popularAnimesImages/dangerinmyheart.jpg'
import OShiNoKo from '../popularAnimesImages/aoshiai.webp'
import TalesOfWedding from '../popularAnimesImages/talesofwedding.jpg'
import MashleS2 from '../popularAnimesImages/mashle23.webp'
import OnePiece from '../popularAnimesImages/OnePiece.png'
import Apothcary from '../popularAnimesImages/apothcary.jpg'
import HokkaidoGals from '../popularAnimesImages/HokkaidoGals.jpg'
import MoreThanMarriageCouple from '../popularAnimesImages/morethancouples.webp'
export const PopularAnimeList = () => {
    const PopularAnimeData = [
        {
            id:1,
            image:soloLeveling,
            title:"Solo Leveling",
            language: "Dub | Sub"
        },
        {
            id:2,
            image:Freiren,
            title:"Freiren Beyonds journeys end",
            language: "Dub | Sub"
        },
        {
            id:3,
            image:Cote,
            title:"Classroom of the elite S3",
            language: "Dub | Sub"
        },
        {
            id:4,
            image:DangerInMyHeart,
            title:"Danger in my Heart",
            language: "Dub | Sub"
        },
        {
            id:5,
            image:TheSignOfAffection,
            title:"The Sign of Affection",
            language: "Dub | Sub"
        },
        {
            id:6,
            image:OShiNoKo,
            title:"Oshi No Ko",
            language: "Dub | Sub"
        },
        {
            id:7,
            image:TalesOfWedding,
            title:"Tales of Wedding",
            language: "Dub | Sub"
        },
        {
            id:8,
            image:MashleS2,
            title:"Mashle",
            language: "Dub | Sub"
        },
        {
            id:9,
            image:OnePiece,
            title:"One piece",
            language: "Dub | Sub"
        },
        {
            id:10,
            image:Apothcary,
            title:"Apothecary Diaries",
            language: "Dub | Sub"
        },
        {
            id:11,
            image:HokkaidoGals,
            title:"Hokkaido Gals Are Super Adorable",
            language: "Dub | Sub"
        },
        {
            id:12,
            image:MoreThanMarriageCouple,
            title:"More ThanMarriage Couple",
            language: "Dub | Sub"
        },
     
    ]
  return (
    <div>
        <div className="PopularAnimeSec">
            <h1>Most Popular Animes of 2023</h1>
            <p>Check this out! You might find something to watch</p>
            <Link to="/popular"><button>View All</button></Link>
        </div>
        <div className="PopularAnimeList">
                {PopularAnimeData.map((anime, index) => (
                    // Use parentheses to return multiple elements
                    <div key={index} className="popularAnimeitem">
                        <img src={anime.image} alt="" />
                        <div className="popularDescription">
                            <p className='PopularTitle'>{anime.title}</p>
                            <p className='PopularLang'>{anime.language}</p>
                        </div>
                    </div>
                ))}
        </div>
   </div>
  )
}
export default PopularAnimeList;