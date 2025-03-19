import React, { useContext } from 'react'
import './SelectionBoardStyle.css'
import rock from "../../assets/characters/rock.png"
import paper from "../../assets/characters/paper.png"
import scissor from "../../assets/characters/scissor.png"
import VsMode from '../VsMode/VsMode'
import { Data } from '../../Context/ScoreContext'


const SelectionBoard = () => {

    const {userChoice, userChoiceSelector, pcChoice, pcChoiceSelector, options} = useContext(Data);


    const setPcChoiceRandom = () => {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOption = options[randomIndex];
        pcChoiceSelector(randomOption); 
    }

    return (
        <>
            {userChoice ? <VsMode /> : (
                <div className="main-selection-container">
                    <div className="triangle-border"></div>
                    <div className="triangle-fill"></div>


                    <div onClick={() => {userChoiceSelector("rock"); setPcChoiceRandom() }} id='circle' className='rock-circle'>
                        <img src={rock} alt="" />
                    </div>
                    <div onClick={() => {userChoiceSelector("paper"); setPcChoiceRandom() }} id='circle' className='paper-circle'>
                        <img src={paper} alt="" />
                    </div>
                    <div onClick={() => {userChoiceSelector("scissor"); setPcChoiceRandom() }} id='circle' className='scissor-circle'>
                        <img src={scissor} alt="" />
                    </div>



                </div>
            )
            }
        </>
    )
}

export default SelectionBoard