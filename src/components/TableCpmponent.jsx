import React, { useState } from 'react'
import TableDataComponent from './TableDataComponent'
const TableCpmponent = ({taskList, switchTask, deleteTask}) =>{

    const goodList = taskList.filter(item=>item.type == 'good');
    const badList = taskList.filter(item=>item.type==='bad');


    let totalHours=taskList.reduce((acc,item)=>{
        return acc+item.hour;
        },0)

        let badHours=badList.reduce((acc,item)=>{
            return acc+item.hour;
            },0)
            
    
    return (

      <>
      <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <h3>Good List</h3><hr/>

                            <TableDataComponent taskListArray={goodList} switchTask={switchTask}  deleteTask={deleteTask}/>
                            </div> 

                            <div className="col-md-6 text-center"> 
                            <h3>Bad List</h3><hr/>
                            <TableDataComponent taskListArray={badList} switchTask={switchTask} deleteTask={deleteTask}/> 
                            <div class="alert alert-danger" role="alert" id="bad-hours">
                                            You could have saved = {badHours} hrs
                                        </div>
                            </div> 
                            

                        </div>
                    </div>


                    <div class="container mt-4">
            <div class="row">
                <div class="col">
                    <div class="alert alert-success " role="alert" id="total-hours">
                        The total hours allocated ={totalHours}  hours
                    </div>
                </div>
            </div>
        </div>
            
      
      </>


  )
}

export default TableCpmponent
