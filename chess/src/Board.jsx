import React from 'react';
import SquareBoard from "./SquareBoard";
import Square from "./Square";


const Board = ({board}) => {
    //console.log("Boarddd", board.flat());
    return(
        <div className="w-[640px] h-[640px] bg-green-700">
            {
                board.flat().map((brd,i) => (
                    <Square>
                        {brd && <SquareBoard brd={brd}/>}
                    </Square>
                ))
            }
        </div>
    )
}

export default Board;
