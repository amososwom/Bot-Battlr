import React from 'react'
import SortBar from './SortBar';
import { FaBeer } from 'react-icons/fa';




function Bot({
    id, name, health, 
    damage, armor, bot_class, catchphrase,
    avatar_url, created_at,
    updated_at }) { 

    return(
        <>
         <div className="bot">
            <div className="botimg">
                <img src={avatar_url} alt={name}/>
            </div>
            <div className="botdetails">
                <span>{name} <FaBeer/> </span>
                <span>{catchphrase}</span>
            </div>
      <SortBar health={health} damage={damage} armor={armor}/>
        </div>  
        </>
    )
}

export default Bot;