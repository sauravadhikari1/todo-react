import React, { useState } from 'react'
import TaskInputComoponent from "./TaskInputComponent"
import TableCpmponent from './TableCpmponent'
const WrapperComponent = () => {
const[taskList,setTaskList]=useState([{
}])
const addList=(taskObj)=>{
const obj={
    ...taskObj,
    id:getRandomUniqueID(),
    type:"good"
}
setTaskList([
    ...taskList,
    obj

])
}


const switchTask = (id,type) => {
  setTaskList(taskList.map((item)=>{
    if(item.id==id){
    if(item.type=="good"){
        item.type="bad"
    }
    else{
        item.type="good"
    }
    }
    return item;
}))
 }


 function deleteTask (id) {
    setTaskList(taskList.filter((item)=>item.id !== id))
   }




      
const getRandomUniqueID = () => {
    let stringGenerator =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = "";

    for (let i = 0; i < 9; i++) {
        let randomIndex = Math.floor(Math.random() * stringGenerator.length);
        randomString = randomString + stringGenerator[randomIndex];
    }
    return randomString
}


  return (
<>
    <div className='wrapper'>
        <div className="header">
            <h1>Not to DO LISt</h1>
            </div>
      <TaskInputComoponent addList={addList}/>
      <TableCpmponent taskList={taskList} switchTask ={switchTask} deleteTask={deleteTask}/>
    </div>
</>
  )
}

export default WrapperComponent
