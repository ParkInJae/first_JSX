import React from "react";
import Weight from "./Weight"; // .을 작성하지 않으면 오류 발생함 
// 파일 이름 및 컴포넌트 이름을 올바르게 가져오기

function Kimchan(props){
    return(
        <div>
            <Weight name ="김찬영" numOfPage={100}/>
        </div>
    )
}
  
export default Kimchan;  // 올바른 컴포넌트를 내보내도록 수정
