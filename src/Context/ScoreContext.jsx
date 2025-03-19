import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const Data = createContext();

const ScoreContext = ({children}) => {

    const [userChoice, userChoiceSelector] = useState('');
    const [pcChoice, pcChoiceSelector] = useState('');
    const [userScore, setUserScore] = useState(0);
    const [pcScore, setPcScore] = useState(0);
    const options = ["rock", "paper", "scissor"];
    

    useEffect( () => {
        const savedUserScore = localStorage.getItem("userScore");
        const savedPcScore = localStorage.getItem("pcScore");

        setUserScore(savedUserScore ? parseInt(savedUserScore) :0);
        setPcScore(savedPcScore ? parseInt(savedPcScore) : 0);
      

    }, []);

    useEffect( () => {
        localStorage.setItem("userScore", userScore.toString());
        localStorage.setItem("pcScore", pcScore.toString());
    })

  return (
    <>
    <Data.Provider value={{userChoice, userChoiceSelector, pcChoice, 
        pcChoiceSelector, options, userScore, setUserScore, pcScore, setPcScore}}>
        {children}
    </Data.Provider>
    </>
  )
}

export default ScoreContext