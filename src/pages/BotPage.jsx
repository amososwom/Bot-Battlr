import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BotSpecs from '../components/BotSpecs'

function BotPage() {
    const  {botId}  = useParams()
    const [specs, setSpecs] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5051/bots/${botId}`)
          .then(res => res.json())
          .then(data => setSpecs(data));
      }, []);
      console.log(specs)
  return (
    <div className="botpage">
        { <BotSpecs
                 id={specs.id}
                 name={specs.name}
                 health={specs.health}
                 damage={specs.damage}
                 armor={specs.armor}
                 bot_class={specs.bot_class}
                 catchphrase={specs.catchphrase}
                 avatar_url={specs.avatar_url}
                 created_at={specs.created_at}
                 updated_at={specs.updated_at}
                 />}
    </div>
  )
}

export default BotPage