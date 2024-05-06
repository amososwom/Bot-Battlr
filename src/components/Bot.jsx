import React from 'react'
import SortBar from './SortBar';
import { FaBeer } from 'react-icons/fa';




function Bot({
    id, name, health, 
    damage, armor, bot_class, catchphrase,
    avatar_url, created_at,
    updated_at, isClicked, selected, setSelected }) { 

        function handleClick(){
            if(!isClicked) {
                console.log("Not-cliked")
                return
            }
            let newData =  selected.filter(value => value.id !== id)
            setSelected(newData)
        }
        function handleDelete(){

        }

    return(
        <>
         <div className="bot" onClick={handleClick}>
            <div className="botimg">
                <img src={avatar_url} alt={name}/>
            </div>
            <div className="botdetails">
                <span>{name} <small>({bot_class})</small> </span>
                <span>{catchphrase}</span>
            </div>
      <SortBar health={health} damage={damage} armor={armor}/>
      {!isClicked && 
      <span className="danger" onClick={handleDelete}>X</span>}
        </div>  
        </>
    )
}

export default Bot;