import React from 'react';

function Block({ color, length }) {
    const style = {
        backgroundColor: color,
        width: length + 'px',
        height: length + 'px'
    };
    console.log(color)
    return (
        <div style={style} className="m-3"></div>
    );
}

export default Block;