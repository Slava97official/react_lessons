import React from "react";

const LiReturn = ({name, age}) => {
    console.log(name)
    return (
        <li>{name}-{age}</li>
    )
}

export default LiReturn