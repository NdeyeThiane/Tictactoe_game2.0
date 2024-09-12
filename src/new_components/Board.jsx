import React, { useState, useEffect } from "react";
import Cells from "./Cells"; // Ensure this path is correct


 function Board({onReturnClick}) {
    const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);
    const [computerTurn, setComputerTurn] = useState(false);
    const [winner, setWinner] = useState(null);

    const handleClick = (i) => {
        if (!computerTurn && data[i] === '' && winner === null) {
            let arr = [...data];
            arr[i] = 'X';
            setData(arr);
            if (!checkWinner('X')) {
                setComputerTurn(true);
            }
        }
    };

    useEffect(() => {
        if (computerTurn && winner === null) {
            const timer = setTimeout(() => {
                computerTurnToPlay();
            }, 500);

            return () => clearTimeout(timer); 
        }
    }, [computerTurn, winner]);

    const computerTurnToPlay = () => {
        const availableIndices = data.map((item, index) => item === '' ? index : null).filter(index => index !== null);
        if (availableIndices.length > 0) {
            let choice = availableIndices[Math.floor(Math.random() * availableIndices.length)];
            let arr = [...data];
            arr[choice] = 'O';
            setData(arr);
            checkWinner('O');
            setComputerTurn(false);
        }
    };

    const checkWinner = (player) => {
        if (cond(player)) {
            setWinner(player);
            return true;
        } else if (data.every(item => item !== '')) {
            setWinner('DRAW');
            return true;
        }
        return false;
    };

    const cond = (player) => {
        return (
            (data[0] === player && data[1] === player && data[2] === player) ||
            (data[3] === player && data[4] === player && data[5] === player) ||
            (data[6] === player && data[7] === player && data[8] === player) ||
            (data[0] === player && data[3] === player && data[6] === player) ||
            (data[1] === player && data[4] === player && data[7] === player) ||
            (data[2] === player && data[5] === player && data[8] === player) ||
            (data[0] === player && data[4] === player && data[8] === player) ||
            (data[2] === player && data[4] === player && data[6] === player)
        );
    };

    return (
        <div className="Board">
            {data.map((item, index) => (
                <Cells key={index} onClick={() => handleClick(index)}>
                    {item}
                </Cells>
            ))}
            <div className="win-results">
            {winner && <div className="winner">{winner === 'DRAW' ? 'Draw!' : `Winner: ${winner}`}
                {/* Add restart button to return to start menu */}
                <span><button onClick={onReturnClick} className="font-effect-neon">Restart</button></span></div>}
                </div>
        </div>
    );
}



export default Board;