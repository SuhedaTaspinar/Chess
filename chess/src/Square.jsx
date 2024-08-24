import React from 'react';

const Square = ({children, colorValue}) => {
    //console.log(colorValue, "colorValue")
    return (
        <div className={`${colorValue ? "bg-indigo-900" : "bg-indigo-400"} w-[80px] h-[80px] flex items-center justify-center cursor-grab`}>{children}</div>
    )
}

export default Square;
