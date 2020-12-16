const gameboard = (() => {

    let arr = [null, null, null, null, null, null, null, null, null];
    
    return {arr};

    
})();


const playerName = () => {

    let playerOneName = prompt("Enter player 1 name", "player 1");
    const playerOneLabel = document.querySelector("#player-1-name");
    playerOneLabel.textContent = playerOneName;

    let playerTwoName = prompt("Enter player 2 name", "player 2");
    const playerTwoLabel = document.querySelector("#player-2-name");
    playerTwoLabel.textContent = playerTwoName;


};



const restartGame = () => {

    gameboard.arr = [null, null, null, null, null, null, null, null, null];

    const clearMessage = document.querySelector("#display-board");

    clearMessage.textContent = "";

    const clearSquares = document.querySelectorAll(".square");

    clearSquares.forEach(clearSquare => clearSquare.textContent = "");


    
};


const displayController = (() => {

    const congratulationMessage = document.querySelector("#display-board");
    
    return {congratulationMessage};
})();


const gameflow = (() => {

    let playerTurn = 0;

    let elements = document.querySelectorAll(".square");
                    
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute("data-index", `${i}`)
    }

    elements.forEach(element => 
        element.addEventListener("click", () => {
       
            if (playerTurn === 0) {
                if (element.textContent !== "x" && element.textContent !== "o" 
                && displayController.congratulationMessage.textContent !== "player 1 wins" 
                && displayController.congratulationMessage.textContent !== "player 2 wins") {
                    element.textContent = "x";
                    gameboard.arr.splice(element.dataset.index, 1, "x");
                    playerTurn = 1;
            
                }
            
            } else {
                if (element.textContent !== "x" && element.textContent !== "o" 
                && displayController.congratulationMessage.textContent !== "player 1 wins" 
                && displayController.congratulationMessage.textContent !== "player 2 wins") {
                    element.textContent = "o";
                    gameboard.arr.splice(element.dataset.index, 1, "o");
                    playerTurn = 0;
            
                }
            
            }

        
        if (gameboard.arr[0] === "x" && gameboard.arr[1] === "x" && gameboard.arr[2] === "x") {
            
            displayController.congratulationMessage.textContent = "player 1 wins";
            
        }
    
        if (gameboard.arr[3] === "x" && gameboard.arr[4] === "x" && gameboard.arr[5] === "x") {
            
            displayController.congratulationMessage.textContent = "player 1 wins";

            
        }
    
        if (gameboard.arr[6] === "x" && gameboard.arr[7] === "x" && gameboard.arr[8] === "x") {
            
            displayController.congratulationMessage.textContent = "player 1 wins";
            
        }
    
        if (gameboard.arr[0] === "x" && gameboard.arr[3] === "x" && gameboard.arr[6] === "x") {
            
            displayController.congratulationMessage.textContent = "player 1 wins";
            
        }
    
        if (gameboard.arr[1] === "x" && gameboard.arr[4] === "x" && gameboard.arr[7] === "x") {
            
            displayController.congratulationMessage.textContent = "player 1 wins";
            
        }
    
        if (gameboard.arr[2] === "x" && gameboard.arr[5] === "x" && gameboard.arr[8] === "x") {
            
            displayController.congratulationMessage.textContent = "player 1 wins";
            
        }
    
        if (gameboard.arr[0] === "x" && gameboard.arr[4] === "x" && gameboard.arr[8] === "x") {
            
            displayController.congratulationMessage.textContent = "player 1 wins";
            
        }
    
        if (gameboard.arr[2] === "x" && gameboard.arr[4] === "x" && gameboard.arr[6] === "x") {
            
            displayController.congratulationMessage.textContent = "player 1 wins";
            
        }
    

        if (gameboard.arr[0] === "o" && gameboard.arr[1] === "o" && gameboard.arr[2] === "o") {
            
            displayController.congratulationMessage.textContent = "player 2 wins";
            
        }
    
        if (gameboard.arr[3] === "o" && gameboard.arr[4] === "o" && gameboard.arr[5] === "o") {
            
            displayController.congratulationMessage.textContent = "player 2 wins";
            
        }
    
        if (gameboard.arr[6] === "o" && gameboard.arr[7] === "o" && gameboard.arr[8] === "o") {
            
            displayController.congratulationMessage.textContent = "player 2 wins";
            
        }
    
        if (gameboard.arr[0] === "o" && gameboard.arr[3] === "o" && gameboard.arr[6] === "o") {
            
            displayController.congratulationMessage.textContent = "player 2 wins";
            
        }
    
        if (gameboard.arr[1] === "o" && gameboard.arr[4] === "o" && gameboard.arr[7] === "o") {
            
            displayController.congratulationMessage.textContent = "player 2 wins";
            
        }
    
        if (gameboard.arr[2] === "o" && gameboard.arr[5] === "o" && gameboard.arr[8] === "o") {
            
            displayController.congratulationMessage.textContent = "player 2 wins";
            
        }
    
        if (gameboard.arr[0] === "o" && gameboard.arr[4] === "o" && gameboard.arr[8] === "o") {
            
            displayController.congratulationMessage.textContent = "player 2 wins";
            
        }
    
        if (gameboard.arr[2] === "o" && gameboard.arr[4] === "o" && gameboard.arr[6] === "o") {
            
            displayController.congratulationMessage.textContent = "player 2 wins";
            
        }

        
        if (gameboard.arr.includes(null) === false && 
        displayController.congratulationMessage.textContent !== "player 1 wins"
        && displayController.congratulationMessage.textContent !== "player 2 wins") {
                
            displayController.congratulationMessage.textContent = "no winner";
     
        }
        

        
        
    })

    )
    
})();







