import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name ="처음 만난 파이썬" numOfPage={300}/>
            <Book name ="이것이 자바다" numOfPage={340}/>
            <Book name ="처음 만난 AWS" numOfPage={4300}/>
        </div>
    )
}
export default Library;
