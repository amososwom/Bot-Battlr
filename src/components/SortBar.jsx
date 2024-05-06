import React from 'react'
import { FaHeartbeat, FaShieldAlt  } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

function SortBar({health = 0, damage = 0, armor = 0}) {
  return (
    <div className="botState">
    <span><FaHeartbeat className="boticon" /> {health}</span>
    <span><MdElectricBolt className="boticon" /> {damage}</span>
    <span><FaShieldAlt /> {armor}</span>
    </div>
  )
}



export default SortBar 