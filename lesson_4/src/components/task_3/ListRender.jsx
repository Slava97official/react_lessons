import React from "react";


const ListRender = ({ numbers }) => {
    return (
        <>
        {numbers.map(num => (<div key={num}>value: {num}</div>))}
        </>
    )
}


export default ListRender