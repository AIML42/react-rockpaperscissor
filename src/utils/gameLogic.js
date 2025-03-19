export const declareWinner = (userChoice, pcChoice) => {

    if (!userChoice || !pcChoice) return null;
  
    if (userChoice === pcChoice) {
      return "draw";
    }
  

    const winsAgainst = {
      rock: "scissor",
      paper: "rock",
      scissor: "paper",
    };
  
    if (winsAgainst[userChoice] === pcChoice) {
      return "win";
    } else {
      return "lost";
    }
  };

 