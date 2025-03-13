import React from "react";
import Book from "./Book"; 

// Book 컴포넌트를 사용하는 상위 컴포넌트
function Library(props){ // 컴포넌트 
    return(
        <div>
            <Book name ="처음 만난 파이썬" numOfPage={300}/>
            <Book name ="이것이 자바다" numOfPage={340}/>
            <Book name ="처음 만난 AWS" numOfPage={4300}/>
        </div>
    )
}
export default Library;
