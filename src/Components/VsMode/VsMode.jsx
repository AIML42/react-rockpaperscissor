import React, { useContext, useEffect } from 'react'
import './VsModeStyle.css'
import { Data } from '../../Context/ScoreContext'
import { declareWinner } from '../../utils/gameLogic'
import rock from "../../assets/characters/rock.png"
import paper from "../../assets/characters/paper.png"
import scissor from "../../assets/characters/scissor.png"

const VsMode = () => {

    const { userChoice, userChoiceSelector, pcChoice, pcChoiceSelector,  
        userScore, setUserScore, pcScore, setPcScore } = useContext(Data);

    const result = declareWinner(userChoice, pcChoice);
    // console.log(result, pcChoice, userChoice);
    const resultUpperCase = result.toUpperCase();
    
    const choiceImages = {
        rock: rock,
        paper: paper,
        scissor: scissor,
      };
   

    useEffect( () => {
        if (result === "win") {
        setUserScore(userScore + 1);
    }
    else if (result === "lost") {
        setPcScore(pcScore + 1)
    }
    }, [result])

    const handlePlayAgain = () => {
        userChoiceSelector("");
        pcChoiceSelector("");
    }

    return (
        <div className='vs-mode'>

            <div className="user-side">
                <h5>YOU PICKED</h5>
                <div className={`user-circle ${userChoice}-custom-circle ${result === "win" ? "winning-circle": ""}`}>
                    <img src={choiceImages[userChoice]} alt="" />
                </div>
            </div>

            <div className="result">
                {result === "draw" ? (
                    <>
                        <h1>TIE UP</h1>
                        <button onClick={handlePlayAgain}><h5>REPLAY</h5></button>
                    </>
                ) : (
                    <>
                        <h1>YOU {resultUpperCase}</h1>
                        <h3>AGAINST PC</h3>
                        <button onClick={handlePlayAgain}><h5>PLAY AGAIN</h5></button>
                    </>
                )}

            </div>

            <div className="computer-side">
                <h5>PC PICKED</h5>
                <div className={`computer-circle ${pcChoice}-custom-circle ${result === "lost" ? "winning-circle": ""}`}>
                    <img src={choiceImages[pcChoice]} alt="" />
                </div>
            </div>

        </div>
    )
}

export default VsMode