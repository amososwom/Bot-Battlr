import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import YourBotArmy from './YourBotArmy'
import { Routes, Route} from "react-router-dom"
import BotCollection from './BotCollection'

import "../App.css"

function App() {
  const [allBot, setAllBot] = useState([])

  useEffect( () =>{
    fetch('http://localhost:5051/bots')
   .then(res => res.json())
   .then(data => setAllBot(data))
  }, [])
  return (
    <>
    <Navbar/>
    <YourBotArmy/>
    <BotCollection allBots={allBot}/>
    {/* <Routes> */}
      {/* <Route path="/" exact component={Home} /> */}
    {/* </Routes> */}
    </>
  )
}

export default App