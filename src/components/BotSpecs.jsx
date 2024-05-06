import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeartbeat, FaShieldAlt  } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

function BotSpecs({
    id, name, health, 
    damage, armor, bot_class, catchphrase,
    avatar_url, created_at, updated_at, selected, specs, setSelected  }) {
        function handleEnlist(){
            const filter = selected.filter(value => value.id !== id)
            const newBot = [...filter,specs]
            setSelected(newBot)
        }
  return (
    <div className="spec">
        <img src={avatar_url} alt={name}/>
        <div className="specdetails">
        <span>Name: {name}</span>
        <span className='dw'>Catchphrase
            <i>{catchphrase}</i>
        </span>
        <span>Class: <i>{bot_class}</i></span>
        <div className="botState botb">
            <span> <i><FaHeartbeat className="boticon" /></i> {health}</span>
            <span> <i><MdElectricBolt className="boticon" /></i> {damage}</span>
            <span> <i><FaShieldAlt className="boticon" /></i> {armor}</span>
        </div>
        <div className="actions">
            <Link to="/"><button>Go Back</button></Link>
            <button onClick={handleEnlist}>En-List</button>
        </div>
        </div>
    </div>
  )
}

export default BotSpecs