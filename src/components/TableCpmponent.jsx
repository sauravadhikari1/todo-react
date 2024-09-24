import React from 'react'
import TableDataComponent from './TableDataComponent'
const TableCpmponent = ({taskList}) =>{

    const goodList = taskList.filter(item=>item.type == 'good');
    const badList = taskList.filter(item=>item.type=='bad');
    return (

      <>
      <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <h3>Good List</h3><hr/>

                            <TableDataComponent taskListArray={goodList}/>
                            </div> 

                            <div className="col-md-6 text-center"> 
                            <h3>Bad List</h3><hr/>
                            <TableDataComponent taskListArray={badList}/> 
                            </div> 
                            

                        </div>
                    </div>
      
      </>


  )
}

export default TableCpmponent
