import React from 'react'
import Navbar from './Navbar'
import YourBotArmy from './YourBotArmy'
import { Routes, Route} from "react-router-dom"

import "../App.css"

function App() {
  return (
    <>
    <Navbar/>
    <YourBotArmy/>

    <Routes>
      {/* <Route path="/" exact component={Home} /> */}
    </Routes>
    </>
  )
}

export default App