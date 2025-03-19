import React, {useContext} from 'react'
import './ScoreBoardStyle.css'
import { Data } from '../../Context/ScoreContext'

const ScoreBoard = () => {

    const {userScore, pcScore} = useContext(Data);

    return (
        <div className='scoreBoard'>

            <div className='scoreBoardHeading'>
                <h1>ROCK</h1>
                <h1>PAPER</h1>
                <h1>SCISSORS</h1>
            </div>

            <div className="scoreBoardNumbers">
                <div className="computerScore">
                    <h4>COMPUTER</h4>
                    <h4>SCORE</h4>
                    <h1>{pcScore}</h1>
                </div>
                <div className="humanScore">
                    <h4>YOUR</h4>
                    <h4>SCORE</h4>
                    <h1>{userScore}</h1>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard