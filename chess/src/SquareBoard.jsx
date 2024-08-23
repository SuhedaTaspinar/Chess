import React from 'react';

const SquareBoard = ({brd}) => {
    console.log("brd", brd);
    return (
        <div>{brd.type}</div>
    )
}
export default SquareBoard;