/*
 JSX 문법은 React.createElement 호출로 변환되기 때문에, 
 React 객체가 필ㅇ함 그래서 JSX를 사용하는 파일에서는 REact 라이브러리를 가져오기 위해 작성해야함
 React에서 제공하는 여러 기능을 사용하기 위해서라도 React를 임포트함
*/
import React from "react";

// Book 컴포넌트 생성 
function Book(props){
    return(
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    )
}


/* 아래의 코드로 인해서 
 현재 파일에서 정의한 Book 컴포넌트를 모듈의 기본 내보내기로 지정
즉 다른 파일에서 import Book from "./Book";와 같이 간단히 불러와 사용할 수 있게 함  */
export default Book;

/* 요약 
 import React from "react" >> JSX를 제대로 변환 및 react 기능 사용하기 위해 
 React 라이브러리를 가져오는 역할을 함

 export default Book >> Book 컴포넌트를 다른 파일에서 쉽게 불러와 사용할 수 있도록
 내보내는 역할을 함 

*/