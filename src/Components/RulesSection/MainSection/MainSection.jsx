import React from 'react'
import './MainSectionStyle.css'
import MenuSection from '../MenuSection/MenuSection'
import { useState } from 'react'

const MainSection = () => {

    const [showRules, showRulesSetter] = useState(false)

    return (
        <>
            <button onClick={() => showRulesSetter(!showRules)} className='rules-button'>
                <h3>RULES</h3>
            </button>

            {showRules && <div className="full-rules">
                <div className='rules-content'>
                    <h2>Game Rules</h2>

                    <MenuSection content={"Rock beats scissors, scissors beat paper, and paper beats rock."} />
                    <MenuSection content={"Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”"} />
                    <MenuSection content={"Use rock, paper, scissors to settle minor decisions or simply play to pass the time"} />
                    <MenuSection content={"If both players lay down the same hand, each player lays down another hand"} />


                </div>

                <button onClick={ () => showRulesSetter(!showRules) } className='cross-button'></button>
            </div>}
            
        </>

    )
}

export default MainSection