import React from 'react'
import Bot from './Bot'
function YourBotArmy({selected, setSelected}) {

    return (
        <div className="mybotarmy">
            <span className="title" >Your Army List</span>
            <div className="mylist">
{
    selected <= 0 && <p>Your Boughts will appear Here After you select</p> 
}
{
    selected.map(bot => <Bot   
        key={bot.id} 
        id={bot.id}
        name={bot.name}
        health={bot.health}
        damage={bot.damage}
        armor={bot.armor}
        bot_class={bot.bot_class}
        catchphrase={bot.catchphrase}
        avatar_url={bot.avatar_url}
        created_at={bot.created_at}
        updated_at={bot.updated_at}  
        isClicked = {true}
        selected={selected}
        setSelected={setSelected} 
        />)
}            </div>
        </div>
    )
}

export default YourBotArmy;