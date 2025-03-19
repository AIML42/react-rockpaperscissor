import React , {useContext} from 'react'
import './GameArenaStyle.css'
import ScoreBoard from '../../Components/ScoreBoard/ScoreBoard'
import SelectionBoard from '../../Components/SelectionBoard/SelectionBoard'
import MainSection from '../../Components/RulesSection/MainSection/MainSection'
import { Data } from '../../Context/ScoreContext'
import { declareWinner } from '../../utils/gameLogic'
import WinningSection from '../../Components/WinningSection/WinningSection'

const GameArena = () => {
  
  const {userChoice, pcChoice} = useContext(Data);
  const result = declareWinner(userChoice, pcChoice);

  return (
    <>
        <div className='mainCanvas'>
          <ScoreBoard />
          <SelectionBoard />
        </div>
        {result === 'win' ? (
          <>
          <WinningSection/> 
          <MainSection/>
          </>
          ) : (<MainSection />) }
        
        

    </>
  )
}

export default GameArena