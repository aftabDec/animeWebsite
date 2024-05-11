import React from 'react'
import SoloLeveling from '../hindiAnimeImage/solo.jpg'
import ChainsawMan from '../hindiAnimeImage/chainsaw.webp'
import DemonSlayerS3 from '../hindiAnimeImage/demonSlayerSeason3.webp'
import Frieren from '../hindiAnimeImage/feirei.jpg'
import JujutsuKaisenS2 from '../hindiAnimeImage/jujutsu.jpg'
import VinlandSagaS2 from '../hindiAnimeImage/vinland.jpg'
import TheAngleNextDoor from '../hindiAnimeImage/theangle.jpg'
import RelinaMansion from '../hindiAnimeImage/relina.jpg'
import RentGirfriend from '../hindiAnimeImage/rentagirl.jpg'
import ReLife from '../hindiAnimeImage/rlife.jpg'
import Lookism from '../hindiAnimeImage/lookism.jpg'
import DarlingInThe from '../hindiAnimeImage/darlinginfranxx.jpg'

import '../hindiAnimeList/hindi.css'
export const HindiAnimePage = () => {
        const HindiAnimeData = [
            {
                id: 1,
                image: SoloLeveling,
                Title: "Solo Leveling",
                subtitle: "Dub | Sub",
            },
            {
                id: 2,
                image: ChainsawMan,
                Title: "Chainsaw man",
                subtitle: "Dub | Sub",
            },
            {
                id: 3,
                image: DemonSlayerS3,
                Title: "Demon Slayer S3",
                subtitle: "Dub | Sub",
            },
            {
                id: 4,
                image: Frieren,
                Title: "Frieren: Beyonds journey's end",
                subtitle: "Dub | Sub",
            },
            {
                id: 5,
                image: JujutsuKaisenS2,
                Title: "Jujutsu Kaisen S2",
                subtitle: "Dub | Sub",
            },
            {
                id: 6,
                image: VinlandSagaS2,
                Title: "Vinland Saga S2",
                subtitle: "Dub | Sub",
            },
            {
                id: 7,
                image: TheAngleNextDoor,
                Title: "The Angle next door spoil me rotten",
                subtitle: "Dub | Sub",
            },
            {
                id: 8,
                image: RelinaMansion,
                Title: "The reason why Reliana end up in duke mansion",
                subtitle: "Dub | Sub",
            },
            {
                id: 9,
                image: RentGirfriend,
                Title: "Rent a Girlfriend",
                subtitle: "Dub | Sub",
            },
            {
                id: 10,
                image: ReLife,
                Title: "Re:life",
                subtitle: "Dub | Sub",
            },
            {
                id: 11,
                image: Lookism,
                Title: "Lookism",
                subtitle: "Dub | Sub",
            },
            {
                id: 12,
                image: DarlingInThe,
                Title: "Darling in the fraxx",
                subtitle: "Dub | Sub",
            },           
            
        ]
  return (
    <div>
        <div className="HindiAnimeSec">
            <h1>Hindi Dubs Available in Kitsune </h1>
            <p>Check out this amazing dubs!</p>
            <button>View All</button>
        </div>
        
    <div className="animeList">
        
        {HindiAnimeData.map((anime, index) => (
            
            <div key={index} className='animeItem'>

              
              <img src={anime.image} alt="" />
            
          
             <div className="animeDec">
             <p className='Pt'>{anime.Title}</p>
             <p className='pd'>{anime.subtitle}</p>
             </div>  
            </div>
        ))}
    </div>
</div>

    
  )
}
export default HindiAnimePage;