import React from "react";
import Book2 from "./book2";  // 파일 이름 및 컴포넌트 이름을 올바르게 가져오기

function Kim(props){
    return(
        <div>
            <Book2 name ="김찬영" numOfPage={100}/>
        </div>
    )
}

export default Kim;  // 올바른 컴포넌트를 내보내도록 수정
