import React from 'react'


const TableDataComponent = ({taskListArray}) => {
        let newArray=[...taskListArray]
        const switchTask = (id) => {
            let task = newArray.find((task) => task.id == id);
            task.type = task.type == "good" ? "bad" : "good";
        
        }


    return (
        <>
      <table className="table table-hover ">
        <tbody style={{background:'transparent'}}>
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
                                            <button type="button" class="btn btn-danger" ><i
                                            class="fa-solid fa-trash"></i></button>
                        
                                            <button type="button" class="btn btn-success" onClick={()=>{switchTask(item.id)}} ><i
                                            class="fa-solid fa-arrow-right" ></i></button>
                                            </>
                                            
                                        )

                                        :
<>
                                            <button type="button" class="btn btn-warning"><i
                                            class="fa-solid fa-arrow-right"></i></button>
                                            <button type="button" class="btn btn-danger"><i
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
