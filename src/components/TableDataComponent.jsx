import React, { useState } from 'react'


const TableDataComponent = ({taskListArray, switchTask, deleteTask} ) => {
    return (

    <>
  <table className="table table-hover " >
    <tbody >
                  {
                    taskListArray.map((item,i)=>{

                        return(
                        
                            <tr>
                            <th scope="row">{i+1}</th>
                            <td>{item.task}</td>
                            <td>{item.hour}hrs</td>
                            <td class="text-end">

                                {
                                    item.type == 'good' ? (
                                        <>
                                        <button type="button" class="btn btn-danger"  onClick={()=>{deleteTask(item.id)}}><i
                                        class="fa-solid fa-trash"></i></button>
                    
                                        <button type="button" class="btn btn-success" onClick={()=>{switchTask(item.id,"good")}} ><i
                                        class="fa-solid fa-arrow-right" ></i></button>
                                        </>
                                        
                                    )

                                    :
<>
                                        <button type="button" class="btn btn-warning" onClick={()=>{switchTask(item.id,"bad")}}><i
                                        class="fa-solid fa-arrow-right"></i></button>
                                        <button type="button" class="btn btn-danger" onClick={()=>{deleteTask(item.id)}} ><i
                                        class="fa-solid fa-trash"></i></button>
                    
                                        </>

                                }

                                
                            </td>
                        </tr>
        

                        )
                    
                       


                    })
                  }
                    

                </tbody>
                        </table>
                        




            
</>
    )
}

export default TableDataComponent
