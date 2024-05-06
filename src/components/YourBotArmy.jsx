import React from 'react'
import Bot from './Bot'
function YourBotArmy() {
    return (
        <div className="mybotarmy">
            <span className="title" >Your Army List</span>
            <div className="mylist">
                <Bot/>
            </div>
        </div>
    )
}

export default YourBotArmy;