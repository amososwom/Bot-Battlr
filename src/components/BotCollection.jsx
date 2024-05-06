import React from 'react'
import Bot from './Bot'
import { Link } from 'react-router-dom'

function BotCollection( {allBots }) {

  
    const myBots = allBots.map(values => 
        (
          <Link to={`/bots/${values.id}`} key={values.id} className="bota">
                   <Bot 
         key={values.id} 
         id={values.id}
         name={values.name}
         health={values.health}
         damage={values.damage}
         armor={values.armor}
         bot_class={values.bot_class}
         catchphrase={values.catchphrase}
         avatar_url={values.avatar_url}
         created_at={values.created_at}
         updated_at={values.updated_at}
         />
          </Link>

        ))

  return (
    <div className='armycollection'>
        <span className="title">All-Army</span>
        <div className='armylist'>
        {myBots}
        </div>
    </div>
  )
}

export default BotCollection