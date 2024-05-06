import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import YourBotArmy from './YourBotArmy'
import { Routes, Route} from "react-router-dom"
import BotCollection from './BotCollection'
import BotPage from '../pages/BotPage'

import "../App.css"

function App() {
  const [allBot, setAllBot] = useState([])
  const [selected, setSelected] = useState([])

  useEffect( () =>{
    fetch('http://localhost:5051/bots')
   .then(res => res.json())
   .then(data => setAllBot(data))
  }, [])
  return (
    <>
    <Navbar/>
    <YourBotArmy selected = {selected} setSelected={setSelected}/>

    <Routes>
      <Route path="/"  element={<BotCollection allBots={allBot} setAllBot={setAllBot} />}  />
      <Route path="/bots/:botId"  element={<BotPage allBots={allBot} setAllBot={setAllBot} selected = {selected} setSelected={setSelected}/>} />
    </Routes>
    </>
  )
}

export default App