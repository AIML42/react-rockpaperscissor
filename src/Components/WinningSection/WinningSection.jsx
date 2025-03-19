import React from 'react'
import './WinningSectionStyle.css'
import { useState, useContext } from 'react'
import winningScene from "../../assets/scenes/winning_scene.jpg"
import { Data } from '../../Context/ScoreContext'

const WinningSection = () => {

    const [winningPage, goToWinningPage] = useState(false);
    const {userChoiceSelector, pcChoiceSelector} = useContext(Data);
    
    const handlePlayAgain = () => {
        userChoiceSelector("");
        pcChoiceSelector("");
        goToWinningPage(!winningPage);
    }

    return (
        <>
            <button onClick={() => goToWinningPage(!winningPage)} className='next-button'>
                <h3>NEXT</h3>
            </button>

            {winningPage && <div className='main-winning-section'>
                <img src={winningScene} alt="" />
                <h1>HURRAY!!</h1>
                <h2>YOU WON THE GAME</h2>
                <button onClick={handlePlayAgain}><h5>PLAY AGAIN</h5></button>
            </div>
            }
        </>
    )
}

export default WinningSection