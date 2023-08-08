import React from "react";
import './001.css'

const Edit = ({add}) => {
     //setData 
    function addItem(){
        add([1,2]) 
    }
    

    return <div className="">
        <h1>備忘錄</h1>
        <p>記事：</p>
        <input type="text"></input>
        <p>日期：</p>
        <input type="date"></input>
        <p>時間：</p>
        <input type="time"></input>
        <button onClick={addItem} className="add">新增</button>

    </div>

}


export default Edit