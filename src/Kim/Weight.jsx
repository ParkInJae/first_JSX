import React from "react";

function Weight(props){
    return(
        <div>
            <h2>{`오늘의 ${props.name}는 ${props.numOfPage}입니다.`}</h2>
        </div>
    )
}

export default Weight;
