import React from "react";
import './001.css'
import Item from './item'


const List = ( {listData} ) => {     //箭頭函式，無參數 () => {函式內容}
    return <div className="list">
        {        
            listData.map(item => <Item key={item}/>)    //key必須是唯一，且不能用index當作key 
            //在JSX中使用JS需要使用 {}
        }

        

    </div>
}


export default List